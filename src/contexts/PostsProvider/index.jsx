import P from 'prop-types';
import { PostsContext } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';
export const PostsProvider = ({ children }) => {
  const [postsState, postDispatch] = useReducer(reducer, data);
  console.log(postsState);
  return (
    <PostsContext.Provider value={{ postsState, postDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
