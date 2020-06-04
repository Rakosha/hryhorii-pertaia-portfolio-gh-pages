import React, { Component } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;
export class Body extends Component {
  render() {
    return (
      <div className="mainBody">
        <ParallaxBanner
          className="mountains"
          layers={[
            {
              image: require("../images/mntBG.png"),
              amount: 0.1,
            },
            {
              image: require("../images/mntGradient.png"),
              amount: 0.5,
            },
            {
              image: require("../images/mnt5.png"),
              amount: 0.4,
            },
            {
              image: require("../images/mnt4.png"),
              amount: 0.1,
            },
            {
              image: require("../images/mnt3.png"),
              amount: -0.2,
            },
            {
              image: require("../images/mnt2.png"),
              amount: -0.3,
            },
            {
              image: require("../images/mnt1.png"),
              amount: -0.6,
            },
          ]}
          style={{
            height: "500px",
          }}
        >
          <h1>Banner Children</h1>
        </ParallaxBanner>

        {/* <svg
          className="parallaxSeparator"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1440 270"
          enable-background="new 0 0 1440 270"
        >
          <polygon
            fill="#ffa400"
            points="1440,0 0,230 0,270 1440,40 "
          ></polygon>
          <polygon
            fill="#ffa400"
            points="1440,0 0,230 0,270 1440,40 "
          ></polygon>
        </svg> */}

        <Anime
          initial={[
            {
              targets: ".whoAmIForm h1",
              opacity: 1,
              easing: "linear",
              duration: 700,
            },
            {
              targets: ".whoAmIForm h1",
              opacity: 0.8,
              easing: "linear",
              duration: 250,
            },
            {
              targets: ".whoAmIForm h4",
              opacity: 1,
              easing: "linear",
              duration: 250,
            },
            {
              targets: ".whoAmIForm h4",
              opacity: 0.6,
              easing: "linear",
              duration: 250,
            },
            {
              targets: ".whoAmIForm .linkedInIconSVG",
              opacity: 1,

              rotate: {
                value: 360,
                duration: 250,
                easing: "easeInOutSine",
              },
              easing: "linear",
            },
            {
              targets: ".whoAmIForm .githubIconSVG",

              opacity: 1,
              rotate: {
                value: 360,
                duration: 250,
                easing: "easeInOutSine",
              },
              easing: "linear",
            },
            {
              targets: ".whoAmIForm .codepenIconSVG",
              opacity: 1,

              rotate: {
                value: 360,
                duration: 250,
                easing: "easeInOutSine",
              },
              easing: "linear",
            },
          ]}
        >
          <div className="whoAmIForm">
            <h1 className=" ">Hryhorii Pertaia</h1>
            <h4 className=" ">Full-stack web developer</h4>
            <ul className=" ">
              <li className="liIcon linkedInIcon">
                <a
                  href="https://www.linkedin.com/in/hryhorii-pertaia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="linkedInIconSVG"
                    height="682pt"
                    viewBox="-21 -35 682.66669 682"
                    width="682pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0" />
                    <path d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0" />
                    <path d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0" />
                  </svg>
                </a>
              </li>
              <li className="liIcon githubIcon">
                <a
                  href="https://github.com/Rakosha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="githubIconSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="438.549px"
                    height="438.549px"
                    viewBox="0 0 438.549 438.549"
                  >
                    <g>
                      <path
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
                      c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
                      c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
                      c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
                      c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
                      c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
                      c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
                      c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
                      c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
                      c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
                      c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
                      c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
                      c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
                      c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
                      c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
                      c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
                      c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
                      c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
                      c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
                      C438.536,184.851,428.728,148.168,409.132,114.573z"
                      />
                    </g>
                  </svg>
                </a>
              </li>
              <li className="liIcon codepenIcon">
                <a
                  href="https://codepen.io/rakosha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="codepenIconSVG"
                    id="Bold"
                    enableBackground="new 0 0 24 24"
                    height="512"
                    viewBox="0 0 24 24"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Anime>
        <div className="projectsWidnow">
          <h1>Projects</h1>
          <h3>Component-Based React App: Virtual Guitar</h3>
          <p>
            Link to github pages:{" "}
            <a href="https://rakosha.github.io/Virtual-Guitar-Project/">
              https://rakosha.github.io/Virtual-Guitar-Project/
            </a>
          </p>
          <p>
            Link to github repository:{" "}
            <a href="https://github.com/Rakosha/Virtual-Guitar-Project">
              https://github.com/Rakosha/Virtual-Guitar-Project
            </a>
          </p>
          <img
            className="virtGuitarGif"
            alt=""
            src={require("../images/virtualGuitarProjectPreview.gif")}
          ></img>
          <div className="descr virtGuitarDescr">
            <p>
              This app was built using HTML5, CSS3(SCSS), React.js, HTML5 Canvas
              and Note.js
            </p>
            <p>All the samples were recorded by me.</p>
            <p>
              Javascript Guitar string vibration solution was taken from{" "}
              <a href="https://codepen.io/wentin/pen/VYegqq">this</a> pen.{" "}
            </p>
          </div>
          <h3>Signature Verification: Machine Learning Project</h3>
          <p>
            Link to github repository:{" "}
            <a href="https://github.com/Rakosha/Signature-Verification-Project">
              https://github.com/Rakosha/Signature-Verification-Project
            </a>
          </p>
          <img
            alt=""
            src={require("../images/signature-verification-preview.png")}
          ></img>
          <div className="descr">
            <p>
              This project was built using Python, scikit-learn, PyTorch,
              TensorFlow, and Matplotlib
            </p>
          </div>
          <h3>Materialized Tabs + Animated Background</h3>
          <iframe
            height="350"
            style={{ width: "100%" }}
            scrolling="no"
            title="Materialized Tabs + Animated Background"
            src="https://codepen.io/rakosha/embed/vdyarj?height=265&theme-id=dark&default-tab=html,result"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
          >
            See the Pen{" "}
            <a href="https://codepen.io/rakosha/pen/vdyarj">
              Materialized Tabs + Animated Background
            </a>{" "}
            by Hryhorii Pertaia (
            <a href="https://codepen.io/rakosha">@rakosha</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <h3>Simple CSS Solar System with Dynamic Background</h3>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            title="Simple CSS Solar System with Dynamic Background"
            src="https://codepen.io/rakosha/embed/VQKBjy?height=265&theme-id=dark&default-tab=css,result"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
          >
            See the Pen{" "}
            <a href="https://codepen.io/rakosha/pen/VQKBjy">
              Simple CSS Solar System with Dynamic Background
            </a>{" "}
            by Hryhorii Pertaia (
            <a href="https://codepen.io/rakosha">@rakosha</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <h3>Pure CSS Dynamic Background</h3>
          <iframe
            height="300"
            style={{ width: "100%" }}
            scrolling="no"
            title="Pure CSS Dynamic Background"
            src="https://codepen.io/rakosha/embed/VQKBzx?height=265&theme-id=dark&default-tab=css,result"
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen={true}
          >
            See the Pen{" "}
            <a href="https://codepen.io/rakosha/pen/VQKBzx">
              Pure CSS Dynamic Background
            </a>{" "}
            by Hryhorii Pertaia (
            <a href="https://codepen.io/rakosha">@rakosha</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>

        <div className="hobbiesWindow">
          <h1> Hobbies</h1>
          <p>
            I am a music writer/producer. During my free time, I like creating
            new and interesting sounds.
          </p>
          <p>I am interested in witch house and wave genres.</p>
          <h3> My Music</h3>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/620898807&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/soundoria"
              title="SΩundΩriΔ"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              SΩundΩriΔ
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/soundoria/cveayeva"
              title="†CVE†AEVA"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              †CVE†AEVA
            </a>
          </div>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/610158171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/soundoria"
              title="SΩundΩriΔ"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              SΩundΩriΔ
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/soundoria/zbwc26ic9u2x"
              title="左手指月"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              左手指月
            </a>
          </div>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/596424993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/soundoria"
              title="SΩundΩriΔ"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              SΩundΩriΔ
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/soundoria/mrk"
              title="ΔMRΔK"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              ΔMRΔK
            </a>
          </div>
        </div>

        <div className="footer">
          <h4>
            This portfolio was built by Hryhorii Pertaia with LOVE using HTML5,
            SCSS/SASS, React.js, React Animejs and React-scroll-parallax.
          </h4>
        </div>
      </div>
    );
  }
}

export default Body;
