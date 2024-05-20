import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';


export default function NewsBoard({category}) {

    const [article, setArticle] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3257997f40d141a2a969116da17c3240`;
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            return setArticle(data.articles);
        })
    },[category]);

  return (
    <div>
        <div className='text-center py-3 fs-3 fw-semibold bg-info'>Latest <span className='badge text-bg-danger'>News</span>
        
        </div>
        {
            article && article.map((news,index)=>{
                return <NewsItem key={index} title={news.title} description={news.desc} src={news.urlToImage} url={news.url}/>
             })
        }
    </div>
  )
}
