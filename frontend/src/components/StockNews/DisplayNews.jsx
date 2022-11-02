

export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    };


    return(
        <div onChange={handleClick}>
            <h3>
               <p> {props.stockNews.description} </p>
                <br/>
                <br/>
                {props.stockNews.pubDate}
                <br/>
                <br/>
                {props.stockNews.title}
                <br/>
                <br/>
                <a href="props.stockNews.link">{props.stockNews.link}</a>
            </h3>
        </div>
    )
    

       
}