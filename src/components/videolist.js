import React from 'react';
                {/* <li className="list-group-item" onClick={() => selected(video)}>
                    <div className="col-sm-12">
                        <img src= {video.snippet.thumbnails.default.url}></img>
                        
                    </div>
                    <div className="col-sm-12">
                        {video.snippet.title}
                    </div>
                
             
             
                </li> */}
const Videolist = ({videos, selected}) => {
    const rendervideolist = videos.map((video) => { //foreach of new array of videos list
     //  console.log(video);
        return(
            

 
              <div class="row" onClick={() => selected(video)}>
                <div class="col">
                <img src= {video.snippet.thumbnails.default.url}></img>
                </div>
                <div class="col">
                {video.snippet.title}
                </div>
                <br/>   
            </div>
)
    })
    return rendervideolist;
};

export default Videolist;

