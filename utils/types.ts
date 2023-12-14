import { Docotrs, times } from "./data";
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
  id: string;
  image: string;
  rating: string;
  location: string;
  about: string;
  first_name: string;
  last_name: string;
  category: string;
}

export interface IProfile {
  Icon: any;
  title: string;
  route?: string;
}

export interface ICategory {
  id: string;
  Icon: any;
  content: string;
  route?: string;
}
export interface ITime {
  id: string;
  time: string;
}

export interface ScheduleProps {
  doctor: string;
  time: string;
  date: string;
  status: string;
  category: string;
  image: string;
  doctorId: string;
}

interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: Format;
        // Add more formats if needed
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface CategoryAttributes {
  id: number | any;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    icon: Image;
    doctors: {
      data: any[];
    };
  };
}

export type CategoryType = {
  data: CategoryAttributes;
};

export type DoctorType = {
  data: doctorType;
};

export interface doctorType {
  id: number | any;
  attributes: {
    first_name: string;
    last_name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rating: number;
    premiun: boolean;
    about: string;
    phone: string;
    city: string;
    street: string;
    state: string;
    gender: string;
    email: string;
    dob: string;
    image: Image;
    categories: {
      data: CategoryAttributes[];
    };
  };
}

export type HospitalAttributes = {
  id: number | any;
  attributes: {
    name: string;
    address: string;
    email: string;
    website: null | string;
    phone: string;
    description: string;
    opening_hours: string;
    closing_hours: string;
    opening_days: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    state: string;
    city: string;
    image: Image;
    categories: {
      data: CategoryAttributes[];
    };
    doctors: {
      data: doctorType[];
    };
  };
};

export type HospitalType = {
  data: HospitalAttributes[];
};
