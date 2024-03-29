import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Nguyen Van Qui",
  initials: "BJ",
  location: "Ho Chi Minh City, Vietnam",
  locationLink:
    "https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam/@10.7552929,106.3655699,10z/data=!3m1!4b1!4m6!3m5!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638!16zL20vMGhuNGg?authuser=0&entry=ttu",
  about: "Software Engineer/Frontend Developer focused on ReactJS, ReactNative",
  summary:
    "As a front-end developer with over 3-years experience working in ReactJs and 1-year in ReactNative, I always improve my knowledge, develop professional skills, have the spirit of the market, learn from the experience and from colleagues to be an IT professional, ethical, good qualities. I intend to become a full-stack developer in the future. Applying experience in programming skills and understanding of the technologies learned to be an employee contributes and brings a lot of value to the Company.",
  avatarUrl:
    "https://aws-tutorial-dev-serverlessdeploymentbucket-147gtf74i5n90.s3.ap-southeast-2.amazonaws.com/avatar.jpg",
  contact: {
    email: "nguyenqui1011@gmail.com",
    tel: "+84964255294",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mrlexz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/quinv-lexz/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Nong Lam University",
      degree: "Majored in Information Technology",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Papaya Insurtech",
      link: "https://www.papaya.asia/",
      badges: ["Full-time"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Dec 2022",
      end: "Feb 2024",
      description: `
      - Project name: PapayaCare App - Health Insurance Management mobile application. <br/>
          <div class="ml-5">
            • Online Claim Submission<br/>
            • Digital Insurance Card<br/>
            • Insurance Specifications & Remaining Coverage<br/>
            • Realtime Claim History<br/>
            • Booking annual health checkup (support HomeCredit company with more 4500 employees) </br>
            • Sell health checkup packages<br/>
            • Health Profile<br/>
          </div>
      - Team size: 2<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Building module Booking annual health checkup, Sell health checkup packages, Health Profile defects based on requirements.<br/> 
            • Develop new features and maintain old features of the application’s.<br/>
            • Bug fixes.<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • React Native <br/>
            • Expo<br/>
            • TypeScript<br/>
            • React-hooks, React-Hook-Form, React Native Paper </br>
            • GraphQL Code Generator, Apollo Client, Graphql<br/>
            • BE: Serverless, Hasura, Postgres, AWS Lambda<br/>
          </div>
      - Tools control: Git, Github, Github Copilot
      <br/>
      <br/>
      - Project name: Portal - This web app provides a range of modules related to insurance claim processing, insurance company management, policyholder management, insurance cards, user management for the Papaya Care app, scheduling health check appointments, and managing health check schedules for employees of various businesses.<br/>
      - Team size: 8<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Building module creates medical schedules, management booking, and employees. <br/>
            • Develop new features and maintain old features of the application’s.<br/>
            • Bug fixes.<br/>
          </div>
      - Technologies:<br/>
          <div class="ml-5">
            • TypeScript<br/>
            • Antd, HTML5, CSS, SCSS, CSS module, Stylex<br/>
            • React(React-hooks)<br/>
            • GraphQL Code Generator, Apollo Client, Graphql <br/>
            • Vercel<br/>
            • Tools control: Git, Github, Github Copilot<br/>
            • BE: Serverless, Hasura, Postgres, AWS Lambda<br/>
          </div>
      `,
    },
    {
      company: "NovaID (NovaGroup)",
      link: "#",
      badges: ["Full-time"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "May 2022",
      end: "Nov 2022",
      description: `
      - Project name: Portal NovaID - A web portal to help manage information of users, customers(Business Unit - BU), manage information about the business of BU like projects, products, orders, brands, branches,... Building and implementing loyalty programs such as creating and distributing vouchers, managing reports about loyalty programs. <br/>
         
      - Team size: 10<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Building module management for BU such as products, orders, brands,...<br/> 
            • Building module management loyalty programs such as vouchers, loyalty points, reports,...<br/>
            • Develop and fix the application’s defect base on requirements<br/>
            • Bug fixes.<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • JavaScript, TypeScript <br/>
            • HTML5,CSS, SCSS, React Bootstrap, styled-component<br/>
            • React(React-hooks), Redux, Redux Toolkit, React-Hook-Form </br>
            • Axios, Apollo Client<br/>
            • Graphql, Restful API<br/>
          </div>
      - Tools control: Git, Bitbucket
      <br/>
      `,
    },
    {
      company: "Designveloper",
      link: "https://www.designveloper.com/",
      title: "Frontend Developer",
      badges: ["Full-time"],
      logo: JojoMobileLogo,
      start: "Apr 2021",
      end: "Apr 2022",
      description: `
      - Project name: LuminPDF - Lumin brings PDF documents and markup tools to the browser. Easily annotate documents and
      images, add text, images, comments, shapes, and signatures. All from your browser. <br/>
      - Team size: 8<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Develop and fix the application’s defect base on requirements<br/> 
            • Build tools for editing pdf (React styleguidist) of the system.<br/>
            • Bug fixes.<br/>
            • Testing React components with Jest<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • JavaScript, TypeScript <br/>
            • HTML5, SCSS, Javascript, MUI, styled-component<br/>
            • React(React-hooks), Redux </br>
            • Socket, graphql, Mongodb, Nodejs<br/>
            • Third library: Pdftron<br/>
          </div>
      - Tools control: Git, Bitbucket
      <br/>
      `,
    },
    {
      company: "CYFEER JSC",
      link: "https://www.cyhome.vn/",
      badges: ["Full-time"],
      title: "Frontend Developer",
      logo: NSNLogo,
      start: "Jan 2020",
      end: "Mar 2021",
      description: `
      - Project name: Developing product web app, CMS web app for company  <br/>
      - Team size: 6<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Develop and fix the application’s defect base on requirements<br/> 
            • Develop small modules (React styleguidist) of the system.<br/>
            • Bug fixes.<br/>
            • Testing React components with Jest, React-testing-library<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • JavaScript, TypeScript <br/>
            • HTML5, CSS3, Javascript, Antd <br/>
            • React(React-hooks), Redux(Redux-saga)<br/>
          </div>
      - Tools control: Git, Bitbucket
      `,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/ReactNative",
    "Redux/Redux-saga/ReduxToolkit",
    "GraphQL",
    "Tailwind CSS",
    "Expo",
  ],
  projects: [
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
  ],
} as const;
