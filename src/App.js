import './App.css';
// import {
//   Switch,
//   Route,
//   withRouter
// } from 'react-router-dom'
import graphConfig from './MockData/RelationalGraphConfig';
import Header from './components/NavBar/Header'
import RelationalGraph from './components/RelationalGraph/RelationalGraph'
import Breadcrum from './components/BreadCrum/Breadcrum';
import transformGraphData, { filterMapping } from './Utils/graphDataTransformation';
import { getNodes } from './Utils/findApiHelper'
import { useEffect, useState } from 'react';
import EmptyDataScreen from './components/EmptyDataScreen/EmptyDataScreen'
import SpaceDetail from './components/SpaceDetail/SpaceDetail'
import spaceData from './MockData/spaceData';

function App({ history }) {

  const [currentFilter, setCurrentFilter] = useState(10000);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })
  const [filteredData, setFilteredData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filterCriteria, setFilterCriteria] = useState([])
  const [path, setPath] = useState('/')
  const [searchString, setSearchString] = useState("")
  // const history = useHistory()

  const handleSearchSubmit = (queryType, searchValue) => {
    
    if (queryType && searchValue) {
      if (path === '/') {
        const config = {
          resource: "hierarchy",
          page: {
            "pageSize": 1500,
            "page": 1
          },
          q: {
            op: "and",
            criteria: [
              {
                op: "eq",
                field: "type",
                value: queryType === "asset" ? "iot.Asset" : 'iot.SpatialElement'
              },
              {
                op: "eq",
                field: "name",
                value: searchValue
              }
            ]
          }
        }
        getNodes(config, handleFindApiResponse)
        setCurrentFilter(null)
        setIsLoading(true)

      } else {
        setSearchString(searchValue)
      }
    }
  }

  const onNodeFilterSelect = (value) => {
    setCurrentFilter(value)
  }

  const handleFindApiResponse = (data) => {
    if (data && data.items) {
      const { parsedData, filterData } = transformGraphData(data)
      setFilterCriteria(filterData)
      setGraphData(parsedData)
      setFilteredData(null)
    }
    setIsLoading(false)
  }

  const handleNavigation = (path) => {
    console.log('>>>>>>>>>>>>> PATH', path)
    setPath(path)
  }

  const onClickNode = (source, target) => {
    const config = {
      resource: "hierarchy",
      page: {
        pageSize: 1500,
        page: 1
      },
      q: {
        op: "eq",
        field: "id",
        value: target.label
      }
    }
    getNodes(config, handleFindApiResponse)
    setCurrentFilter(null)
    setIsLoading(true)
  }

  useEffect(() => {
    if (graphData.nodes.length > 0 && currentFilter && currentFilter !== 'No filter') {
      let mappedObjectKey = ''
      for (let key in filterMapping) {
        if (currentFilter === filterMapping[key]) {
          mappedObjectKey = key
        }
      }
      const [direction, type] = mappedObjectKey.split('-')
      const filteredLinks = graphData.links.filter(el => {
        if (el.type && el.directed) {
          return el.type.includes(type) && el.directed === direction
        }
        return true
      })
      const filteredNodes = graphData.nodes.filter(el => {
        if (el.type && el.directed) {
          return el.type.includes(type) && el.directed === direction
        }
        return true
      })
      setFilteredData({ links: filteredLinks, nodes: filteredNodes })
    }
    if (currentFilter === 'No filter') {
      setFilteredData(null)
    }
  }, [currentFilter])

  return (
    <div className="App">
      <Header onSubmit={handleSearchSubmit} handleNavigation={handleNavigation} />
      {/* <Breadcrum /> */}
      {(isLoading || graphData.nodes.length === 0) && path === '/' && <EmptyDataScreen loading={isLoading} />}
      {!isLoading && graphData.nodes.length > 0 && <div style={{ display: 'flex' }}>
        {path === '/' && <RelationalGraph
          data={filteredData ? filteredData : graphData}
          config={graphConfig}
          filters={filterCriteria}
          onNodeFilterSelect={onNodeFilterSelect}
          onClickNode={onClickNode}
        />}
      </div>}
      {path !== '/' && <SpaceDetail data={spaceData} spaceName={searchString}></SpaceDetail>}
    </div>
  );
}

export default App
