import { useEffect, useState } from "react"
import PostList from "../components/blog/PostList"



function AllBlogPosts() {

    //DATA FETCH FROM SEVER
    const [posts,setPost] = useState([])
    const [isLoading,setLoading] = useState(true)

    useEffect(() =>{
        fetch('https://react-blog-app-fbfd6-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json').then((response) => {
        if(response.status == 200){
            return response.json()
        }else{
            console.log('cannot fetch data from sever')
        }
    }).then((data) => {
        const postList = []
        for (const key in data) {
            const post = {
                id : key,
                ...data[key]
            }
            postList.push(post)
        }
        setPost(postList)
        setLoading(false)
    })
    },[])
    
    let content =''
    if(isLoading){
        content = <p>Posts are Loading..</p>
    }else{
        content = <PostList posts={posts}/>
    }

    return(
        <section>
            <h1>All Blog Posts Page</h1>
            {content}
        </section>
    )
}

export default AllBlogPosts
