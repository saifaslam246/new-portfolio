import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import { blue } from "@mui/material/colors";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Wrapper = styled.section`
  .column {
    float: left;
    width: 50%;
    padding: 10px;
    font-size: 30px;
    text-align: center;
    h5 {
      margin-top: 60px;
      text-align: start;
      margin-left: 140px;
      font-size: 50px;
    }
    p {
      text-align: start;
      margin-left: 140px;
    }
    span {
      color: purple;
    }
    button {
      background-color: purple;
      color: white;
      padding: 10px 20px;
      margin-top: 20px;
      align-item: start;
      margin-left: -270px;
      font-size: 20px;
      border-radius: 10px;
      box-shadow: 20px 20px 50px grey;
    }
    button:hover {
      background-color: white;
      color: black;
    }
    img {
      margin-top: 50px;
      margin-right: 130px;
      width: 350px;
      height: 400px;
    }
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 820px) {
    .column {
      h5 {
        margin-left: 90px;
        font-size: 40px;
      }
      p {
        margin-top: 10px;
        margin-left: 90px;
        font-size: 30px;
        margin-right: 45px;
      }
      button {
        padding: 10px 20px;
        margin-top: 5px;
        margin-left: -85px;
      }
      img {
        margin-top: 80px;
        margin-right: 20px;
        width: 300px;
      }
    }
  }
  @media screen and (min-width: 767px) and (max-width: 768px) {
    .column {
      margin-top: -50px;
      h5 {
        margin-left: 90px;
        font-size: 37px;
        margin-top: 100px;
      }
      p {
        margin-top: 10px;
        margin-left: 90px;
        font-size: 22px;
        margin-right: 45px;
      }
      button {
        padding: 10px 20px;
        margin-top: 5px;
        margin-left: -85px;
      }
      img {
        margin-top: 100px;
        margin-right: 20px;
        width: 270px;
        // height: 330px;
      }
    }
  }

  @media screen and (max-width: 766px) {
    .column {
      width: 100%;
      h5 {
        margin-top: 10px;
        margin-left: 40px;
        font-size: 40px;
      }
      p {
        margin-top: 20px;
        margin-left: 40px;
        font-size: 17px;
      }
      button {
        padding: 10px 20px;
        margin-top: 5px;
        margin-left: -210px;
      }
      img {
        margin-top: 40px;
        margin-right: 25px;
        // height: 400px;
      }
    }
  }
  @media screen and (max-width: 280px) {
    .column {
      h5 {
        margin-left: 40px;
        font-size: 25px;
      }
      p {
        margin-top: 10px;
        font-size: 17px;
        margin-left: 42px;
        margin-right: 45px;
      }
      button {
        padding: 10px 20px;
        margin-top: 5px;
        margin-left: -85px;
      }
      img {
        margin-top: 30px;
        margin-right: -10px;
        width: 200px;
      }
    }
  }
`;
function Header() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper>
      <div className="row">
        <div
          className="column"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="300"
        >
          {/* <p style={{ marginTop: 110, marginBottom: -40 }}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
              }}
              startDelay={100}
              cursorColor="#3F3D56"
              multiTextLoop={true}
              hideCursorAfterText={true}
              multiText={[
                "Mern Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Node js",
                "Mongodb",
              ]}
              multiTextDelay={1000}
              typeSpeed={200}
            />
          </p> */}

          <h5>
            Solving <span>Modern</span>
            <br /> <span>Problem</span> with <br />
            Modern <span>Solution</span>
          </h5>
          <p>
            Hi, I’m SAIF UR REHMAN a MERN Stack Developer. based in PAKISTAN.
            <br />
          </p>
          <button>Hire ME</button>
        </div>
        <div className="column">
          <img
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="300"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30%  70% 70% ",
            }}
            src="images/main1.png"
            alt="profile img"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
