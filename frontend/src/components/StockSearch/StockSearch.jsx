import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayStockDetails from "./DisplayStockDetails";


const StockSearch = () => {
    const [searchStocks, setSearchStocks] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    useEffect(() => {
  

  }, []);

    async function handleSubmit(event){
      event.preventDefault()

      let newSearch;

      console.log(searchInput)

      try{
        let response = await axios.get(`https://mboum-finance.p.rapidapi.com/qu/quote`, { params: {symbol: `${searchInput}`}, headers: {
          'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
          'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'}})
          console.log(response.data)

          setSearchStocks(response.data[0]);
      } catch(error){
        console.log(error.response.data)
      }
    }
    

        return ( 
            <div>
              <form onSubmit={handleSubmit}>             
                <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
                <button type='submit' className="searchButton">
                <i className="fa-fa search">search</i>
                </button>
              </form>
              <DisplayStockDetails searchStocks={searchStocks}/> 
              <div>
                {/* <StockChartData searchStocks={searchStocks}/> */}
              </div>
            </div>
  );

}
    export default StockSearch;