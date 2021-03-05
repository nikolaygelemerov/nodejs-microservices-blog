import { memo, useCallback, useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../../../../../constants';

const Create = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await axios.post(`${BASE_URL}/posts/${postId}/comments`, { content });

        setContent('');
      } catch (error) {
        console.error(error);
      }
    },
    [content, postId]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            onChange={(event) => {
              setContent(event?.target?.value);
            }}
            value={content}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default memo(Create);
