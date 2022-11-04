
const DisplayWatchlistDetails = (props) =>{
    
    return(
    <div className='watchlist-container'>
        <table>
            <thead>
            <tr>
                <th>Stock Id</th>
                <th>Stock Name</th>
                <th>Target Price</th>
              
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((stock, index) => {
                console.log(stock)
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{stock.watchlist}</td>
                        <td>{stock.target_price}</td>
                     
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
    )
}

export default DisplayWatchlistDetails;