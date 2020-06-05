export class Project {
  title: string;
  summary: string;
  icon: string;
  images: Image[];
  github: string;
  url: string;
}

export class Image {
  src: string;
  page: string;
  content: string;
}
