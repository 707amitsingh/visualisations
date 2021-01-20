import './App.css';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import graphConfig from './MockData/RelationalGraphConfig';
import Header from './components/NavBar/Header'
import RelationalGraph from './components/RelationalGraph/RelationalGraph'
import Breadcrum from './components/BreadCrum/Breadcrum';
import transformGraphData from './Utils/graphDataTransformation';
import { getNodes } from './Utils/findApiHelper'
import { useEffect, useState } from 'react';
import EmptyDataScreen from './components/EmptyDataScreen/EmptyDataScreen'

function App() {

  const [currentFilter, setCurrentFilter] = useState(10000);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })
  const [filteredData, setFilteredData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [filterCriteria, setFilterCriteria] = useState([])

  const handleSearchSubmit = (queryType, searchValue) => {
    if (queryType && searchValue) {
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
    setIsLoading(true)
  }

  useEffect(() => {
    if (graphData.nodes.length > 0 && currentFilter && currentFilter !== 'No filter') {
      const filteredLinks = graphData.links.filter(el => {
        if (el.type) {
          return el.type.includes(currentFilter)
        }
        return true
      })
      const filteredNodes = graphData.nodes.filter(el => {
        if (el.type) {

          return el.type.includes(currentFilter)
        }
        return true
      })
      setFilteredData({ links: filteredLinks, nodes: filteredNodes })
    }
    if (currentFilter === 'No filter') {
      setFilteredData(null)
    }
  }, [currentFilter])

  console.log('>>>>>>>>>>>>>> Filter Data: ', filterCriteria)
  return (
    <div className="App">
      <Header onSubmit={handleSearchSubmit} />
      <Breadcrum />
      {(isLoading || graphData.nodes.length === 0) && <EmptyDataScreen loading={isLoading} />}
      {!isLoading && graphData.nodes.length > 0 && <div style={{ display: 'flex' }}>
        <Route>
          <Switch>
            <Route exact path="/ques">
              <div>Hello, world</div>
            </Route>
            <Route path="/">
              <RelationalGraph
                data={filteredData ? filteredData : graphData}
                config={graphConfig}
                filters={filterCriteria}
                onNodeFilterSelect={onNodeFilterSelect}
                onClickNode={onClickNode}
              />
            </Route>
          </Switch>
        </Route>
      </div>}
    </div>
  );
}

export default App;
