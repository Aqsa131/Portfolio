import React, { useContext } from 'react';
import NavBar from './Nav';
import style from "../css/home.module.css";
import bgImg from "../assets/background.jpg"
import ThemeContext from './context/ThemeContext';
import Cards from './Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommonsShare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Forms from './Forms';

const Home = () => {
  const { currentStyle } = useContext(ThemeContext);
  const skills = [
    { name: 'HTML5 & CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Firebase', level: 80 },
    { name: 'React', level: 60 },
  ];
  const info = [
    { label: "name", value: "Aqsa Mahmood" },
    { label: "email-address", value: "sheikhaqsa59@gmail.com" },
    { label: "contact", value: "03332126104" },
    { label: "Address", value: "karachi, Pakistan" },

  ]
  const cardData = [
    {
      title: "Web Designing",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faCode
    },
    {
      title: "Responsive Design",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faMobileScreen
    },
    {
      title: "React",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faReact
    },
    {
      title: "Firebase",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faFire
    },
    {
      title: "Graphic Desinging",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faChartSimple
    },
    {
      title: "Content Writing",
      discription: "Amet illo quos cumque reiciendis vitae dolorum Quas delectus corporis nihil omnis nam labore excepturi error",
      icon: faCreativeCommonsShare
    },
  ]
  return (
    <>
      <NavBar />
      <div className={`${style.mainWrapper}`}>
        <div
          className={style.main}
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div style={{ ...currentStyle.base }} className={`${style.innerMain}  p-4 shadow text-align-center`}>
            <h1>Aqsa Mahmood.</h1>
            <p style={{ textAlign: "center" }}>FRONT-END WEB & APP DEVELOPER</p>
            <div className={style.links}>
              <a href="https://github.com/Aqsa131" target='_blank'><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/aqsa-mahmood-ba3ba2321/" target='_blank'><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faLinkedinIn} /></a>
            </div>

          </div>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className={style.svgWave}>
            <path
              fill="#ffffff"
              d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff", padding: "20px", textAlign: "center" }}>
      </div>
      {/* ABOUT ME */}
      <div className='container-fluid text-center containerRelative mt1-5' id='intro'  >
        <h1 className='m-5'>About Me</h1>
        <p>To leverage my expertise in HTML, CSS, JavaScript, and modern frontend frameworks to design and develop
          intuitive, responsive, and visually engaging user interfaces. Passionate about enhancing user experiences
          through clean code, innovative design, and continuous learning of emerging technologies to contribute to the
          growth and success of the organization</p>
        <div className="row m-5 ">
          <div className="col-md-6 mt-5 space-y-4 leading-[20px]">
            <img style={{ width: "100px", height: "100px", borderRadius: "50px", margin: "auto" }} src="https://img.freepik.com/premium-vector/cute-hijab-girl-outline-hand-drawn_1197809-42.jpg" alt="" />
            {
              info.map((items, index) => {
                return (
                  <div key={index}>
                    <p className="mt-5 capitalize"><span style={{ fontWeight: "bold" }}>{items.label} : </span>{items.value}</p>
                  </div>
                )
              })
            }


            {/* SKILLS */}
          </div>
          <div className="col-md-6 mt-5" >
            <div className=" max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4 ">
                  <div className="flex justify-between mb-1 mt-5">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded">
                    <div
                      className="bg-black h-1.5 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className={style.bottomWave}>
          <path
            fill="#ffffff"
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
      {/* WHAT I CAN DO */}
      <div className="container-fluid mt-5 m-auto containerRelative mt1-5 " id='skills'>
        <h2 className="text-3xl font-bold mb-4 text-center mt-4">WHAT I CAN DO</h2>
        <div className={style.cardHome}>
          {
            cardData.map((item, index) => {
              return (
                <div key={index}>
                  <Cards icon={item.icon} title={item.title} discription={item.discription} />
                </div>
              )
            })
          }
        </div>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className={style.bottomWave}>
          <path
            fill="#ffffff"
            d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
      {/* FOOTER */}
      <div className="container  my-5 " id='contact'>
        <div className="row g-5">
          <div className="col-md-4">
            <h3 className="text-3xl font-bold mb-4 my-4">GET IN TOUCH</h3>
            <h5 className='mt-5'>Address</h5>
            <p>Karachi, Pakistan</p>
            <h5>E-mail</h5>
            <p>sheikhaqsa59@gmail.com</p>
            <h5>Phone</h5>
            <p>+92 333 2126104</p>
          </div>
          <div className="col-md-8">
            <h3 className="text-3xl font-bold mb-4 my-4">SEND US A MESSAGE</h3>
              <Forms/>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /> <br /><br /><br /><br />

    </>
  );
};

export default Home;
