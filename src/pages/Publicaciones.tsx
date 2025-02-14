import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, CardActions, Divider, Box } from '@mui/material';
import PostService from '../services/PostService';
import CommentService from '../services/CommentService';
import AuthService from '../services/AuthService';
import { usePosts } from '../context/PostsContext';
import '../App.css';

const Publicaciones: React.FC = () => {
  const { posts, setPosts } = usePosts();
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const [newComment, setNewComment] = useState('');
  const currentUser = AuthService.getCurrentUser();

  const handleAddPost = () => {
    if (currentUser) {
      PostService.addPost(newPostTitle, newPostDescription, newPostDescription);
      setNewPostTitle('');
      setNewPostDescription('');
      setPosts(PostService.getPosts());
    }
  };

  const handleAddComment = (postId: string) => {
    if (currentUser) {
      CommentService.addComment(postId, newComment, currentUser.username);
      setNewComment('');
      setPosts(PostService.getPosts());
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Publicaciones
      </Typography>
      {currentUser?.role === 'publicador' && (
        <>
          <Box mb={2} className="form-container"> {}
            <TextField
              label="Título de la Publicación"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Descripción de la Publicación"
              value={newPostDescription}
              onChange={(e) => setNewPostDescription(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddPost}
              className="add-post-button" 
            >
              Añadir Publicación
            </Button>
          </Box>
        </>
      )}
      <Box mt={4} className="posts-container"> {}
        {posts.map((post) => (
          <Card key={post.id} className="publicaciones-container"> {}
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {post.description}
              </Typography>
              <Divider className="publicaciones-divider" /> {}
              <Typography variant="h6" gutterBottom className="comments-heading">
                Comentarios
              </Typography>
              {post.comments.map((comment) => (
                <Typography key={comment.id} variant="body2">
                  <strong>{comment.username}:</strong> {comment.content}
                </Typography>
              ))}
            </CardContent>
            <CardActions>
              {currentUser && (
                <>
                  <TextField
                    label="Añadir Comentario"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                  <Button variant="contained" color="primary" onClick={() => handleAddComment(post.id)}>
                    Publicar
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Publicaciones;
