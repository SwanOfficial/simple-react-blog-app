import React from 'react'
import { useContext } from 'react'
import { FavoriteContext } from '../store/favoriteContex'
import PostList from '../components/blog/PostList'

function FavorateBlogPosts() {
  const favoriteContext = useContext(FavoriteContext)
  return (
    <section>
        <h1>Favorite Posts</h1>
        <PostList posts={favoriteContext.favorites}/>

    </section>
  )
}

export default FavorateBlogPosts