import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'

export default function PageMoveButton(props) {
  return (
    <button className='moveButton' type={props.type}>
        <Link to={props.path} className='fontStyle'> {props.text} </Link>
    </button>
  )
}
