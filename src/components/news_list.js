import React from 'react'

const NewsList = (props) => {

    // const items = props.news.map()
    console.log(props)
    const items = props.news.map((item)=>{
        // the key is needed only on react
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })

    return (
        <div>
        {items}
        </div>
    )
}

export default NewsList
