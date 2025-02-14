export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  comments: { id: string; content: string; username: string }[];
}
