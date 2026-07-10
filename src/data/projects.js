import technician from "../assets/projects/technician/customer.png";

// Wallet Project Cover Image
import wallet from "../assets/projects/walletpay/UserDash.png";

// Marine Project Cover Image
import marine from "../assets/projects/marine/Home.jpg";

// BloomWell Project Cover Image
import bloomwell from "../assets/projects/bloomwell/dashboard.png";

const projects = [

{
    id:1,

    title:"BloomWell - Women's Health & Fitness Platform",

    image:bloomwell,

    description:
    "A cloud-enabled women's wellness platform that promotes physical health, mental wellness, hormonal balance, daily fitness tracking, and wellness education through a responsive web application. The project was deployed using AWS cloud services with GitHub integration, demonstrating cloud hosting, modern frontend deployment, and scalable web application architecture.",

    technologies:[
        "HTML5",
        "CSS3",
        "JavaScript",
        "AWS",
        "GitHub",
        "Cloud Deployment"
    ],

    github:"https://github.com/Saranya03207/Womens-Health-and-fitness",

    demo:"https://saranya03207.github.io/Womens-Health-and-fitness/",

    youtube:""
},

{
    id:2,

    title:"Multi-Service Technician Booking Platform",

    image:technician,

    description:
    "A full-stack technician booking platform that enables customers to book verified technicians, track service requests, manage appointments, and provides dedicated dashboards for customers, technicians, and administrators with secure role-based authentication.",

    technologies:[
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "MySQL",
        "REST API"
    ],

    github:"https://github.com/Saranya03207/Fixmate_project",

    demo:"",

    youtube:""
},

{
    id:3,

    title:"Unified Web Platform for Marine Scientists",

    image:marine,

    description:
    "An AI-powered marine research platform integrating species identification, oceanographic data visualization, fisheries management, eDNA analysis, biodiversity dashboards, interactive maps and scientific reporting for marine researchers.",

    technologies:[
        "React",
        "JavaScript",
        "Python",
        "Flask",
        "Leaflet Maps",
        "Chart.js",
        "Web Scraping"
    ],

    github:"",

    demo:"",

    youtube:"https://youtu.be/iAVoYODLgwE?si=Ye_6D_vWJm9kCqwN"
},

{
    id:4,

    title:"Digital Payment Wallet System",

    image:wallet,

    description:
    "A secure UPI-inspired digital wallet system with role-based authentication, money transfer, transaction history, AI fraud monitoring, notifications, wallet management and an administrator dashboard.",

    technologies:[
        "React",
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL"
    ],

    github:"https://github.com/Saranya03207/Digital-Wallet-Application",

    demo:"",

    youtube:""
}

];

export default projects;