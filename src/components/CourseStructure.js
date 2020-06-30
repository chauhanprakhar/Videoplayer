import React,{useState} from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    const courseName = props.match.params.coursename;
    const courses = {
        reactjs:[
            {title:"DP forcing Kapil to have ghapaghap",vid:"pN_BW_U49ns"},
        ],
        nodejs:[
            {title:"extra stuff",vid:"qkaMfnCAxfQ"},
        ]
    }
    const [vid,uid] = useState(courses[courseName][0].vid)
    const [title,utit] = useState(courses[courseName][0].title)
    const renderVideo =()=>{
        return(
           <> 
           <h1>{title}</h1>
      <div className="video-container">
      <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} rameBorder="0" allowFullScreen></iframe>
    </div>
    </>
        )
    }
  return (
    <div>
        {renderVideo()}
        <div className="collection">
        {
            courses[courseName].map(item=>{
                return <a href="#!" className="collection-item" onclick ={()=>{
                uid(item.vid)
                utit(item.vid)
                }}>{item.title}</a>
            })
        }
      </div>
    </div>
      
  );
}

export default Home;
