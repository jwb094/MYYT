import axios from 'axios';
//import React from 'react';

//const Key = 
const KEY = 'AIzaSyCZ9JjJhYSHF6MilU38Ytka5QiTHeXTdHI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        // part: 'snippet',
     //   maxResults: 5,
      key: KEY
    }
})



