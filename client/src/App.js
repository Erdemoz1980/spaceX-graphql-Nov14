import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import RocketList from './components/RocketList';
import LaunchList from './components/LaunchList';



const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });


  return (
    <ApolloProvider client={client}>
      <h1>Erdem's SpaceX App</h1>
      <div className='container'>
         <div className='row'>
        <div className='col s12 m6'>
          <RocketList className='col s12 m6' />
        </div>
        <div className='col s12 m6'>
          <LaunchList className='col s12 m6' />
        </div>
      </div>
     
      </div>
    </ApolloProvider>
    
  )
};

export default App
