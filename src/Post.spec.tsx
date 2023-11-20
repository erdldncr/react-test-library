import { render, screen } from '@testing-library/react';
import { Post } from './Post';

it('should display post title when post title is present', () => {
  const testProps = {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  };
  render(<Post {...testProps} />);
  expect(screen.queryByText(testProps.title)).toBeInTheDocument();
});

it('should display no title message when post title is not present', () => {
  const testProps = {
    userId: 1,
    id: 2,
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  };
  render(<Post {...testProps} />);
  expect(screen.queryByText('No title is present')).toBeInTheDocument();
});
