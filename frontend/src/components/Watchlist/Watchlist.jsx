import React, {  useState } from 'react';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

import AddStockEntry from './AddStockEntry';
import DisplayWatchlistDetails from './DisplayWatchlistEntries';

let initailValues = {
    watchlist: "",
    target_price: "",
}

const Watchlist = () => {

    const [entries, setEntries] = useState([])
    const [user, token] = useAuth()
    const [formData] = useCustomForm(initailValues, postNewStock)


    async function postNewStock(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/watchlist/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        } catch (error) {
            console.log(error.message)            
        }
    }

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
                <button>Add to Watchlist</button>
            </div>
        )
}

export default Watchlist;