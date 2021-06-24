import  BookList  from "./components/BookList";
import {ApolloClient,ApolloProvider, InMemoryCache} from "@apollo/client"
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
          <div className="main">
              <h1>Reading List</h1>
              <BookList />
              <AddBook />
          </div>
      </ApolloProvider>
  );
}

export default App;