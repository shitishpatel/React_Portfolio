import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaUserAlt } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { SiAntdesign } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import { BsPenFill, BsFillTriangleFill } from "react-icons/bs";
import { SiProtonvpn, SiLeaflet } from "react-icons/si";
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im";
import vg from "../assests/hero.png";
import developer from "../assests/developer.png";
import uiux from "../assests/uiux.png";
import web from "../assests/web.png";
import skill_img from "../assests/skill_img.avif";
import { BsDashLg } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home1">
          <div className="home">
            <div className="home_left">
              <div className="heading">
              <p className="home_rotate">Hello</p>
                <h1>We have</h1>
                <h1>Design</h1>
                <h1>Experience</h1>
              </div>
              <div className="dash">
                <div className="g">
                  <IconContext.Provider value={{ className: "dash_icons" }}>
                    <BsDashLg></BsDashLg>
                  </IconContext.Provider>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam eaque sapiente porro.
                  </p>
                </div>
              </div>
              <div className="home_btn">
                <div className="dark_btn">
                  Let's Talk
                  <FiSend />
                </div>
                <div className="light_btn">
                  Portfolio
                  <ImArrowUpRight2 />
                </div>
              </div>
              <div className="home_bottom">
                <p>Check Out My</p>
                <IconContext.Provider value={{ className: "home_icons" }}>
                  <IconContext.Provider value={{ className: "home_icon" }}>
                    <FaInstagram />
                    <AiOutlineSkype />
                    <BsLinkedin />
                  </IconContext.Provider>
                </IconContext.Provider>
              </div>
            </div>
            <div className="home_right">
              <img src={vg} alt="hero_image" />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------Service------------- */}

      <div className="service">
        <div className="container">
          <div className="service_content">
            <div className="service_left">
              <div className="heading">
              <p className="s_rotate">Service</p>
                <h1>
                  Services <span>|</span>
                </h1>
                <h1>Offer</h1>
              </div>
              <div className="dash">
                <div className="g">
                  <IconContext.Provider value={{ className: "dash_icons" }}>
                    <BsDashLg></BsDashLg>
                  </IconContext.Provider>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam eaque sapiente porro.
                  </p>
                </div>
              </div>
              <div className="round_img"></div>
            </div>
            <div className="service_right">
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>01/</p>
                  <div className="content">
                    <div className="h">
                      <h2>Web UI/UX</h2>
                      <h2>Design</h2>
                      <p>Explore</p>
                    </div>

                    <div className="upper_arrow">
                      <IconContext.Provider value={{ className: "arrow" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>02/</p>
                  <div className="content">
                    <div className="h">
                      <h2>Mobile App UI/</h2>
                      <h2>UX Design</h2>
                      <p>Explore</p>
                    </div>

                    <div className="upper_arrow">
                      <IconContext.Provider value={{ className: "arrow" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>03/</p>
                  <div className="content">
                    <div className="h">
                      <h2>Dashboard &</h2>
                      <h2>Sass Design</h2>
                      <p>Explore</p>
                    </div>

                    <div className="upper_arrow">
                      <IconContext.Provider value={{ className: "arrow" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------Skill Experience------------------ */}
      <div className="Skill">
        <div className="container">
          <div className="skill_content">
            <div className="skill_left">
              <div className="heading">
              <p className="s_rotate">Experience</p>
                <h1>
                  Skill <span>&</span>
                </h1>
                <h1>Experience</h1>
              </div>
              <div className="dash">
                <div className="g">
                  <IconContext.Provider value={{ className: "dash_icons" }}>
                    <BsDashLg></BsDashLg>
                  </IconContext.Provider>
                  <p className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam eaque sapiente porro.
                  </p>
                </div>
              </div>
              <div className="skills">
                <h3>Skills</h3>
                <div className="skill_flex">
                  <div className="skill_first">
                    <div className="visual">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <SiAntdesign></SiAntdesign>
                      </IconContext.Provider>
                      <p>Visual Design</p>
                    </div>
                    <div className="wireframe">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <BsPenFill></BsPenFill>
                      </IconContext.Provider>
                      <p>Wireframe</p>
                    </div>
                    <div className="design">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <BsFillTriangleFill></BsFillTriangleFill>
                      </IconContext.Provider>
                      <p>User Experience</p>
                      <p>Design</p>
                    </div>
                  </div>
                  <div className="skill_second">
                    <div className="prototype">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <SiProtonvpn></SiProtonvpn>
                      </IconContext.Provider>
                      <p>Prototype</p>
                    </div>
                    <div className="art">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <SiLeaflet></SiLeaflet>
                      </IconContext.Provider>
                      <p>Art Direction</p>
                    </div>
                    <div className="research">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <FaUserAlt></FaUserAlt>
                      </IconContext.Provider>
                      <p>User Research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill_right">
              <div className="box">
                <p className="box_para">Experience</p>
                <div className="border"></div>
                <div className="box_content">
                  <p>2019-Present</p>
                  <div className="content">
                    <div className="h">
                      <h2>Product Designer</h2>
                      <p>Amazon Inc</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>2019-Present</p>
                  <div className="content">
                    <div className="h">
                      <h2>Product Designer</h2>
                      <p>Amazon Inc</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>2019-Present</p>
                  <div className="content">
                    <div className="h">
                      <h2>Product Designer</h2>
                      <p>Amazon Inc</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="border"></div>
                <div className="box_content">
                  <p>2019-Present</p>
                  <div className="content">
                    <div className="h">
                      <h2>Product Designer</h2>
                      <p>Amazon Inc</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill_img">
                <img src={skill_img} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------Latest Preoject------- */}

      <div className="project">
        <div className="container">
          <div className="project_content">
            <div className="project_left">
              <div className="heading">
              <p className="rotate">Project</p>
                <h1>Latest</h1>
                <h1>Projects</h1>
              </div>
              <div className="project_card">
                <div className="card">
                  <div className="border"></div>
                  <div className="card_content">
                    <div className="card_text">
                      <h3>Plantshop Landing</h3>
                      <h3>Page Design</h3>
                      <p>Web/Landing Page</p>
                    </div>
                    <div className="card_logo">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="card_img">
                    <img src={uiux} />
                  </div>
                </div>
              </div>
            </div>
            <div className="project_center">
              <div className="project_card">
                <div className="card">
                  <div className="border"></div>
                  <div className="card_content">
                    <div className="card_text">
                      <h3>VPS Hosting</h3>
                      <h3>Website Design</h3>
                      <p>Web/Multipage Website</p>
                    </div>
                    <div className="card_logo">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="card_img">
                    <img src={web} />
                  </div>
                </div>
              </div>
            </div>
            <div className="project_right">
              <div className="project_card">
                <div className="card">
                  <div className="border"></div>
                  <div className="card_content">
                    <div className="card_text">
                      <h3>Book Landing Page</h3>
                      <h3>Design</h3>
                      <p>Web/Landing Page</p>
                    </div>
                    <div className="card_logo">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <ImArrowUpRight2 />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="card_img">
                    <img src={developer} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------Client Section----------- */}
      <div className="client">
        <div className="container">
          <div className="client_upper">
            <div className="heading">
            <p className="s_rotate">Testimonial</p>
              <h1>Client's</h1>
              <h1>Kind Word</h1>
            </div>
            <div className="dash">
              <div className="g">
                <IconContext.Provider value={{ className: "dash_icons" }}>
                  <BsDashLg></BsDashLg>
                </IconContext.Provider>
                <p className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eaque sapiente porro.
                </p>
              </div>
            </div>
            <div className="client_btn">
              <IconContext.Provider value={{ className: "skill_icon" }}>
                <ImArrowDownLeft2 />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "skill_icon" }}>
                <ImArrowUpRight2 />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="client_lower">
          <div className="left">
            <img src={vg} alt="hero_image" />
          </div>
          <div className="center">
            <div className="border"></div>
            <div className="client_para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam fugiat saepe porro eaque deserunt maxime quisquam,
                doloribus pariatur magnam necessitatibus cupiditate, sequi
                quibusdam perspiciatis laborum totam obcaecati at sunt odit.
              </p>
            </div>
            <div className="border"></div>
          </div>
          <div className="right">
            <img src={vg} alt="hero_image" />
          </div>
        </div>
      </div>

      {/* Let"s Discuss------------------- */}

      <div className="discuss">
        <div className="container">
          <div className="discuss_content">
            <div className="discuss_left">
              <div className="heading">
                <p className="rotate">Contact</p>
                <h1>Latest</h1>
                <h1>Projects</h1>
              </div>
              <div className="discuss_card">
                <div className="card">
                  <div className="border"></div>
                  <div className="card_content">
                    <div className="card_logo">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <RiMessage2Fill />
                      </IconContext.Provider>
                    </div>
                    <div className="card_text">
                      <p>Email</p>
                      <h3>client.tanim@gmail.com</h3>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="border"></div>
                  <div className="card_content">
                    <div className="card_logo">
                      <IconContext.Provider value={{ className: "skill_icon" }}>
                        <BiCurrentLocation />
                      </IconContext.Provider>
                    </div>
                    <div className="card_text">
                      <p>Web/Landing Page</p>
                      <h3>Plantshop Landing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="discuss_right">d,d,d,</div>
          </div>
          <footer>
            <div className="border"></div>
            <div className="footer">
              <p>@All Right Reserved</p>
              <p>@All Right Reserved</p>
              <p>@All Right Reserved</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
