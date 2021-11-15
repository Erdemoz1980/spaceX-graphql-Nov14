import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { ROCKETS } from '../queries/queries';
import { Link } from 'react-router-dom';

const RocketList = () => {
  const {loading, error, data} = useQuery(ROCKETS)
  return (
    <div>
      <h3>Rocket List</h3>
      <Link  to='/'>
        <div className='container'>
              <button className='btn btn-large'>Go Back</button>
        </div>
    
      </Link>
      {
        loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> :
          <div className='container'>
            {
              data.rockets.map(rocket => (
        
                <div key={rocket.id}>
                  <div className='card purple darken-1'>
                    <div className='card-content white-text'>
                      <div className='card-title'>
                        {rocket.name}
                      </div>
                    </div>
                  </div>
               </div>
            ))
              
           }

          </div>
          
          
     }
    </div>
  )
}

export default RocketList
