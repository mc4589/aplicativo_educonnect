import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Divider, Box } from '@mui/material';
import { User } from '../types/User';
import { Comment } from '../types/Comment';
import { Post } from '../types/Post';
import PostService from '../services/PostService';
import CommentService from '../services/CommentService';
import { usePosts } from '../context/PostsContext';
import '../App.css';

const Admin: React.FC = () => {
  const { posts, setPosts } = usePosts();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(fetchedUsers);
  }, []);

  const handleDeleteUser = (username: string) => {
    const updatedUsers = users.filter((user: User) => user.username !== username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleDeletePost = (postId: string) => {
    PostService.deletePost(postId);
    setPosts(PostService.getPosts());
  };

  const handleDeleteComment = (postId: string, commentId: string) => {
    CommentService.deleteComment(postId, commentId);
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) } : post
      )
    ); // Actualiza el estado después de eliminar un comentario
  };

  return (
    <Container maxWidth="md" className="admin-container">
      <Box mb={4} className="users-container">
        <Typography variant="h4" gutterBottom>
          Gestión de Usuarios
        </Typography>
        <Divider />
        <List>
          {users.map((user: User) => (
            <ListItem key={user.username}>
              <ListItemText primary={user.username} secondary={user.role} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteUser(user.username)}
                className="button-nowrap" 
              >
                Eliminar
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>
          Gestión de Publicaciones
        </Typography>
        <Divider />
        <List>
          {posts.map((post: Post) => (
            <Box key={post.id} mb={2} className="publicaciones-container">
              <ListItem alignItems="flex-start">
                <ListItemText primary={post.title} secondary={post.description} className="list-item-text" />
                <Button
                  variant="contained"
                  className="delete-post-button" 
                  onClick={() => handleDeletePost(post.id)}
                >
                  Eliminar Publicación
                </Button>
              </ListItem>
              {post.comments.map((comment: Comment) => (
                <ListItem key={comment.id} alignItems="flex-start" className="comment-item">
                  <ListItemText primary={comment.content} />
                  <Button
                    variant="contained"
                    className="delete-comment-button" 
                    onClick={() => handleDeleteComment(post.id, comment.id)}
                  >
                    Eliminar Comentario
                  </Button>
                </ListItem>
              ))}
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Admin;
