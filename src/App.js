import './App.css';
import graphConfig from './MockData/RelationalGraphConfig';
import Header from './components/NavBar/Header'
import nodesMockData from './MockData/mockData1'
import RelationalGraph from './components/RelationalGraph/RelationalGraph'
import Breadcrum from './components/BreadCrum/Breadcrum';
import transformGraphData from './Utils/graphDataTransformation'
import { useEffect, useState } from 'react';

function App() {

  const [nodesCount, setNodesCount] = useState(10);
  const [graphData, setGraphData] = useState({ nodes: [], links: []})

  const handleSearchSubmit = (queryType, searchValue) => {
    console.log('>>>>>>>>>>>> SEARCH VALUES: ', queryType, searchValue)
  }

  useEffect(() => {
    const data = transformGraphData(nodesCount)
    console.log('>>>>>>>>>> DATA: ', data)
    setGraphData(data)
  }, [nodesCount])

  return (
    <div className="App">
      <Header onSubmit={handleSearchSubmit} />
      <Breadcrum />
      <div style={{ display: 'flex' }}>
        <RelationalGraph data={graphData} config={graphConfig} />
      </div>
    </div>
  );
}

export default App;
