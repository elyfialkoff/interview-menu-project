import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLFloat,
    GraphQLString,
    GraphQLNonNull,
  } from 'graphql';
  
  const MenuItemType = new GraphQLObjectType({
    name: 'MenuItem',
    fields: () => ({
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
    }),
  });
  
  const MenuCategoryType = new GraphQLObjectType({
    name: 'MenuCategory',
    fields: () => ({
      name: { type: GraphQLString },
      items: { type: new GraphQLList(MenuItemType) },
    }),
  });
  
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      categories: {
        type: new GraphQLList(MenuCategoryType),
        resolve(parent, args) {
          // Resolver implementation goes here
          // This is a placeholder. In a real application, fetch data from the database.
          return [
            {
              name: 'Appetizers',
              items: [
                { name: 'Iceberg Wedge Salad', description: 'Tomato salsa gorgonzola', price: 7.5 },
                // Add other appetizers
              ],
            },
            // Add other categories
          ];
        },
      },
    },
  });
  
  const schema = new GraphQLSchema({
    query: RootQuery,
  });
  
  export default schema;