import "./DisplayNews.css" 
export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    };


    return(
        <div className="display" onChange={handleClick}>
             {props.stockNews.map((news, index) => {

                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td className='display'>{news.description}</td>
                        <td>{news.title}</td>
                        <td>{news.pubDate}</td>
                        <td><a href="5175d4d2-94af-3c48-8330-28c4435a5d64">{news.guid}</a></td>
                        <td><a href="props.stockNews.link">{news.link}</a></td>
                     
                    </tr>
                );
            })}
        </div>
    )
    

       
}