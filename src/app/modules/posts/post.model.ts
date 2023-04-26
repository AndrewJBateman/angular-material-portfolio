export class Post {
  author?: string = '';
  id?: string;
  content: string = '';
  image: string = '';
  published: {
    nanoseconds: number;
    seconds: number;
  };
  subtitle: string = '';
  title: string = '';
  category: string = '';
}

