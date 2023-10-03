import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './menu.schema';
import resolvers from './menu.resolver';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing in the browser
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});