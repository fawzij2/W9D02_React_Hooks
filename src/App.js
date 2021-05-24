import React,{useState} from 'react';


// jsx
const App = () => {
  const [posts, setPosts] = useState([
    {userId:5, Id:130, title: "how to react", body:"it's a long story"},
    {userId:8, Id:200, title: "next.js", body:"learn react first"} 
  ])
  const PostsRender = posts.map((elem,i)=>{
    return <div key = {i}>
      <div >{elem.title}</div>
      <div >{elem.body}</div>
    </div>
  })
  return (
      <div>
        <h1>Blog App</h1>
        <div>{PostsRender}</div>
      </div>
  )
};

export default App