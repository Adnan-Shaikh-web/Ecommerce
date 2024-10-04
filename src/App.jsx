import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, [])

  const getCountry = async (url) => {
    const response = await axios.get(url)
      .then((res) => {
        setCountryList(res.data.data);
        // console.log(countryList)
      })
  }

  const values = {
    countryList, setSelectedCountry, selectedCountry
  }

  return <>
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>

      </MyContext.Provider>
    </BrowserRouter>
  </>
}

export default App
export { MyContext };