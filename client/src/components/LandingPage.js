import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>SpaceX API</h1>
      <div className='container'>


        <div class="row">
          
    <div class="col s12 m6">
      <div class="card pink darken-1">
        <div class="card-content white-text">
                <div className='card-title'>
                  <Link to='/rockets'>
                    <h3>Rockets</h3>
                  </Link>
               
          </div>
        </div>
            </div> 
          </div>
          <div class="col s12 m6">
      <div class="card blue darken-1">
        <div class="card-content white-text">
                <div className='card-title'>
                  <Link to='/launches'>
                    <h3>Launches</h3>
                  </Link>
                  
          </div>
        </div>
            </div> 
          </div>

        
  </div>
      </div>
    </div>
      
   
  )
}

export default Landing
