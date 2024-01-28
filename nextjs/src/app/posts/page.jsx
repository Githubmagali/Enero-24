//useState para cargar datos
//useEffect para guardar datos
//render renderizar datos
//fetch peticiones es asincrono
import PostCard from "../../components/PostCard"
import './Posts.css'

async function loadPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

     await new Promise((resolve)=>setTimeout(resolve, 2000))


    return data;
}

//RSC (REACT SERVICE COMPONENT, back end)
async function PostPages(){
    const posts = await loadPosts();
    console.log(posts);


return (
        <div className="grid">
        {posts.map((post)=>(
            <PostCard post={post} key={post.id}/>
        ))}
        </div>
    );
        }


export default PostPages