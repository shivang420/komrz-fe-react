import React from 'react';

import NavBar from './NavBar';
import routes from '../../routes.js';

export default function Admin(){
    return(
      <div>
        <NavBar routes={routes}/>
      </div>
    )   
}