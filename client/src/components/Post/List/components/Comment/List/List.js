import { memo, useMemo } from 'react';

const List = ({ comments }) => {
  const renderedComments = useMemo(() => {
    return comments?.map((comment) => {
      let content = null;

      if (comment.status === 'approved') {
        content = comment.content;
      } else if (comment.status === 'pending') {
        content = 'This comment is awaiting moderation';
      } else if (comment.status === 'rejected') {
        content = 'This comment has been rejected';
      }

      return <li key={comment.id}>{content}</li>;
    });
  }, [comments]);

  return <ul>{renderedComments}</ul>;
};

export default memo(List);
