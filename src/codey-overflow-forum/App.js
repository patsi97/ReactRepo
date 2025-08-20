import React from 'react';
import {comments} from './commentData'
import Card from './Card.js';

function App(props) {
  return comments.map(comment =>
      <Card commentObject={comment}/>);
}

export default App;