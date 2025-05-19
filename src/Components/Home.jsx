import NavBar from './Nav';
import style from "../css/home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className={`${style.main} container py-5`}>
        <div className={`${style.innerMain} p-4 shadow text-align-center`}>
          <h1>I am Aqsa Mahmood.</h1>
          <p style={{ textAlign: "-webkit-center" }}>
            To leverage my expertise in HTML, CSS, JavaScript, React, Nodejs and modern frontend frameworks
            to design and develop intuitive, responsive, and visually engaging user interfaces. Passionate about
            enhancing user experiences through clean code, innovative design, and continuous learning of emerging
            technologies to contribute to the growth and success of the organization
          </p>
          <div className={`${style.innerMain} ${style.links} mt-4`}>
            <a href="https://www.linkedin.com/in/aqsa-mahmood-ba3ba2321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon size="3x" color="#0d74e7" icon={faLinkedinIn} />
            </a>
            <a href="https://vercel.com/aqsas-projects-ecea241c" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media.licdn.com/dms/image/v2/D5616AQHtKMNB1PYCMA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1686766766094?e=2147483647&v=beta&t=HGYucZHLmx8fps9ZL_yVh_TKI8v0X5JkGm3zos1ZjC8"
                alt="LinkedIn Banner"
                style={{ width: "115px", margin: "0 20px" }}
              />
            </a>
            <a href="https://github.com/Aqsa131" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon size="3x" color="#0d74e7" icon={faGithub} />
            </a>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
