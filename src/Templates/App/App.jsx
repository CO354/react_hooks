import React from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import Posts from '../../components/Posts/';
const App = () => {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
};

export default App;
