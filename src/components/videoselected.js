import React from 'react';



const render_vid = ({video}) => {
    console.log(video);
    if (!video) {
        return <div>Loading ...</div>;
    }

       
    let src = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div className="col-md-12">
           {/* <h1>dsfsd</h1> */}
           <div>
            <iframe src={src}  width="100%" height="500px"
                    frameborder="0" scrolling="no"  allowFullScreen title='Video player'/> 
           </div>
           <div>  

               <h3 className="text-capitalize">{video.snippet.title}</h3>
            </div>
            <hr/>
            <div>
            <h5>{video.snippet.channelTitle}</h5>
            <p>{video.snippet.description}</p>
          
            </div>
        </div>

        
    )

}

export default render_vid;
