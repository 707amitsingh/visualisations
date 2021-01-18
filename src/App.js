import './App.css';
import graphConfig from './MockData/RelationalGraphConfig';
import Header from './components/NavBar/Header'
import nodesMockData from './MockData/mockData1'
import RelationalGraph from './components/RelationalGraph/RelationalGraph'
import Breadcrum from './components/BreadCrum/Breadcrum';

function App() {

  const handleSearchSubmit = (queryType, searchValue) => {
    console.log('>>>>>>>>>>>> SEARCH VALUES: ', queryType, searchValue)
  }

  return (
    <div className="App">
      <Header onSubmit={handleSearchSubmit} />
      <Breadcrum />
      <div style={{ display: 'flex' }}>
        <RelationalGraph data={nodesMockData} config={graphConfig} />
      </div>
    </div>
  );
}

export default App;
