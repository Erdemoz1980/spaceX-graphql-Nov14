import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { ROCKETS } from '../queries/queries';

const RocketList = () => {
  const {loading, error, data} = useQuery(ROCKETS)
  return (
    <div>
      <h3>Rocket List</h3>
      {
        loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> :
          
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
  )
}

export default RocketList
