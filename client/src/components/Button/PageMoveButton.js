import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { Button } from '../StyledTag'

export default function PageMoveButton(props) {
  PageMoveButton.defaultProps = {
    onClick : () => {console.log('defaul props')}
  }
  
  return (
    <Button style={{maxWidth: props.signup ? '150px': ''}} onClick={props.onClick}>
        <Link to={props.path} className='fontStyle'> {props.text} </Link>
    </Button>
  );

}
