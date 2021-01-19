import './App.css';
import graphConfig from './MockData/RelationalGraphConfig';
import Header from './components/NavBar/Header'
import nodesMockData from './MockData/mockApiData.json'
import RelationalGraph from './components/RelationalGraph/RelationalGraph'
import Breadcrum from './components/BreadCrum/Breadcrum';
import transformGraphData from './Utils/graphDataTransformation';
import { getNodes } from './Utils/findApiHelper'
import { useEffect, useState } from 'react';
import EmptyDataScreen from './components/EmptyDataScreen/EmptyDataScreen'

function App() {

  const [nodesCount, setNodesCount] = useState(10000);
  const [graphData, setGraphData] = useState({ nodes: [], links: []})
  const [isLoading, setIsLoading] = useState(false)
  const [filterCriteria, setFilterCriteria] = useState([])

  const handleSearchSubmit = (queryType, searchValue) => {
    if(queryType && searchValue) {
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
      setIsLoading(true)
    }
  }

  const onNodeCountSelect = (value) => {
    if(value && value > 0) {
      setNodesCount(value)
    } else {
      setNodesCount(100000)
    }
  }

  const handleFindApiResponse = (data) => {
    if(data && data.items){
      const { parsedData, filterData } = transformGraphData(data, nodesCount)
      setFilterCriteria(filterData)
      setGraphData(parsedData)
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
    if(nodesCount < graphData.nodes.length) {
      const newGraphData = {nodes: [], links: []}
      newGraphData.links = graphData.links.filter((_, i) => i < nodesCount)
      newGraphData.nodes = graphData.nodes.filter((_, i) => i <= nodesCount)
      setGraphData(newGraphData)
    }
  }, [nodesCount])

  return (
    <div className="App">
      <Header onSubmit={handleSearchSubmit} />
      <Breadcrum />
      {(isLoading || graphData.nodes.length === 0) && <EmptyDataScreen loading={isLoading} /> }
      {!isLoading && graphData.nodes.length > 0 && <div style={{ display: 'flex' }}>
        <RelationalGraph
          data={graphData}
          config={graphConfig}
          onNodeCountSelect={onNodeCountSelect}
          onClickNode={onClickNode}
          />
      </div>}
    </div>
  );
}

export default App;
