import React, { useState } from 'react';
import AddStockEntry from './AddStockEntry';
import DisplayWatchlistDetails from './DisplayWatchlistEntries';

function Watchlist(props) {
    const [entries, setEntries] = useState([])

    function addNewEntry(entry){
  
        let tempEntries = [entry, ...entries];
        
        setEntries(tempEntries);
        console.log(tempEntries)
        }

        return(
            <div>
                <div>
                <h1>{props.tempEntries}</h1>
                </div>
                <DisplayWatchlistDetails parentEntries={entries}/>
                <AddStockEntry addStockEntryProperty={addNewEntry}/>
            </div>
        )
}

export default Watchlist;