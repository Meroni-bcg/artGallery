import './App.css';
import {useState, useEffect} from 'react'
import { Gallery } from '.Gallery.js'
import { ButtonBar } from '.ButtonBar.js'

function App(){
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

// in App.js
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

function Gallery(props){
  return (
      <div style={{'width': '100%'}}>
          <img src={props.objectImg} alt={props.title} />
          <p>{props.artist}</p>
      </div>
  )
}


return (
  <div>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <buttonBar handleIterate={handleIterate} />

  </div>
)
}


export default App;
