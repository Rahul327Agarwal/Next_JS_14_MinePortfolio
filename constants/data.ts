type About = {
  title: string;
  description: string[];
  currentProject: string;
  currentProjectUrl: string;
};
export type SocialMediaDetail = {
  [key: string]: string;
};

type Experience = {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  desc: string;
};

type UserData = {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  about: About;
  experience: Experience[];
  resumeUrl: string;
  socialLinks: SocialMediaDetail;
};

const userData: UserData = {
  githubUsername: "Rahul327Agarwal",
  name: "Rahul Agarwal",
  designation: "React Developer",
  avatarUrl: "/Mine/MyProfilePhoto.jpeg",
  email: "agarwalr327@gmail.com",
  phone: "+91 9935241420",
  address: "Kanpur, Uttar Pradesh, India.",
  about: {
    title:
      "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
      `A programming enthusiast since middle school and a curious programming student forever.`,
      `I love learning and experimenting with programs to come up with unique solutions to problems or challenges faced.`,
      `My love for programming has propelled me to teach programming as well, which helped me practice and developed into my hobby.`,
    ],
    currentProject: "Amura",
    currentProjectUrl: `${process.env.MyGitHubUrl}/AmuraHealth`,
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Neosoft",
      year: "2022",
      companyLink: `${process.env.NeoSoft}`,
      desc: "PMS(Patient Management Sytem) software designed to facilitate communication and streamline operations between healthcar professionals and patients.",
    },
    {
      title: "Software Developer",
      company: "Gemini Solutions",
      year: "2018",
      companyLink: `${process.env.GeminiSolutions}`,
      desc: "Spearheaded the design and development of the Performance and Incident Monitoring Tool (PINT), a vital resource for the support team responsible for monitoring and managing a vast number of running jobs.",
    },
    {
      title: "Graduation",
      company: "Abdul Kalam Technical University.",
      year: "2017",
      companyLink: `${process.env.University}`,
      desc: "Major in Computer Science and Engineering with a CGPA of 7.0. Nobody asks this but it's okay.",
    },
  ],
  resumeUrl: `${process.env.GDrive}`,
  socialLinks: {
    instagram: `${process.env.Instagram}`,
    twitter: `${process.env.Twitter}`,
    linkedin: `${process.env.Linkedin}`,
    github: `${process.env.Github}`,
    facebook: `${process.env.Facebook}`,
  },
};

export default userData;
