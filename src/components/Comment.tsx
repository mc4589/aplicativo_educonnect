import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Comment } from '../types/Comment';

interface CommentProps {
  comment: Comment;
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Card style={{ marginTop: '8px', marginLeft: '16px' }}>
      <CardContent>
        <Typography>{comment.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommentComponent;
