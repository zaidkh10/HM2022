import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Artistspa from './Components/Artistspa';
import ContactPage from './Components/ContactPage';
import ArtistPage from './Components/ArtistPage'
import artists from './Artists';
import Saved from './Components/Saved';
import { StrictMode, useState } from 'react';


function App() {
  const [data, setdata] = useState("")
  const change = (param) =>{
  setdata([...data,param])      //... -->  spread operator
}


  return ( 
    <div className="App">
<Header/>
<Routes>
<Route path = "/" element={<Main name={artists} change1={change} />} />
<Route path = "/Artists" element={<Artistspa />} />
<Route path = "/Contact" element={<ContactPage />} />\
<Route path = "/Artists/:id" element={<ArtistPage />} />\
<Route path = "/Saved/" element={<Saved name={data} />} />\





</Routes>
<Footer/>



   </div>
  );
}

export default App;
