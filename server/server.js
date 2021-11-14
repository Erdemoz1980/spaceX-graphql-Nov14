const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');
const schema = require('./schema/schema');

dotenv.config({ path: './config/config.env' });

const app = express();
app.use(cors());

const PORT = process.env.PORT;


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT} in ${process.env.NODE_ENV} mode`));