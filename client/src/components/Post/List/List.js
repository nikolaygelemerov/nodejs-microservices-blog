import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Comment } from './components';

import { BASE_URL } from '../../../constants';

const List = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = useCallback(async () => {
    const res = await axios.get(`${BASE_URL}/posts`);
    console.log('res.data: ', res.data);
    setPosts(res.data);
  }, []);

  const renderedPosts = useMemo(() => {
    return Object.values(posts).map((post) => {
      return (
        <div
          key={post.id}
          className="card"
          style={{
            width: '30%',
            marginBottom: '20px'
          }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <Comment.List comments={post.comments} />
            <Comment.Create postId={post.id} />
          </div>
        </div>
      );
    });
  }, [posts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default memo(List);
