import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RocketList from './components/RocketList';
import LaunchList from './components/LaunchList';
import LandingPage from './components/LandingPage';
import RocketDetails from './components/RocketDetails';



const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });


  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/launches' element={<LaunchList/>} />
          <Route path='/rockets' element={<RocketList />} />
          <Route path='/rockets/:id' element={<RocketDetails />} />
        </Routes>
      </ApolloProvider>
      </Router>
  )
};

export default App
