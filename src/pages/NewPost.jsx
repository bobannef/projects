import React from 'react'
import {createPost, getPosts } from '../api/posts'
import { Form, Link, redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom'
import { FormGroup } from '../components/FormGroup'
import { getUsers } from '../api/users'
import { PostForm, postErrorValidator } from '../components/PostForm'

export const NewPost = () => {

const users =useLoaderData()

const {state}= useNavigation()

const isSubmitting= state==='submitting'

const errors=useActionData()

  return (
    <>
    <h1 className="page-title">New Post</h1>
     <PostForm users={users} isSubmitting={isSubmitting} errors={errors}/>
    </>
  )
}


const action =async ({request}) => {
 const formData=await request.formData()
 const title=formData.get('title')
 const body=formData.get('body')
 const userId=formData.get('userId')

 const errors=postErrorValidator({title, body, userId})
 if(Object.keys(errors).length > 0) {
    return errors
 }

const post = await createPost({signal:request.signal}, {title, body, userId})
return redirect(`/posts/${post.id}`)
}



export const loader = ({request : {signal}}) => {
    return getUsers({signal})
}

export const newPostRoute =  {
    loader, 
    action,
    element:<NewPost/>
}
