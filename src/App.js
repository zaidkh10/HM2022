import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Artistspa from './Components/Artistspa';
import ContactPage from './Components/ContactPage';
import ArtistPage from './Components/ArtistPage'
function App() {
  return ( 
    <div className="App">
<Header/>
<Routes>
<Route path = "/" element={<Main />} />
<Route path = "/Artists" element={<Artistspa />} />
<Route path = "/Contact" element={<ContactPage />} />\
<Route path = "/Artists/:id" element={<ArtistPage />} />\


</Routes>
<Footer/>



   </div>
  );
}

export default App;
