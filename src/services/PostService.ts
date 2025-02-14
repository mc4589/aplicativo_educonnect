import { Post } from '../types/Post';

class PostService {
  private static posts: Post[] = [];

  public static addPost(title: string, description: string, content: string) {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      description,
      content,
      comments: [],
    };
    this.posts.push(newPost);
    this.savePosts(this.posts);
  }

  public static getPosts(): Post[] {
    return this.posts;
  }

  public static deletePost(postId: string) {
    this.posts = this.posts.filter(post => post.id !== postId);
    this.savePosts(this.posts);
  }

  public static savePosts(posts: Post[]) {
    this.posts = posts;
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  public static loadPosts() {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      this.posts = JSON.parse(savedPosts);
    }
  }
}


PostService.loadPosts();

export default PostService;
