import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSONexample from './exampleDB.json';



class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         news:JSONexample
      }
    }
    
  render() {
    return (
      <div>
        <Header/>
        <NewsList news={this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));