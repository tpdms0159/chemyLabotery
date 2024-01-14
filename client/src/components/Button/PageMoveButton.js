import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'

export default function PageMoveButton(props) {
  

  PageMoveButton.defaultProps = {
    onClick : () => {console.log('defaul props')}
  }
  
  return (
    <button className='moveButton' onClick={props.onClick}>
        <Link to={props.path} className='fontStyle'> {props.text} </Link>
    </button>
  );

}
