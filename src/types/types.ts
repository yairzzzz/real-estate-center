export type ArticleProps = {
  img: string;
  alt: string;
  title: string;
  content?: string;
  date: string;
  author: string;
};

export type ButtonProps = {
  styles?: string;
  contentColor?: string;
};

export type HeaderProps = {
  img: string;
  imgAlt: string;
  buttonStyles?: string;
  buttonContentColor?: string;
  headerStyles?: string;
};

export type SectionProps = {
  header: HeaderProps;
  articles: ArticleProps[];
};

export type FooterProps = {
  date: string;
  author: string;
  styles?: string;
};

export type PodcastCardProps = {
  img: string;
  alt: string;
  name: string;
  title: string;
  content: string;
  date: string;
  author: string;
};
