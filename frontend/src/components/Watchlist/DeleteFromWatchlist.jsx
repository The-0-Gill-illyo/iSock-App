import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import Watchlist from './Watchlist';

const DeleteFromWatchlist = (props) => {

    const [deleteStock, setDeleteStock] = useState([]);
    const [user, token] = useAuth();

    useEffect(() =>{
        fetchStock()
    }, []);

    const fetchStock = async () => {
        let response = await axios.delete("http://127.0.0.1:8000/api/watchlist/", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });console.log(deleteStock)
        setDeleteStock(response.data)
    }


        let deletedStock;

        console.log(deletedStock);

    return(
        <div>       
            
            <form className='form-grid'>
                <button type="submit" className='btn btn-primary' style={{'marginTop': '1em'}}>Delete Stock</button>
            </form>
            {/* <Watchlist/> */}
        </div>    
        
    )
}

export default DeleteFromWatchlist;