import React, { Component } from 'react'

export class Header extends Component {
  render() {

    const styles = {
        header:{
            background: '#03a9f4',
            textAlign:'center'
        },
        logo:{
            color: '#fff',
            fontFamily: 'Anton',
            textAlign: 'center',
            fontSize: '40px'
        },
        input:{
            fontSize: '20px',
            margin: '20px 0px'
        }
    }

    return (
      <header style={styles.header}>
          <div style={styles.logo}>Logo</div>
          <input style={styles.input}/>
      </header>
    )
  }
}

export default Header
