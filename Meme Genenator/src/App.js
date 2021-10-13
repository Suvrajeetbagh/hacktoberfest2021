import './App.css'
import Meme from './Meme'
import Page from './Page'
import {useEffect,useState} from 'react';
function App() {
const [meme,setMeme]= useState([]);
const [page,setPage] = useState(null);

useEffect(()=>{
 fetch("https://api.imgflip.com/get_memes")
  .then(response => response.json())
.then(data => {setMeme(data.data.memes)
  console.log(data)
})
},[])

  return (
    <div className="app">
      <h1>
        Meme Generator
      </h1>
    {page === null? <Meme meme ={meme} setPage={setPage}/> : <Page page={page} setPage={setPage}/> }
     </div>
  );
}

export default App;
