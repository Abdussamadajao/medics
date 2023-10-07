export interface OnBoarding {
  id: string;
  image: string;
  content: string;
}

export interface IMenu {
  Icon: any;
  content: string;
  route: string;
}

export interface IDoctor {
  image: string;
  rating: string;
  location: string;
  about: string;
  name: string;
  category: string;
}

export interface IProfile {
  Icon: any;
  title: string;
  route?: string;
}

export interface ICategory {
  Icon: any;
  content: string;
  route?: string;
}