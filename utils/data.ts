import {
  Ambulance,
  Appointment,
  Cardiologist,
  Chat,
  Corona,
  Danger,
  Doctor,
  Drug,
  Heart,
  Hospital,
  Lungs,
  Psychiatrist,
  Syringe,
  Teeth,
  Wallet,
} from "../constants/icons";
import { ICategory, IDoctor, IMenu, IProfile, OnBoarding } from "./types";
export const OnBoardingData: OnBoarding[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694788994/medical-kit/989854925e71439a5ef4d47a88ede3d1_txdg1z.png",
    content: "Consult only with a doctor you trust",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694788714/medical-kit/7xm_2_y7jfuh.png",
    content: "Find a lot of specialist doctors in one place",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694788708/medical-kit/7xm_5_qujqqx.png",
    content: "Get connect our Online Consultation",
  },
];

export const MenuData: IMenu[] = [
  {
    Icon: Doctor,
    content: "Doctor",
    route: "FindDoctors",
  },
  {
    Icon: Drug,
    content: "Pharmacy",
    route: "",
  },
  {
    Icon: Hospital,
    content: "Hospital",
    route: "",
  },
  {
    Icon: Ambulance,
    content: "Ambulance",
    route: "",
  },
];

export const Docotrs: IDoctor[] = [
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
    name: "Dr. Marcus Horizon",
    rating: "4.7",
    location: "800m",
    category: "Chardiologist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892627/medical-kit/pexels-evelina-zhu-5434019_ugoir0.png",
    name: "Dr. Maria Elena",
    rating: "4.0",
    location: "1.5km",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    category: "Psychologist",
  },
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892624/medical-kit/pexels-thirdman-5327580_dx85u6.png",
    name: "Dr. Stefi Jessi",
    rating: "3.7",
    location: "2km",
    category: "Orthopedist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892622/medical-kit/pexels-thirdman-5327656_jolu0t.png",
    name: "Dr. Gerty Cori",
    rating: "3.5",
    location: "100m",
    category: "Orthopedist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892615/medical-kit/pexels-anthony-shkraba-5215024_1_y44nwn.png",
    name: "Dr. Diandra",
    rating: "2.0",
    location: "10km",
    category: "Orthopedist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
];

export const profileData: IProfile[] = [
  {
    Icon: Heart,
    title: "My Saved",
    route: "",
  },
  {
    Icon: Appointment,
    title: "Appointment",
    route: "Schedule",
  },
  {
    Icon: Wallet,
    title: "Payment Method",
    route: "",
  },
  {
    Icon: Chat,
    title: "FAQs",
    route: "",
  },
  {
    Icon: Danger,
    title: "Logout",
  },
];

export const categories: ICategory[] = [
  {
    Icon: Doctor,
    content: "General",
  },
  {
    Icon: Lungs,
    content: "Lungs Specialist",
  },
  {
    Icon: Teeth,
    content: "Dentist",
  },
  {
    Icon: Psychiatrist,
    content: "Psychiatrist",
  },
  {
    Icon: Corona,
    content: "Covid-19",
  },
  {
    Icon: Syringe,
    content: "Surgeon",
  },
  {
    Icon: Cardiologist,
    content: "Cardiologist",
  },
];
