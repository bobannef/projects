import React from 'react'

type Props = {
    text:string
}

export default function FooterList({text}: Props) {
  return (
     
     <li>
        <a className='link' href="">{text}</a>
     </li>

  )
}