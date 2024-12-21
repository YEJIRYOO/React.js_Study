import { useState } from "react";
import axios from 'axios';

function App(){
  const[title,setTitle]=useState('');
  const[body,setBody]=useState('');
  //log출력 함수
  const onSubmit=()=>{
    console.log(title,body)
    //db로의 post request
    axios.post('http://localhost:3001/posts',{
      title,
      body
    })
  };

  return(
    //부트스트랩의 container클래스
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input 
          className="form-control"
          value={title}
          onChange={(event)=>{
            setTitle(event.target.value);
          }
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(event)=>{
            setBody(event.target.value);
          }}
          rows="20"
        />
      </div>
      <button 
        className="btn btn-primary"
        onClick={onSubmit}
      >
        Post
      </button>
    </div>

  );
}

export default App;