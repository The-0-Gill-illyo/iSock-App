import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayStockNews from './DisplayNews';
import "./StockNews.css"

const StockNews = () => {
    const [stockNews, setStockNews] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
  
        }, []);
      
          async function handleSubmit(event){
            event.preventDefault()
      
            let newsSearch;
      
            console.log(stockNews)

            try{
                let response = await axios.get(`https://mboum-finance.p.rapidapi.com/ne/news/`, {params: {symbol: `${searchInput}`}, headers: {
                  'X-RapidAPI-Key': '86d3b4a83bmsh0dd08eec6709231p1c4988jsn55fac02dce50',
                  'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'}})
                console.log(response.data)

                setStockNews(response.data.item);
        } catch(error){ 
          console.log(error.response.item)
      }           
            }
          
        return ( 
            <div className='display'>
              <form className='display' onSubmit={handleSubmit}>             
                <input type="text"  className="searchTerm" onChange={(event)=>setSearchInput(event.target.value)} placeholder="SEARCH"></input>
                <button type='submit' className="searchButton">
                <i className="fa-fa search">Get News</i>
                </button>
              </form>
              <DisplayStockNews stockNews={stockNews}/>
            </div>
        );      
}   
    export default StockNews; 