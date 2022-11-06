import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';

import './AddStockEntry.css'


const AddStockEntry = (props) => {

    const [addStock, setAddStock] = useState([]);
    const [stockName, setStockName] = useState([]);
    const [targetPrice, setTargetPrice] = useState(0);
    const [user, token] = useAuth();

    useEffect(() =>{
        fetchAddedStock()
    }, []);

    const fetchAddedStock = async () => {
        let response = await axios.post("http://127.0.0.1:8000/api/watchlist/", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });console.log(addStock)
        setAddStock(response.data)
    }


    function handleSubmit(event){
        event.preventDefault();
        let newStock = {
            watchlist: stockName,
            target_price: targetPrice,
        };
        console.log(newStock);
        props.addStockEntryProperty(newStock)
    }

    return(
        <div>       
            
            <form onSubmit={handleSubmit} className='form-grid'>
               <label>Stock Name</label>
                <input type='letter' className='form-grid' value={stockName} onChange={(stockName)=> setStockName(stockName.target.value)}/>
                <label>Target Price</label>
                <input type='number' className='form-grid' value={targetPrice}  onChange={(targetPrice)=> setTargetPrice(parseFloat(targetPrice.target.value))}/>
                <button type="submit" className='btn btn-primary' style={{'marginTop': '1em'}}>Add Stock Entry</button>
            </form>
        </div>    
        
    )
}

export default AddStockEntry;