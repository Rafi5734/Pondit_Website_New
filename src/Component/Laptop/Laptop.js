import React from "react";
import "./laptop.css";
import {
  Button,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Pondit_Logo from "../../images/01_Pondit_Homepage-final-logo.png";
import career_logo from "../../images/01_Pondit_Homepage-career.png";
import access_logo from "../../images/01_Pondit_Homepage-assess.png";
import Courses_logo from "../../images/01_Pondit_Homepage-computer.png";
import Success_logo from "../../images/01_Pondit_Homepage-success.png";
import Career_People from "../../images/01_Pondit_Homepage_V5_New_career_People_IMG.png";
import Pencil_man from "../../images/01_Pondit_Homepage_V5_Pencil_Man.png";
import Sliders from "../../images/01_Pondit_Homepage_slides_all.png";
import Slide_SVG from "../../images/01_Pondit_Homepage_slide_svg.png";
import "antd/dist/antd.css";
import {
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;
const Laptop = () => {
  return (
    <>
      <div className="laptop_main">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-content">
              <Container fluid className="mt-5">
                <Row>
                  <Col>
                    <span style={{ color: "#637280" }}>
                      ক্ষুদ্র ক্ষুদ্র বালিকণা বিন্দু বিন্দু জল
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span style={{ color: "#637280" }}>
                      গড়ে তোলে মহাদেশ, সাগর অতল।
                    </span>
                  </Col>
                </Row>
              </Container>

              <br />
            </Col>
            <Col className="d-flex justify-content-center align-content secondary-logo">
              <img src={Pondit_Logo} alt="pondit-logo" className="mt-4"></img>
            </Col>
            <Col className="d-flex justify-content-center align-content">
              <div className="mt-5">
                <Button variant="secondary">Log In</Button>{" "}
                <Button variant="primary">SIGN UP</Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>

        <Navbar
          style={{ height: "50px", backgroundColor: "#ebebeb" }}
          className="mt-3"
        >
          <Container>
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{ width: "290px", height: "50px" }}
                className="d-flex justify-content-center align-content border-start border-end"
              >
                <img src={career_logo} alt="career_path_logo"></img>
                <p className="ms-2 fw-bold">CAREER PATH</p>
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ width: "290px", height: "50px" }}
                className="d-flex justify-content-center align-content border-start border-end"
              >
                <img src={access_logo} alt="career_path_logo"></img>
                <p className="ms-2 fw-bold">ASSESS YOURSELF</p>
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ width: "290px", height: "50px" }}
                className="d-flex justify-content-center align-content border-start border-end"
              >
                <img src={Courses_logo} alt="career_path_logo"></img>
                <p className="ms-2 fw-bold">ALL COURSES</p>
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ width: "290px", height: "50px" }}
                className="d-flex justify-content-center align-content border-start border-end"
              >
                <img src={Success_logo} alt="career_path_logo"></img>
                <p className="ms-2 fw-bold">SUCCESS STORY</p>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="home_page"></div>
      </div>
      <Container className="choose_career_path_main">
        <Container className="career_wrapper">
          <Row>
            <Col>
              <div>
                <h1
                  className="career_path_title fw-light mt-5"
                  style={{ color: "#0288d1" }}
                >
                  CHOOSE CAREER PATH TO EXPLORE YOURSELF
                </h1>
                <p className="lead mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
            </Col>
            <Col>
              <img
                src={Career_People}
                alt="career_people_img"
                className="mt-5"
              ></img>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="assess_laptop_main">
        <h1 className="fw-light mt-5 text-center" style={{ color: "#0288d1" }}>
          HOW TO ASSESS YOURSELF
        </h1>
        <Container className="mt-5">
          <Row>
            <Col className="d-flex justify-content-center align-content">
              <img src={Pencil_man} alt="Pencil_Man"></img>
            </Col>
            <Col className="d-flex justify-content-center align-content flex-column">
              <Container fluid="md" className="mb-3">
                <Row>
                  <Col>
                    <Container>
                      <Row style={{ width: "100%", height: "150px" }}>
                        <Col className="assess_item_two">
                          <div className="d-flex justify-content-center align-content mt-5">
                            <i
                              className="fa-solid fa-photo-film mt-2 fs-1"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                        </Col>
                        <Col>
                          <p className="mt-2" style={{ color: "#8a95a0" }}>
                            WHY YOU NEED TO ASSESS?
                          </p>
                          <p style={{ color: "#8a95a0" }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container fluid="md" className="mb-3">
                <Row>
                  <Col>
                    <Container>
                      <Row style={{ width: "100%", height: "150px" }}>
                        <Col className="assess_item_one">
                          <div className="d-flex justify-content-center align-content mt-5">
                            <i
                              className="fa-solid fa-play mt-2 fs-1"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                        </Col>
                        <Col>
                          <p className="mt-2" style={{ color: "#8a95a0" }}>
                            WHY YOU NEED TO ASSESS?
                          </p>
                          <p style={{ color: "#8a95a0" }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
              <Container fluid="md" className="mb-3">
                <Row>
                  <Col>
                    <Container>
                      <Row style={{ width: "100%", height: "150px" }}>
                        <Col className="assess_item_one">
                          <div className="d-flex justify-content-center align-content mt-5">
                            <i
                              class="fa-solid fa-file mt-2 fs-1"
                              style={{ color: "white" }}
                            ></i>
                          </div>
                        </Col>
                        <Col>
                          <p className="mt-2" style={{ color: "#8a95a0" }}>
                            WHY YOU NEED TO ASSESS?
                          </p>
                          <p style={{ color: "#8a95a0" }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="skills_main mt-5">
        <h1 className="text-center fw-light mt-5" style={{ color: "#0288d1" }}>
          IMPROVE YOUR LEARNING SKILLS
        </h1>
        <p className="text-center" style={{ color: "#8a95a0" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <Container className="mt-5">
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Sliders}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Sliders}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Sliders}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <img src={Slide_SVG} alt="student_SVG" className="ms-4"></img>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="student_main">
        <Container>
          <Container>
            <Row>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <Card
                      style={{
                        width: "100%",
                      }}
                      actions={[
                        <FacebookOutlined key="setting" />,
                        <LinkedinOutlined key="edit" />,
                        <TwitterOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title="Jhone Doe"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
                      />
                    </Card>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card
                      style={{
                        width: "100%",
                      }}
                      actions={[
                        <FacebookOutlined key="setting" />,
                        <LinkedinOutlined key="edit" />,
                        <TwitterOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title="Mery Rose"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
                      />
                    </Card>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card
                      style={{
                        width: "100%",
                      }}
                      actions={[
                        <FacebookOutlined />,
                        <LinkedinOutlined key="edit" />,
                        <TwitterOutlined />,
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title="Alex Morgan"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
                      />
                    </Card>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <h1 className="fw-light" style={{ color: "#0288d1" }}>
                  OUR SUCCESS STUDENT ACHIEVE THEIR GOAL
                </h1>
                <Button variant="light">
                  See All Success Story <ArrowRightOutlined />
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      <div className="partner_main">
        <h1 className="text-center fw-light mt-5" style={{ color: "#0288d1" }}>
          Partners
        </h1>
        <Container>
          <Row>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://webevolmind.b-cdn.net/wp-content/uploads/2018/05/guia-elearning-1024x484-2.jpg"
                  />
                }
              >
                <Meta
                  title="E-Learning Academy"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://banglatech24.com/wp-content/uploads/2022/02/bkash-bn-pink.jpg"
                  />
                }
              >
                <Meta title="Bkash" description="www.instagram.com" />
              </Card>
            </Col>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/premium-photo/3d-facebook-logo-background-facebook-famous-social-media-platform_73903-697.jpg?w=2000"
                  />
                }
              >
                <Meta title="Facebook" description="www.instagram.com" />
              </Card>
            </Col>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/premium-photo/3d-facebook-logo-background-facebook-famous-social-media-platform_73903-697.jpg?w=2000"
                  />
                }
              >
                <Meta title="Facebook" description="www.instagram.com" />
              </Card>
            </Col>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/premium-photo/3d-facebook-logo-background-facebook-famous-social-media-platform_73903-697.jpg?w=2000"
                  />
                }
              >
                <Meta title="Facebook" description="www.instagram.com" />
              </Card>
            </Col>
            <Col xs={2}>
              <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://img.freepik.com/premium-photo/3d-facebook-logo-background-facebook-famous-social-media-platform_73903-697.jpg?w=2000"
                  />
                }
              >
                <Meta title="Facebook" description="www.instagram.com" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Laptop;
