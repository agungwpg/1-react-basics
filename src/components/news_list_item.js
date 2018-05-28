import React from 'react'

// const NewsItem = (props) => {
//   return (
//     <div key={props.item.id}>
//         <h3>{props.item.title}</h3>
//         <div>
//             {props.item.feed}
//         </div>
//     </div>
//   )
// }

const NewsItem = ({item}) => {
    return (
      <div style={{
          padding:'20px',
          boxSizing:'border-box',
          borderBottom:'1px solid grey'
      }}>
          <h3>{item.title}</h3>
          <div>
              {item.feed}
          </div>
      </div>
    )
  }

export default NewsItem
