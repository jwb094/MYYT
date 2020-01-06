import React from 'react';



const render_vid = ({video}) => {
    console.log(video);
    if (!video) {
        return <div>Loading ...</div>;
    }
   let date = new Date(video.snippet.publishedAt).toDateString();
    let  channel = `https://www.youtube.com/channel/${video.snippet.channelId}`;
    let src = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div className="col-md-12">
           <div>
            <iframe src={src}  width="100%" height="500px"
                    frameborder="0" scrolling="no"  allowFullScreen title='Video player'/> 
           </div>
           <div>  

               <h3 className="text-capitalize">{video.snippet.title}</h3>
               <p className="text-capitalize">{date}</p>
            </div>
            <hr/>
            <div>
            <h5 className="text-capitalize"><a href={channel}>{video.snippet.channelTitle}</a></h5>
            <p>{video.snippet.description}</p>
          
            </div>
        </div>

        
    )

}

export default render_vid;
