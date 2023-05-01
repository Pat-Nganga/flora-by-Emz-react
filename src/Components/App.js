import { useEffect, useState } from 'react';
import './css/App.css';
import Menu from './Menu'
import Form from './Form'
import Content from './Content';

const App = () => {
  const [data, setData] = useState([])
  const [endpoint, setEndpoint] = useState('http://localhost:3000/flowers?_sort=id&_order=desc')

  const fetchData = async () => {
    const response = await fetch(endpoint);
    const flowers = await response.json();
    return flowers;
  }
  useEffect(() => {
    fetchData().then(res => {
      setData(res)
    }).catch(err => {
      console.log("Error in fetching flowers: ",err)
    })
  }, [])
  return (
    <div className="App">
      <Menu setData={setData} fetchData={fetchData} setEndpoint = {setEndpoint}/>
      <Form flowers={data} setData={setData} fetchData={fetchData} />
      <Content flowers={data} setData={setData} fetchData={fetchData} />
    </div>
  );
}

export default App;
