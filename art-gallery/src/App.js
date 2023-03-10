import './App.css';
import {useState, useEffect} from 'react'
import ButtonBar from './ButtonBar.js'
import Gallery from './Gallery.js'


function App(){
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])


// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

return (
  <div className = 'App'>
    <h1>{data.title}</h1>
    <Gallery data={data} />
    <ButtonBar setArtId={handleIterate}/>
  </div>
)
}


export default App;
