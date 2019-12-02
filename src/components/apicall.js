import axios from 'axios';
import React from 'react';

//const Key = 
const KEY =

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})



