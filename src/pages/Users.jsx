import React from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import { getUsers } from '../api/users'

export const Users = () => {

  const users=useLoaderData()

  return (
    <>
    <h1 className="page-title">Users</h1>
    <div className="card-grid">
        {users.map((user) => {
          return (
          <div key={user.id} className="card">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
                <div>{user.company.name}</div>
                <div>{user.website}</div>
                <div>{user.email}</div>
            </div>
            <div className="card-footer">
                <Link className="btn" to={user.id.toString()}>View</Link>
            </div>
        </div>
          )
        })}
    </div>
    </>
  )
}


export const loader = ({request : {signal}}) => {
return getUsers({signal})
}

export const userListRoute =  {
  loader,
  element:<Users/>
}