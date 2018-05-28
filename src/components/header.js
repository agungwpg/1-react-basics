import React, { Component } from 'react'

export class Header extends Component {
  
    inputChange(e){
        console.log(e.target.value);
    }
  
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
          <div 
            style={styles.logo}
            onClick={()=>{console.log('clicked')}}
            >Logo</div>
          <input
            style={styles.input}
            onChange={this.inputChange}/>
      </header>
    )
  }
}

export default Header
