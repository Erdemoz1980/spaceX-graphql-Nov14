import React from 'react';
import { useQuery } from '@apollo/client'
import { ROCKET } from '../queries/queries';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const RocketDetails = () => {
  const { id } = useParams();

  const {loading, error,  data } = useQuery(ROCKET, {
    variables:{id}
  });

  console.log(data);

  return (
    
    loading ? <h3>Loading...</h3> : error ? <h3>error</h3> :
      <div>

    
        <h2>Rocket Details</h2>
        <Link  to='/rockets'>
        <button className='btn btn-large'>Go Back</button>
      </Link>   
        
     <div className='container'>
    
        
      <div className="row">
    <div className="col s12 m6">
      <div className="card purple darken-1">
              <div className="card-content white-text">
                <div className='card-title'>
                  <p style={{fontWeight:'bolder'}}>{data.rocket.name}</p>
                
                </div>
              <div className="card-body">
                    <img src={data.rocket.flickr_images[1]} className='responsive-img' />
                    <ul id='detail-list'>
                      <li> <span>Country:</span> {data.rocket.country}</li>
                      <li><span>Company:</span> {data.rocket.company}</li>
                      <li><span>Description:</span> {data.rocket.description}</li>
                      <li><span>First Flight:</span> {data.rocket.first_flight}</li>
                      <li><span>Active:</span> {`${data.rocket.active ? 'Yes' : 'Deactivated'}`}</li>
                    </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div> 
        </div>
        </div>
  )
}

export default RocketDetails
