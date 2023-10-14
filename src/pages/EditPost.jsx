import React from 'react'
import { getUsers } from '../api/users'
import { PostForm } from '../components/PostForm'
import { redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom'
import { getPost, updatePost } from '../api/posts'

export const EditPost = () => {
     
    const {post, users}=useLoaderData()

    const {state}= useNavigation()

    const isSubmitting= state==='submitting'

    const errors=useActionData()

    return (
        <>
        <h1 className="page-title">Edit Post</h1>
         <PostForm users={users} defaultValues={post} isSubmitting={isSubmitting} errors={errors}/>
        </>
      )
}

export const action = async ({request, params:{postId}}) => {
  const formData=await request.formData()
  const title=formData.get('title')
  const body=formData.get('body')
  const userId=formData.get('userId')
  

  const errors=postErrorValidator({title, body, userId})
  if(Object.keys(errors).length > 0) {
     return errors
  }

  const post=await updatePost({signal}, postId, {title, body, userId})
  return redirect(`/posts/${post.id}`)
}

export const loader = async ({request: {signal}, params: {postId}}) => {
  const post=getPost(postId, {signal})
  const users= getUsers({signal})

  return {post: await post, users : await users}
}

export const editPostRoute = {
  loader,
  action,
  element:<EditPost/>
}