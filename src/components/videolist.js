import React from 'react';

const Videolist = ({videos }) => {
    const rendervideolist = videos.map((video) => { //foreach of new array of videos list
        console.log(video);
        return(
            <ul className="list-group">
                <li className="list-group-item" onClick="{() => selected(video)}">
                    <div className="col-sm-6">
                        <img src= {video.snippet.thumbnails.medium.url}></img>
                        {video.id.videoId}
                    </div>
                    <div className="col-sm-6">
                        {video.snippet.title}
                    </div>
                </li>
            </ul>
)
    })
    return rendervideolist;
};

export default Videolist;

