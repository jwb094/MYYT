import React from 'react';

const Videolist = ({videos, selected}) => {
    const rendervideolist = videos.map((video) => { //foreach of new array of videos list
        console.log(video);
        return(
            
                <li className="list-group-item" onClick={() => selected(video)}>
                    <div className="col-sm-12">
                        <img src= {video.snippet.thumbnails.medium.url}></img>
                        {video.id.videoId}
                    </div>
                    <div className="col-sm-12">
                        {video.snippet.title}
                    </div>
                </li>
           
)
    })
    return rendervideolist;
};

export default Videolist;

