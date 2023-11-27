import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { data } from './data';
import { Post } from './Post';
function App() {
  const queryClient = new QueryClient();
  const posts = useGetPosts();
  return (
    <QueryClientProvider client={queryClient}>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </QueryClientProvider>
  );
}

export default App;
