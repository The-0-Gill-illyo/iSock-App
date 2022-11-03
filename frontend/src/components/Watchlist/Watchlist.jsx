import React, {  useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';


import AddStockEntry from './AddStockEntry';
import DisplayWatchlistDetails from './DisplayWatchlistEntries';

const Watchlist = () => {

    const [entries, setEntries] = useState([]);
    const [storedToWatchlist, setStoredToWatchlist] = useState([]);
    const [user, token] = useAuth();

    useEffect(() =>{
        fetchSearchResults()
    }, []);

    const fetchSearchResults = async () => {
        let response = await axios.get("http://127.0.0.1:8000/api/watchlist/", {
            headera: {
                Authorization: "Bearer " + token,
            },
        });console.log(storedToWatchlist)
        setStoredToWatchlist(response.data)
    }
    fetchSearchResults()

        function addNewEntry(entry){
  
        let tempEntries = [entry, ...entries];
        
        setEntries(tempEntries);
        console.log(tempEntries)
        }

        return(
            
            <div>
                <div>
                </div>
                <DisplayWatchlistDetails parentEntries={entries}/>
                <AddStockEntry addStockEntryProperty={addNewEntry}/>
           </div>
        )
}

export default Watchlist;