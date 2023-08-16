import React, { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

const index = () => {
  //eslint-disable-next-line
  const postsContext = useContext(PostsContext);
  //eslint-disable-next-line
  const isMouted = useRef(true);

  const { postsState, postDispatch } = postsContext;
  console.log(postsContext);
  //eslint-disable-next-line
  useEffect(() => {
    loadPosts(postDispatch).then((dispatch) => {
      if (isMouted.current) {
        dispatch();
      }
    });

    return () => {
      isMouted.current = false;
    };
  }, [postDispatch]);

  return (
    <div>
      <h1>Posts qui</h1>
      {postsState.loading && <p>Carregando...</p>}
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default index;
