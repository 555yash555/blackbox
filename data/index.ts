import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborative excellence",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-contain",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "At Black Box, we ensure smooth cross-time zone connections.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our Tech Stack",
    description: "We use the latest technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Blackbox is made up of tech enthusiasts",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a Chartered Accountant platform.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Clothing store",
    des: "Developed a minimal-themed Shopify webstore for sevn7sevn7 clothing line",
    img: "/p1.png",
    iconLists: [],
    link: "https://sevn7sevn7.com/",
    vlink: "https://sevn7sevn7.com/",
  },
  {
    id: 2,
    title: "Werite",
    des: "The ultimate social media platform designed to connect, communicate, and collaborate seamlessly.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "http://werite.in/",
    vlink: "http://werite.in/",
  },
  {
    id: 3,
    title: "Suidhaga",
    des: "the premier uniform selling app tailored specifically for educational institutions. Our platform offers a seamless and user-friendly interface",
    img: "/p3.png",
    iconLists: [],
    link: "https://play.google.com/store/apps/details?id=com.cgready.suidhaga&hl=en_IN",
    vlink:
      "https://play.google.com/store/apps/details?id=com.cgready.suidhaga&hl=en_IN",
  },
  {
    id: 4,
    title: "Halda",
    des: "A dynamic portfolio clone for showcasing games with a sleek design and great UI",

    img: "/p4.png",
    iconLists: [],
    link: "https://themebeyond.com/demo/haldalive/",
    vlink: "https://themebeyond.com/demo/haldalive/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Black Box was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our app development project with Flutter. Black Box's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your app and elevate your brand, Black Box is the ideal partner.",
    name: "Sanidhya Agarwal",
    title: "Founder at Jurident",
  },
  {
    quote:
      "Working with Black Box was a seamless experience. Their expertise in website development with React, combined with their commitment to excellence, resulted in a fantastic final product. Black Box's team was responsive and innovative, making them the perfect choice for enhancing our web presence.",
    name: "Garvit",
    title: "Founder at Valtorus Tech",
  },
  {
    quote:
      "Partnering with Black Box for our Shopify e-commerce store was a game-changer. Their attention to detail and creative solutions exceeded our expectations. Black Box's dedication to delivering top-notch results makes them an outstanding partner for any e-commerce project.",
    name: "Vansh",
    title: "Owner at Seven Seven",
  },
];

export const companies = [
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "React.js Frontend Engineering Project",
    desc: "Developed a web-based platform using React.js, enhancing interactivity for users.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Development with React Native & Firebase",
    desc: "Designed and developed a mobile app for iOS & Android using React Native and integrated Firebase for backend services.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Flutter App Development",
    desc: "Led the development of a mobile app using Flutter, from initial concept to app store deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Development with Node.js",
    desc: "Developed and maintained user-facing features and backend services using Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/blackboxdevs/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/103002224/",
  },
];
