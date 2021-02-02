import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Comment } from './components';

const List = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = useCallback(async () => {
    const res = await axios.get('http://localhost:4000/posts');

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
            <Comment.List postId={post.id} />
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
