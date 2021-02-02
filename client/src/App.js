import { Comment, Post } from './components';

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <Post.Create />
      <hr />
      <h1>Posts</h1>
      <Post.List />
    </div>
  );
};

export default App;
