import React from 'react'

export const TodoItem = ({id, title, completed}) => {
  return (
    <li className={completed? 'strike-through' : undefined}>{title}</li>
    
  )
}
