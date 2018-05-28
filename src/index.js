import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSONexample from './exampleDB.json';



class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         news:JSONexample,
         filtered:JSONexample
      }
    }
    
    filterNews(keyword){
        // console.log(keyword)
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1;
        })
        this.setState({filtered: filtered})
    }

    render() {
        return (
        <div>
            <Header newsSearch={keywords=>this.filterNews(keywords)}/>
            <NewsList news={this.state.filtered}/>
        </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));