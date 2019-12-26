import React from 'react';



const render_vid = ({video}) => {
    console.log(video);
    if (!video) {
        return <div>Loading ...</div>;
    }

       
    let src = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div className="col-md-12">
           <h1>dsfsd</h1>
        <iframe src={src}  allowFullScreen title='Video player'/> 
        </div>
        
    )

}

export default render_vid;
