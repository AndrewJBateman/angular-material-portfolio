export class Project {
  title: string;
  svgPath1: string;
  svgPath2?: string;
  svgPath3?: string;
  svgPath4?: string;
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
