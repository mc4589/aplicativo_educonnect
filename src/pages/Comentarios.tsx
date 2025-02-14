import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import PostService from '../services/PostService';
import { Comment } from '../types/Comment';

const Comentarios: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Obtener los comentarios desde las publicaciones
    const posts = PostService.getPosts();
    const fetchedComments: Comment[] = [];
    posts.forEach(post => {
      fetchedComments.push(...post.comments);
    });
    setComments(fetchedComments);
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Comentarios
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText primary={<><strong>{comment.username}:</strong> {comment.content}</>} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Comentarios;
