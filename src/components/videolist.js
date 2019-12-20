import React from 'react';

const Videolist = ({videos }) => {
    const rendervids = videos.map((video) => { //foreach of new array of videos list
        console.log(video);
        return(
            <ul class="list-group">
                <li class="list-group-item" onclick="selected()">
                    <div class="col-sm-6">
                        <img src= {video.snippet.thumbnails.medium.url}></img>
                        {video.id.videoId}
                    </div>
                    <div class="col-sm-6">
                        {video.snippet.title}
                    </div>
                </li>
            </ul>
)
    })
    return rendervids;
};

export default Videolist;

