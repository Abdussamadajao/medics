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
import {
  ICategory,
  IDoctor,
  IMenu,
  IProfile,
  ITime,
  OnBoarding,
  ScheduleProps,
} from "./types";
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
    route: "pharmacy",
  },
  {
    Icon: Hospital,
    content: "Hospital",
    route: "hospitals",
  },
  {
    Icon: Ambulance,
    content: "Ambulance",
    route: "",
  },
];

export const Docotrs: IDoctor[] = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
    first_name: "Marcus ",
    last_name: "Horizon",
    rating: "4.7",
    location: "800m",
    category: "Chardiologist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892627/medical-kit/pexels-evelina-zhu-5434019_ugoir0.png",
    first_name: "Maria",
    last_name: "Elena",
    rating: "4.0",
    location: "1.5km",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    category: "Psychologist",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892624/medical-kit/pexels-thirdman-5327580_dx85u6.png",

    first_name: "Stevi ",
    last_name: "Jessi",
    rating: "3.7",
    location: "2km",
    category: "Orthopedist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  },
  {
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892622/medical-kit/pexels-thirdman-5327656_jolu0t.png",
    rating: "3.5",
    location: "100m",

    id: "4",
    category: "Orthopedist",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    first_name: "Gerty",
    last_name: "Cori",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892615/medical-kit/pexels-anthony-shkraba-5215024_1_y44nwn.png",

    first_name: "Diandra",
    last_name: "",
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
    id: "1",
    Icon: Doctor,
    content: "General",
  },
  {
    id: "2",
    Icon: Lungs,
    content: "Lungs Specialist",
  },
  {
    id: "3",
    Icon: Teeth,
    content: "Dentist",
  },
  {
    id: "4",
    Icon: Psychiatrist,
    content: "Psychiatrist",
  },
  {
    id: "5",
    Icon: Corona,
    content: "Covid-19",
  },
  {
    id: "6",
    Icon: Syringe,
    content: "Surgeon",
  },
  {
    id: "7",
    Icon: Cardiologist,
    content: "Cardiologist",
  },
];

export const times: ITime[] = [
  { id: "1", time: "09:00 AM" },
  { id: "2", time: "10:00 AM" },
  { id: "3", time: "11:00 AM" },
  { id: "4", time: "01:00 PM" },
  { id: "5", time: "02:00 PM" },
  { id: "6", time: "03:00 PM" },
  { id: "7", time: "04:00 PM" },
  { id: "8", time: "07:00 PM" },
  { id: "9", time: "08:00 PM" },
];

export const schedule: ScheduleProps[] = [
  {
    date: "26/06/2022",
    doctor: "Marcus Horizon",
    status: "upcoming",
    time: "10:00 AM",
    category: "Chardiologist",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
    doctorId: "1",
  },
  {
    date: "26/06/2022",
    doctor: "Diandra",
    status: "completed",
    time: "2:00 PM",
    category: "Orthopedist",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892615/medical-kit/pexels-anthony-shkraba-5215024_1_y44nwn.png",
    doctorId: "5",
  },
  {
    date: "26/06/2022",
    doctor: "Gerty Cori",
    status: "canceled",
    time: "2:00 PM",
    category: "Orthopedist",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892622/medical-kit/pexels-thirdman-5327656_jolu0t.png",
    doctorId: "4",
  },
  {
    date: "26/06/2022",
    doctor: "Marcus Horizon",
    status: "upcoming",
    time: "10:00 AM",
    category: "Chardiologist",
    image:
      "https://res.cloudinary.com/dtczskyoz/image/upload/v1694892631/medical-kit/pexels-cedric-fauntleroy-4270371_uvu2mu.png",
    doctorId: "1",
  },
];
