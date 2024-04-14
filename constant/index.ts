import { NavbarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const navbar: NavbarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "#Discover",
    label: "Discover",
  },
  {
    route: "#Specialdeals",
    label: "Special Deals",
  },
  {
    route: "#Support",
    label: "Support",
  },
];

export const Sponsorship = [
  {
    img: "/assets/icons/Traveloka.svg",
  },
  {
    img: "/assets/icons/tiket.com.svg",
  },
  {
    img: "/assets/icons/Booking.svg",
  },
  {
    img: "/assets/icons/Tripadvisor.svg",
  },
  {
    img: "/assets/icons/Airbnb.svg",
  },
];
export const SponsorshipDark = [
  {
    img: "/assets/icons/Traveloka_dark.svg",
  },
  {
    img: "/assets/icons/tiket.com_dark.svg",
  },
  {
    img: "/assets/icons/Booking_dark.svg",
  },
  {
    img: "/assets/icons/Tripadvisor_dark.svg",
  },
  {
    img: "/assets/icons/Airbnb_dark.svg",
  },
];

export const ServicesCard = [
  {
    img: "/assets/icons/suitcase.svg",
    title: "All you Needs",
    description:
      "From flights, stays, to sights, just count on our complete products.",
  },
  {
    img: "/assets/icons/book.svg",
    title: "Flexible Booking",
    description:
      "From flights, stays, to sights, just count on our complete products.",
  },
  {
    img: "/assets/icons/card.svg",
    title: "Secure Payment",
    description:
      "From flights, stays, to sights, just count on our complete products.",
  },
];

export const Destination = [
  {
    tag: "indonesia",
    img: "/assets/images/destination.png",
    title: "Pandawa Beach, Bali Island",
    price: "30.99",
    star: "4.9",
  },
  {
    tag: "Japan",
    img: "/assets/images/destination.png",
    title: "Pandawa Beach, Bali Island",
    price: "30.99",
    star: "4.9",
  },
  {
    tag: "Bangkok",
    img: "/assets/images/destination.png",
    title: "Pandawa Beach, Bali Island",
    price: "30.99",
    star: "4.9",
  },
];

export const StatsPoins = [
  {
    count: "200+",
    title: "Holiday Package",
  },
  {
    count: "450",
    title: "RedDoorz",
  },
  {
    count: "10",
    title: "Premium Airlines",
  },
  {
    count: "12k+",
    title: "Happy Customers",
  },
];

export const Feature = [
  {
    bg: "#872BFF",
    img: "/assets/icons/location.svg",
    title: "Select many location",
    desc: "Chooce your favorite location ",
  },
  {
    bg: "#FF8126",
    img: "/assets/icons/schedule.svg",
    title: "Schedule your trip",
    desc: "Set the date you want",
  },
  {
    bg: "#F411CF",
    img: "/assets/icons/discount.svg",
    title: "Big discount",
    desc: "Get discount for every services",
  },
];
export const FooterLinks = [
  {
    category: "About",
    links: ["How to Book", "Contact Us", "Help Center", "Carreer"],
  },
  {
    category: "Products",
    links: ["Flights", "Hotels", "Trains", "Villas"],
  },
  {
    category: "Other",
    links: ["Blog", "Privacy Notice"],
  },
];
