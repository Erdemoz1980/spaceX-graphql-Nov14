import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { LAUNCHES } from '../queries/queries';

const LaunchList = () => {
  const { loading, error, data } = useQuery(LAUNCHES)
  return (
    <div>
        <h3>Launch List</h3>
      {
        loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> :
          <div className='container'>
            {data.launches.map(launch => (
              <div key={launch.id}>
                <div className='card purple darken-1'>
                  <div className='card-content white-text'>
                    <div className='card-title'>
                      {launch.name}
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
};

export default LaunchList
