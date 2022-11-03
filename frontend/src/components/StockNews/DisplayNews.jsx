

export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    };


    return(
        <div onChange={handleClick}>
            <h3>
               <p> <h1>{props.stockNews.description}</h1> </p>
                <br/>
                <br/>
                <h2>{props.stockNews.pubDate}</h2>
                <br/>
                <br/>
                <h2>{props.stockNews.title}</h2>
                <br/>
                <br/>
                <h3><a href="props.stockNews.link">{props.stockNews.link}</a></h3>
            </h3>
        </div>
    )
    

       
}