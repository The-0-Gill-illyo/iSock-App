import React, {  useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';


import AddStockEntry from './AddStockEntry';
import DisplayWatchlistDetails from './DisplayWatchlistEntries';
import DeleteFromWatchlist from './DeleteFromWatchlist';

const Watchlist = () => {

    const [entries, setEntries] = useState([]);
    const [storedToWatchlist, setStoredToWatchlist] = useState([]);
    const [user, token] = useAuth();

    useEffect(() =>{
        fetchSearchResults()
    }, []);

    const fetchSearchResults = async () => {
        let response = await axios.get("http://127.0.0.1:8000/api/watchlist/", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });console.log(storedToWatchlist)
        setStoredToWatchlist(response.data)
    }

        function addNewEntry(entry){
  
        let tempEntries = [...entries, entry];
        
        console.log(tempEntries)
        setEntries(tempEntries);

        }

        return(
            
            <div>
                <div>
                </div>
                <DisplayWatchlistDetails parentEntries={storedToWatchlist}/>
                <AddStockEntry addStockEntryProperty={addNewEntry}/>
                <DeleteFromWatchlist deleteFromWatchlistProperty={entries} />

            </div>
        )
}

export default Watchlist;