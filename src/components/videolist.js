import React from 'react';
//import videos from './components/videoitem';

// class Videolist extends React.Component {
//     constructor(props) {
//          super(props);
//     //     this.state = {
//     //         list : ''
//     //     };
//        console.log(props);
//        }
//        console.log(props);
//     // const Videolist = ({videos}) =>({
//     //   const list = videos.map((video) =>{
//     //     //   render(){

//     //     //   }
//     //     console.
//     //   })
//     // });
//      render() {
        
//         return(   <h1>Pkm: {this.props}</h1>)
//          }


// }

const Videolist = ({videos }) => {
    const rendervids = videos.map((video) => { //foreach of new array of videos list
        console.log(video);
        return(
        <h1>{video.id.videoId}

        </h1>)
    })
    return rendervids;
};

export default Videolist;

