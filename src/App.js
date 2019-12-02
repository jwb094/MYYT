import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar';
import api from './components/apicall';

class App extends React.Component {
//function App() {
  state = {
        searchterm : '',
    };
    Value = async (T) => {
      console.log(T);
      const response = await api.get('/search', {
          params: {
              q: ''
          }
      })
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
