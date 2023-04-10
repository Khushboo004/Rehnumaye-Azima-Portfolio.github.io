import { Container, Grid } from "@mui/material";
import React from "react";
import Myproject from "../components/Myproject";
import jumpstart from "../assets/projects/jumpstart.png";
import AbcJopPortal from "../assets/projects/abcjpl01_orig.png";
import AbcCarPortal from "../assets/projects/abccpl01_orig.png";
import AbcLearningCenter from "../assets/projects/abclc02_orig.png";
import JOne from "../assets/projects/jumpstart/01.png";
import JTwo from "../assets/projects/jumpstart/02.png";
import JThree from "../assets/projects/jumpstart/03.png";
import JFour from "../assets/projects/jumpstart/04.png";
import JFive from "../assets/projects/jumpstart/05.png";
import JSix from "../assets/projects/jumpstart/06.png";
import JSeven from "../assets/projects/jumpstart/07.png";
import JEight from "../assets/projects/jumpstart/08.png";
import JNine from "../assets/projects/jumpstart/09.png";
import JTen from "../assets/projects/jumpstart/26.png";
import JEleven from "../assets/projects/jumpstart/27.png";
import JTwelve from "../assets/projects/jumpstart/12.png";
import JThirteen from "../assets/projects/jumpstart/28.png";
import JFourteen from "../assets/projects/jumpstart/14.png";
import JSixteen from "../assets/projects/jumpstart/16.png";
import JSeventeen from "../assets/projects/jumpstart/17.png";
import JEighteen from "../assets/projects/jumpstart/18.png";
import JNineteen from "../assets/projects/jumpstart/19.png";
import JTwenty from "../assets/projects/jumpstart/20.png";
import JTwentyOne from "../assets/projects/jumpstart/21.png";
import JTwentyTwo from "../assets/projects/jumpstart/22.png";
import JTwentyThree from "../assets/projects/jumpstart/23.png";
import JTwentyFour from "../assets/projects/jumpstart/24.png";
import JTwentyFive from "../assets/projects/jumpstart/25.png";

import ALCOne from "../assets/projects/ABC LearningCenter/abclc02_orig.png";
import ALCTwo from "../assets/projects/ABC LearningCenter/abclc03_orig.png";
import ALCThree from "../assets/projects/ABC LearningCenter/abclc04_orig.png";
import ALCFour from "../assets/projects/ABC LearningCenter/abclc05_orig.png";

import ACPOne from "../assets/projects/ABC Car Portal/abccpl02_orig.png";
import ACPTwo from "../assets/projects/ABC Car Portal/abccpl03_orig.png";
import ACPThree from "../assets/projects/ABC Car Portal/abccpl04_orig.png";
import ACPFour from "../assets/projects/ABC Car Portal/abccpl05_orig.png";
import ACPFive from "../assets/projects/ABC Car Portal/abccpl06_orig.png";
import ACPSix from "../assets/projects/ABC Car Portal/abccpl07_orig.png";
import ACPSeven from "../assets/projects/ABC Car Portal/abccpl08_orig.png";

import AJPOne from "../assets/projects/ABC Job Portal LTD/abcjpl02_orig.png";
import AJPTwo from "../assets/projects/ABC Job Portal LTD/abcjpl03_orig.png";
import AJPThree from "../assets/projects/ABC Job Portal LTD/abcjpl04_orig.png";
import AJPFour from "../assets/projects/ABC Job Portal LTD/abcjpl05_orig.png";
import AJPFive from "../assets/projects/ABC Job Portal LTD/abcjpl06_orig.png";

import MMOne from "../assets/projects/merrymeal/mm01.png";
import MMTwo from "../assets/projects/merrymeal/mm02.png";
import MMThree from "../assets/projects/merrymeal/mm03.png";
import MMFour from "../assets/projects/merrymeal/mm04.png";
import MMFive from "../assets/projects/merrymeal/mm05.png";
import MMSix from "../assets/projects/merrymeal/mm06.png";
import MMSeven from "../assets/projects/merrymeal/mm07.png";
const AcademicProject = () => {
  return (
    <div
      id="academicProject"
      style={{
        background: "linear-gradient(rgba(40,40,49,0.3), rgba(68,68,68,0.3))", // change the gradient colors to light black
        color: "white", // set the text color
      }}
      className="py-14"
    >
      <h1 className="text-4xl text-yellow-50 text-center font-bold font-serif py-5 underline underline-offset-4">
        Academic Projects
      </h1>
      <Container>
        <Myproject
          src1={jumpstart}
          src2={JOne}
          src3={JTwo}
          src4={JThree}
          src5={JFour}
          src6={JFive}
          src7={JSix}
          src8={JSeven}
          src9={JEight}
          src10={JNine}
          src11={JTen}
          src12={JEleven}
          src13={JTwelve}
          src14={JThirteen}
          src15={JFourteen}
          src16={JSixteen}
          src17={JSeventeen}
          src18={JEighteen}
          src19={JNineteen}
          src20={JTwenty}
          src21={JTwentyOne}
          src22={JTwentyTwo}
          src23={JTwentyThree}
          src24={JTwentyFour}
          src25={JTwentyFive}
          projectName={"JUMPSTART"}
          desc={
            "Jumpstart retail chain's e-commerce website uses Spring Boot, React.js, Tailwind CSS, and Material UI. It has 7 roles: user, admin, shopkeeper, rider, employee, shipping courier, and producer. Shopkeepers can manage products and buy from producers. Admins can approve/reject products and manage delivery/user details. Only admin can approve/reject registrations. Employees manage rider shifts. Producers can approve/reject orders. Riders view/accept shifts/orders."
          }
          skils={"Spring Boot, React Js, Tailwind CSS, Material UI"}
          fesc={"https://github.com/Khushboo004/Jumpstart"}
          fe={"Front-end Code"}
          bksc={"https://github.com/Khushboo004/Jumpstart-bk"}
          bk={"Back-end Code"}
          demo={"https://khushboo004.github.io/Jumpstart/"}
        />
        <Myproject
          src1={AbcLearningCenter}
          src2={ALCOne}
          src3={ALCTwo}
          src4={ALCThree}
          src5={ALCFour}
          projectName={"ABC Learning Center"}
          desc={
            "ABC Learning Center is an IT training center. It provides various training. In this app it starts language training. HTML, CSS, JavaScript are used to create this application.​"
          }
          skils={"HTML, CSS, JavaScript, JQuery"}
          fe={"Source Code"}
          fesc={"https://github.com/Khushboo004/abcLeraningCenter.github.io"}
          demo={"https://khushboo004.github.io/abcLeraningCenter.github.io/"}
        />
        <Myproject
          src1={AbcJopPortal}
          src2={AJPOne}
          src3={AJPTwo}
          src4={AJPThree}
          src5={AJPFour}
          src6={AJPFive}
          projectName={"ABC Job Portal LTD"}
          desc={
            "​This is a job application. Admin will post jobs in this application. Users can search and apply for jobs as per their wish. Users can post what kind of job they want and other users can comment on it. Admin can control the user of this application. Admin can delete, update user data. Spring framework, JSP, bootstrap and XML are used to develop this application."
          }
          skils={"Spring framework, JSP, bootstrap and XML"}
          fe={"Source Code"}
          fesc={"https://github.com/Khushboo004/ABC-Job-Portal-Ltd"}
        />

        <Myproject
          src1={AbcCarPortal}
          src2={ACPOne}
          src3={ACPTwo}
          src4={ACPThree}
          src5={ACPFour}
          src6={ACPFive}
          src7={ACPSix}
          src8={ACPSeven}
          projectName={"ABC Car Portal LTD"}
          desc={
            "This is an application for car sales. In this application users can upload or post, delete, update their cars. Other users can take a test drive or request a bid on the vehicle. Admin can control the user of this application. Admin can delete, update user data. Spring boot, spring security and thymeleaf are used to develop this application."
          }
          skils={"Spring framework, JSP, bootstrap and XML"}
          fe={"Source Code"}
          fesc={"https://github.com/Khushboo004/ABC-Car-Pte-Ltd"}
        />

        <Myproject
          src1={MMOne}
          src2={MMTwo}
          src3={MMThree}
          src4={MMFour}
          src5={MMFive}
          src6={MMSix}
          src7={MMSeven}
          projectName={"Merry Meal (Group Project)"}
          desc={
            "This project is an e-commerce project in which user can order foods. Each role of user will posses unique dashboard. "
          }
          skils={"Spring Boot, React Js, Tailwind CSS, Material UI"}
          fe={"Front-end"}
          fesc={"https://github.com/Khushboo004/Merry-Meal"}
          bksc={"https://github.com/Khushboo004/Merry-Meal-BK"}
          bk={"Back-end "}
          demo={"https://khushboo004.github.io/Merry-Meal/"}
        />
      </Container>
    </div>
  );
};

export default AcademicProject;
