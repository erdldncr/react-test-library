import { PostType } from './types/Post';

interface PostProps {
  title?: string;
  body: string;
  id: number;
  userId: number;
}

export const Post: React.FC<PostProps> = ({ id, userId, title, body }) => {
  const query = useQuery({ queryKey: ['Todos'], queryFn: getTodos });
  return (
    <div>
      <p>{title ?? 'No title is present'}</p>
    </div>
  );
};
