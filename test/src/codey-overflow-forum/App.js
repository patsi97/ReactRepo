import React from 'react';
import {comments} from './commentData'
import Card from './Card';

function App(props) {
  return comments.map(comment =>
      <Card commentObject={comment}/>);
}

export default App;