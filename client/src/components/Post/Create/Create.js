import { memo, useCallback, useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../../constants';

const Create = () => {
  const [title, setTitle] = useState('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await axios.post(`${BASE_URL}/posts/create`, {
          title
        });

        setTitle('');
      } catch (error) {
        console.error(error);
      }
    },
    [title]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e?.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default memo(Create);
