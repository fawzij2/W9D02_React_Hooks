import React,{useState} from 'react';


// jsx
const App = () => {
  const [posts, setPosts] = useState([
    {userId:5, id:130, title: "how to react", body:"it's a long story"},
    {userId:8, id:200, title: "next.js", body:"learn react first"} 
  ])
  const [id,setId] = useState(``);
  const [userId,setUserId] = useState(``);
  const [title, setTitle] = useState (``);
  const [body, setBody] = useState (``);

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
        <button onClick={()=>{
          const newPost = [{
            userId:userId,
            id:id,
            title:title,
            body:body
          }];
          setPosts([...posts,  {
            userId:userId,
            id:id,
            title:title,
            body:body
          }])
        }}>click me</button>
        <input type= "number" placeholder="userId" onChange={(e)=>{
          setUserId(e.target.value);
          console.log(userId)
        }}/>
        <input type= "number" placeholder="id" onChange={(e)=>{
          setId(e.target.value);
          console.log(id)
        }}/>
        <input type= "string" placeholder="title" onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>
        <input type= "string" placeholder="body" onChange={(e)=>{
          setBody(e.target.value);
        }}/>
      </div>
  )
};

export default App