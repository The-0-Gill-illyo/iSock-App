import { useState } from "react";


export default function DisplayStockNews(props){

    function handleClick(news){

        console.log(news)
        let newsId = news.id.newsId
    };


    return(
        <h3>
            {props.stockNews.description}
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
    )
    

       
}