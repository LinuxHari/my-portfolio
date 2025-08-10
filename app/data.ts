import mernToursImg from "../public/MernTours.jpeg";
import mernToursLogo from "../public/MernToursLogo.jpg";
import intHuntImg from "../public/IntHunt.jpg";
import intHuntLogo from "../public/IntHuntLogo.png";
import resHuntImg from "../public/ResHunt.jpeg";
import resHuntLogo from "../public/ResHuntLogo.png";

export const works = [{
    homeLogo: {
      url: mernToursLogo,
      height: 100,
      width: 200,
      fileName: "",
    },
    id: "1",
    url: "https://mern-tours.vercel.app/",
    name: "MERN Tours",
    role: "Fullstack Developer",
    homeImage:  {
      // url: "https://mern-tours.vercel.app/img/hero/bg.jpeg",
      url: mernToursImg,
      height: 100,
      width: 200,
      fileName: "",
    },
  },
  {
    homeLogo: {
      url: intHuntLogo,
      height: 100,
      width: 200,
      fileName: "",
    },
    id: "2",
    url: "https://inthunt.vercel.app/",
    name: "Inthunt",
    role: "Fullstack Developer",
    homeImage:  {
      // url: "https://mern-grub.vercel.app/assets/hero-pK8hUWcq.png",
      url: intHuntImg,
      height: 100,
      width: 200,
      fileName: "",
    },
  },
  {
    homeLogo: {
      url: resHuntLogo,
      height: 100,
      width: 200,
      fileName: "",
    },
    id: "3",
    url: "https://reshunt.vercel.app",
    name: "Reshunt",
    role: "Fullstack Developer",
    homeImage:  {
      url: resHuntImg,
      height: 100,
      width: 200,
      fileName: "",
    },
  }
];