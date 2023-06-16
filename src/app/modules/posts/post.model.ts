export class Post {
  id: number = 0;
  content: string = '';
  image: string = '';
  published: {
    nanoseconds: number;
    seconds: number;
  };
  subtitle: string = '';
  title: string = '';
  category: string = 'IT' || 'Dev' || 'Eng';
}

