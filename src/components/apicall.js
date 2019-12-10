import axios from 'axios';
//import React from 'react';

//const Key = 
const KEY = 'AIzaSyBKKzNb0wdn-oqgfyQY_Xi5r32PnwbD1HI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        // part: 'snippet',
     //   maxResults: 5,
      key: KEY
    }
})



