import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getPosts } from '../api/posts'
import { PostCard } from '../components/PostCard'
import { getUsers } from '../api/users'

export const Posts = () => {

  const {posts,users, searchParams : {query, userId}}=useLoaderData()

  const queryRef=useRef()

  const userIdRef=useRef()

  useEffect(() => {
   queryRef.current.value=query || ''
  }, [query])

  useEffect(() => {
    userIdRef.current.value=userId || ''
   }, [userId])



  return (
    <>
    <h1 className="page-title">
      Posts
     <div className="title-btns">
          <Link className="btn btn-outline" to='new'>New</Link>
       </div>
    </h1>
 <form method="get" action="/posts" className="form mb-4">
    <div className="form-row">
        <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef}/>
        </div>
        <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userIdRef}>
               {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>{user.name}</option>
                )
               })}
            
            </select>
        </div>
        <button className="btn">Filter</button>
    </div>
</form> 
   <div className="card-grid">
       {posts.map((post) => {
        return (
          <PostCard 
           key={post.id}
           {...post}
          />
        )
       })}
   </div>
</>
  )
}

export const loader =async ({request : {signal, url}}) => {
  const searchParams=new URL(url).searchParams
  const query= searchParams.get('query')
  const userId=searchParams.get('userId')
  const filteredParams={q:query}
  if(userId!==null) filteredParams.userId=userId
  
  const posts = getPosts({signal, params : filteredParams})
  const users=getUsers({signal})
  return {posts : await posts, users : await users, searchParams : {query, userId}}
}


export const postListRoute = {
  loader, 
  element:<Posts/>
}

