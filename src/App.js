import React from 'react';
//import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
/*import searchYoutube from 'youtube-api-v3-search';
import YoutubeSearch from "youtube-api-search-reloaded";
import betterYT from 'better-youtube-api';*/
import Searchbar from './components/searchbar';
import VideosList from './components/videolist';
//import api from './components/apicall';
// import api from '.env';

//const Key = 
const KEY = 'AIzaSyBKKzNb0wdn-oqgfyQY_Xi5r32PnwbD1HI'; 
class App extends React.Component {
//function App() {
  state = {
        videos:[],
        selected:''
        
    };
    //YTSearch
   Value = (term) => {
      console.log(term);
      YTSearch({key:KEY,term}, videos => {
       
        this.setState({
          videos:videos
      });
      console.log(this.state.videos);
      });
      
    }
//searchYoutube

  /*  Value = (term) => {

     const options = {
      q:term,
      part:'snippet',
      type:'video',
    }
   
    let result =  searchYoutube(KEY,options)
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    console.log(result);
    }*/

    //YoutubeSearch
   /* Value = (term) => {
    const params = {
      part:'snippet',
      key:KEY,
      term:term,
      type:'video',
    

    };
     

    // .then(response => { 
    //   console.log(response)
    // })
    // .catch(error => {
    //     console.log(error.response)
    // });
    YoutubeSearch({ params })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }*/
  //betterYT 
  /*Value = (term) => {
    const youtube = new betterYT(KEY);
    const videos = youtube.searchVideos(term, 20)
      .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    */
// console.log(videos) // array of 12 partial video objects
  //}
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
  

     
   // }
  render(){
  return (
    <div class="container">
      <div class="row">
        <Searchbar handleFormSubmit={this.Value}/>
      </div>
      <div class="row">
        <div class="col-sm-8">

        </div>
        <div class="col-sm-4">
          <VideosList videos={this.state.videos}/>
        </div>
      
      </div>
    </div>
    
   
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
