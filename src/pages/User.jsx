import React from 'react'
import { getUser } from '../api/users'
import { useLoaderData } from 'react-router-dom'
import { getPosts } from '../api/posts'
import { getTodos } from '../api/todos'
import { PostCard } from '../components/PostCard'
import { TodoItem } from '../components/TodoItem'


export const User = () => {

    const {user, posts, todos} = useLoaderData()

  return (
    <>
    <h1 className="page-title">{user.name}</h1>
    <div className="page-subtitle">{user.email}</div>
    <div><b>Company:</b>{user.company.name}</div>
    <div><b>Website:</b>{user.website}</div>
    <div><b>Address:</b> {user.address.street} {user.address.suite} , {user.address.city}, {user.address.zipcode}</div>
    <h3 className="mt-4 mb-2">Posts</h3>
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
        <h3 className="mt-4 mb-2">Todos</h3>
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
               key={todo.id}
               {...todo}
              />
            )
          })}   
        </ul>
    </>
  )
}


export const loader = async ({request: {signal}, params: {userId}}) => {
  const posts=getPosts({signal}, userId )
  const user= getUser ( userId, {signal})
  const todos=getTodos({signal}, userId)

  return {posts : await posts, user : await user, todos: await todos }
}

export const userRoute ={
    loader, 
    element: <User/>
}
