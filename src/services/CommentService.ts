import PostService from './PostService';

class CommentService {
  public static addComment(postId: string, content: string, username: string) {
    const posts = PostService.getPosts();
    const post = posts.find(post => post.id === postId);
    if (post) {
      post.comments.push({ id: Date.now().toString(), content, username });
      PostService.savePosts(posts);  
    }
  }

  public static deleteComment(postId: string, commentId: string) {
    const posts = PostService.getPosts();
    const post = posts.find(post => post.id === postId);
    if (post) {
      post.comments = post.comments.filter(comment => comment.id !== commentId);
      PostService.savePosts(posts);  
    }
  }
}

export default CommentService;
