

import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormGroup } from './FormGroup'

export const PostForm = ({users, defaultValues={}, isSubmitting, errors = {}}) => {

  return (
    <Form method="post" action="/posts/new" className="form">
        <div className="form-row">
             <FormGroup errorMessage={errors.title}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={defaultValues.title} />
                </FormGroup>
              <FormGroup errorMessage={errors.userId}>
                <label htmlFor="userId">Author</label>
                <select name="userId" id="userId" defaultValue={defaultValues.userId}>
                  {users.map((user) => {
                    return (
                    <option key={user.id} value={user.id}>{user.name}</option>
                    )
                  })}
            
                </select>
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.body}>
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" defaultValue={defaultValues.body}></textarea>
            </div>
            </FormGroup>
        </div>
        <div className="form-row form-btn-row">
            <Link className="btn btn-outline" to='..'>Cancel</Link>
            <button disabled={isSubmitting} className="btn">
               {isSubmitting ? 'Saving' : 'Save'}
            </button>
        </div>
    </Form>
  )
}


export const postErrorValidator = ({title, body, userId}) => {

const errors={}

   if(title==='') {
    errors.title='Required'
  }
  if(body==='') {
    errors.body='Required'
  }
  if(userId==='') {
    errors.userId='Required'
  }

  return errors

}