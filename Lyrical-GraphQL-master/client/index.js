import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,hashHistory,IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import App from './components/app';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';

const client = new ApolloClient({
    dataIdFromObject :o => o.id // video 66
});

const Root = () => {
  return(
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" components={App}>
              <IndexRoute component={SongList}/>
            <Route path="songs/new" components={SongCreate}/>
            <Route path="songs/:id" components={SongDetails}/>
          </Route>
        </Router>
      </ApolloProvider>

      )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
