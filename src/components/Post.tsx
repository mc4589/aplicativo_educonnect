import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import CommentComponent from './Comment';
import { Post } from '../types/Post';

interface PostProps {
  post: Post;
  onAddComment: (postId: string, content: string) => void;
}

const PostComponent: React.FC<PostProps> = ({ post, onAddComment }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleAddComment = () => {
    onAddComment(post.id, commentContent);
    setCommentContent('');
  };

  return (
    <Card style={{ marginTop: '16px' }}>
      <CardContent>
        <Typography variant="h5">{post.content}</Typography>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No hay comentarios
          </Typography>
        )}
        <TextField
          label="Nuevo Comentario"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddComment}>
          Añadir Comentario
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostComponent;
