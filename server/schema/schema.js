const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull

} = require('graphql');
const axios = require('axios');


const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    date_local: { type: GraphQLString },
    crew: { type: new GraphQLList(CrewType) },
    success: { type: GraphQLBoolean },
    details: { type: GraphQLString }
  })
});

const CrewType = new GraphQLObjectType({
  name: 'Crew',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    launches:{type: new GraphQLList(GraphQLString)}
  })
})

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    company: { type: GraphQLString },
    description: { type: GraphQLString },
    first_flight: { type: GraphQLString },
    flickr_images: { type: new GraphQLList(GraphQLString)},
    active: { type: GraphQLBoolean }
  
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v4/rockets')
          .then(res => res.data)
          .catch(err => console.error(err));
      }
    },
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v5/launches')
          .then(res => res.data)
          .catch(err => console.log(err));
      }
    },
    launch: {
      type: LaunchType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v5/launches/${args.id}`)
          .then(res => res.data)
          .catch(err => console.log(err));
      }
    },
    crew: {
      type: CrewType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/crew/${args.id}`)
          .then(res => res.data)
          .catch(err => console.log(err));
      }
    },
    rocket: {
      type: RocketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
          .then(res => res.data)
          .catch(err => console.log(err));
        
      }
    }
 
  }
});


module.exports = RootSchema = new GraphQLSchema({
  query: RootQuery
});