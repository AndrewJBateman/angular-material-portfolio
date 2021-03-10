export class Project {
  title: string;
  svgPath: string;
  summary: string;
  images: Image[];
  github: string;
  url: string;
}

export class Image {
  src: string;
  page: string;
  content: string;
}
