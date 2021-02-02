import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const List = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const renderedComments = useMemo(() => {
    return comments.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });
  }, [comments]);

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, []);

  return <ul>{renderedComments}</ul>;
};

export default memo(List);
