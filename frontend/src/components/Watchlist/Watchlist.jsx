import React, { useState } from 'react';
import AddStockEntry from './AddStockEntry';

import DisplayWatchlistDetails from './DisplayWatchlistEntries';

function Watchlist() {
    const [entries, setEntries] = useState([])

    function addNewEntry(entry){
  
        let tempEntries = [entry, ...entries];
        
        setEntries(tempEntries);
        console.log(tempEntries)
        }

        return(
            <div>
                <DisplayWatchlistDetails parentEntries={entries}/>
                <h1>{Watchlist.entry}</h1>
                <AddStockEntry addStockEntryProperty={addNewEntry}/>
            </div>
        )
}

export default Watchlist;