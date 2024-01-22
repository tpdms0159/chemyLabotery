import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Mainview, { Middleicons, Minititle, Title, Titlebox } from './StyledTag';

function MovePage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(res => {
        setData(res.loading); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
    { data.length === 3 ? 
    <Mainview style={{justifyContent: 'flex-start'}}> 
      <Titlebox>
        <Title> {data[props.index].title} </Title>
        <Minititle> {data[props.index].exp} </Minititle>
      </Titlebox>

      <Link to={props.link}>
        <Middleicons alt="image" src={data[props.index].src}/>
      </Link>
   </Mainview> : null}
   </>
  );

}

export default MovePage;
