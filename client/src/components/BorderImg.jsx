import React from 'react';
import {isMobile} from 'react-device-detect';

export default function BorderImg() {
 
  return (
      < >
      <img alt='border1' src='/icons/edge1.png ' style={{width: '110px', height:'115px', position: 'fixed', top: 0, left: 0}}/>
      <img alt='border2' src='/icons/edge2.png ' style={{width: '110px', height:'115px', position: 'fixed', top: 0, right: 0}}/>
      <img alt='border3' src='/icons/edge3.png ' style={{width: '135px', height:'140px', position: 'fixed', bottom: 0, left: 0}}/>
      <img alt='border4' src='/icons/edge4.png ' style={{width: '135px', height:'140px', position: 'fixed', bottom: 0, right: 0}}/>
      
      </>
 
  )
}
