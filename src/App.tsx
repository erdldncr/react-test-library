import { data } from './data';
import { Post } from './Post';
// wordPres, php
//react => virtual dom
function App() {
  return (
    <>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}

export default App;
