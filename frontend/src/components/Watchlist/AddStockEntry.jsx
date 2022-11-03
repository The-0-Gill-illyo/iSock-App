import React, { useState } from 'react';


const AddStockEntry = (props) => {

    const [stockName, setStockName] = useState("");
    const [targetPrice, setTargetPrice] = useState(0);

    function handleSubmit(event){
        event.preventDefault();
        let newStock = {
            stock_name: stockName,
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
                <button type="submit" className='btn btn-primary' style={{'marginTop': '1em'}}>Set Stock Entry</button>
            </form>
        </div>    
        
    )
}

export default AddStockEntry;