import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';

const DeleteFromWatchlist = (props) => {

    const [deleteStock, setDeleteStock] = useState("inactive");
    const [stockName, setStockName] = useState([]);
    const [targetPrice, setTargetPrice] = useState(0);
    const [user, token] = useAuth();

    useEffect(() =>{
        fetchStock()
    },[token]);

    const fetchStock = async () => {
        let response = await axios.delete("http://127.0.0.1:8000/api/watchlist/delete_from_watchlists/", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });console.log(deleteStock)
        setDeleteStock(response.data)
    }
    function handleSubmit(event){
        event.preventDefault();
        let removedStock = {
            watchlist: stockName,
            target_price: targetPrice,
        };console.log(removedStock);
        props.deleteFromWatchlistProperty(removedStock)
    }
    return(
        <div>       
            
            <form onSubmit={handleSubmit} className='form-grid'>
            <label>Stock Name</label>
                <input type='letter' className='form-grid' value={stockName} onChange={(stockName)=> setStockName(stockName.target.value)}/>
                <label>Target Price</label>
                <input type='number' className='form-grid' value={targetPrice}  onChange={(targetPrice)=> setTargetPrice(parseFloat(targetPrice.target.value))}/>
                <button style={{'marginTop': '1em'}}>Delete Stock</button>
            </form>
        </div>    
        
    )
}

export default DeleteFromWatchlist;