import React from 'react'
import NewsItem from './news_list_item';

const NewsList = (props) => {

    // const items = props.news.map()
    console.log(props)
    const items = props.news.map((item)=>{
        // the key is needed only on react
        return(
            <NewsItem key={item.id} item={item}/>
        )
    })

    return (
        <div>
        {items}
        </div>
    )
}

export default NewsList
