import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import api from './components/apicall';

//const Key = 
const KEY = 'AIzaSyBKKzNb0wdn-oqgfyQY_Xi5r32PnwbD1HI'; 
class App extends React.Component {
//function App() {
  state = {
        videos:[],
        sterm : ''
    };
    
    Value = (term) => {
      console.log(term);
      YTSearch({key:KEY,maxResults: 100,term}, videos => {
        console.log(videos);
      });
      
    }
    
      // const response = await api.get('/search', {
      //     params: {
      //       part: 'snippet',
      //       type:'video',
      //       q: searchTerm
            
      //     }
      // })
  
    //   this.setState({
    //     videos: response.data.items
    // })
  

     
    //}
  render(){
  return (
    <Searchbar handleFormSubmit={this.Value}/>
   
  );
  
}
}
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
export default App;
