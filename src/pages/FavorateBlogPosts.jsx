import React from 'react'
import { useContext } from 'react'
import { FavoriteContext } from '../store/favoriteContex'
import PostList from '../components/blog/PostList'

function FavorateBlogPosts() {
  const favoriteContext = useContext(FavoriteContext)
  let content = ''

  if (favoriteContext.totalFavorite === 0) {
    content = <p>Not favorite posts yet....</p>
    
  }else{
    content = <PostList posts={favoriteContext.favorites}/>
  }
  return (
    <section>
        <h1>Favorite Posts</h1>
        {content}

    </section>
  )
}

export default FavorateBlogPosts