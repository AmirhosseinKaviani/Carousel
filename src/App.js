
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Carousel from './components/Carousel';

function App() {
  const [dataImage, setDataImage] = useState([]);
  useEffect(()=>{
    axios.get(`https://picsum.photos/v2/list`)
    .then(response => {
      setDataImage(response.data)});
  },[])
  return (
    <div className="App">
      <Carousel dataImage={dataImage}/>
    </div>
  );
}

export default App;
