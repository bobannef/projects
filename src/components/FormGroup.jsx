import React from 'react'

export const FormGroup = ({children, errorMessage}) => {
  return (
    <div className={`form-group ${errorMessage!==null ? 'error' : ''}`}>
    {children}
    {errorMessage !==null && <div className='errorMessage'>{errorMessage}</div>}
    </div>
  )
}
