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
import Video from './components/videoselected';
//import api from './components/apicall';
// import api from '.env';
// console.log(process.env.REACT_APP_KEY);
// console.log(process.env.KEY);
const KEY = 'AIzaSyBKKzNb0wdn-oqgfyQY_Xi5r32PnwbD1HI'; 
class App extends React.Component {
//function App() {
  state = {
        videos:[],
        selected_vid:null
        
    };
  
    //YTSearch
   Value = (term) => {
      console.log(term);
      //using npm packaging call api to youtube to search for videos
      YTSearch({key:process.env.REACT_APP_KEY,term}, videos => {
        // from result setstate => which will be used in component Videoslist to render list
        this.setState({
          videos:videos
      });
      console.log(this.state.videos);
      // console.log(this.state.selected);
      });
      
    
    };
    selected = (video) => {
      console.log(video);
        this.setState({
          selected_vid:video
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


    <div className="container">
      <div className="row">
        <Searchbar handleFormSubmit={this.Value}/>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Video video={this.state.selected_vid} />
        </div>
        <div className="col-sm-4">  
          <VideosList videos={this.state.videos} selected={this.selected}/>
        </div>
      
      </div>
    </div>
    
   
  );
  
}
}
export default App;
