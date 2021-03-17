import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';

function App() {

  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState("GkxGT56xexBarwTIi0hLUyupn4QT_jIb2JxSP4YLKvI");

const [result,setResult] = useState([]);

function handleChange(event){
 setPhoto(event.target.value);
}

function handleSubmit(event){
  console.log(photo);

  const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;

  axios.get(url).then(response => {
     console.log(response);
     setResult(response.data.results);
  });
}


  return (

    <div className="App">
      <h1>My Stargram</h1>
      <input onChange={handleChange} type="search" name="photo" placeholder="Serch Photo" />
      <button onClick={handleSubmit} type="submit">Search</button>

      {result.map((photo) => (
        <img src={photo.urls.small}/>
      ))}
    </div>
  );
}








const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);