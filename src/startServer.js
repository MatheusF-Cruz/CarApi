import { ApolloServer } from 'apollo-server';
import  mongoose  from 'mongoose';

function startServer({ typeDefs, resolvers}) {
    mongoose.connect('mongodb+srv://skinaxv:brasilias3@cluster0.ujjym.mongodb.net/cars?retryWrites=true&w=majority', {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    })
    const server = new ApolloServer({ typeDefs, resolvers})
    server.listen().then(({ url }) => console.log(`✔ Server Started at ${url}`))
}

export default startServer