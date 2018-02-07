import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ReactGraphql = ({ data: { allPosts, refetch } }) => {
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>{allPosts && allPosts.map(todo => <li key={todo.id}><h1>{todo.description}</h1></li>)}</ul>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    allPosts {
      id
      description
    }
  }
`)(ReactGraphql);
