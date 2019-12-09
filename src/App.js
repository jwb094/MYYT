import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar';
import api from './components/apicall';

class App extends React.Component {
//function App() {
  state = {
        videos:[],
        sterm : ''
    };
    
    Value = async (searchTerm) => {
 
      console.log(searchTerm);
  
      const response = await api.get('/search?', {
          params: {
            part: 'snippet',
            q: searchTerm
          }
      })
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
    //   this.setState({
    //     videos: response.data.items
    // })
  

     
    }
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
