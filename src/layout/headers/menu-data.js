const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: [
      { link: "/", title: "Data analytics" },
      { link: "/home-2", title: "Payment Gateway" },
      { link: "/home-3", title: "CRM Software" },
      { link: "/home-4", title: "Security Software" },
      { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service-details",
    active: "",
    sub_menus: [
      { link: "/digital-marketing-agency-dubai", title: "Digital Marketing" },
      { link: "/website-development-company-in-dubai", title: "Website Development" },
      { link: "/best-web-design-company-dubai", title: "UI / UX Design" },
      { link: "/mobile-app-development-company-dubai", title: "Mobile Apps" },
      { link: "/dubai-ecommerce-agency", title: "E-Commerce" },
      { link: "/emerging-technology", title: "Emerging Technology" },
    ],
  },
  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/about", title: "About" },
  //     { link: "/service", title: "Service" },
  //     { link: "/service-details", title: "Service Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/career", title: "Career" },
  //     { link: "/career-details", title: "Career Details" },
  //     { link: "/integrations", title: "Integrations" },
  //     { link: "/price", title: "Price" },
  //     { link: "/register", title: "Register" },
  //     { link: "/sign-in", title: "Signin" },
  //     { link: "/404", title: "404" }, 
  //   ],
  // },
  
  // {
  //   id: 3,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Projects",
  //   link: "/project",
  //   active: "",
  //   sub_menus: [
  //     { link: "/project", title: "Project" },
  //     { link: "/project-details", title: "Project Details" }, 
  //   ],
  // },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Case Studies",
    link: "#",
    active: "",
    sub_menus: [
      { link: "/hyggeBikes", title: "Hygge Bikes" },
      // { link: "/project-details", title: "Project Details" }, 
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blogs/how-to-dominate-the-uae-market-with-effective-social-media-strategies",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
