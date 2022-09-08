import React from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Pondit_Logo from "../../images/01_Pondit_Homepage-final-logo.png";
import "./phone.css";
import career_logo from "../../images/01_Pondit_Homepage-career.png";
import access_logo from "../../images/01_Pondit_Homepage-assess.png";
import Courses_logo from "../../images/01_Pondit_Homepage-computer.png";
import Success_logo from "../../images/01_Pondit_Homepage-success.png";
import Yellow_leaf from "../../images/01_Pondit_Homepage_yellow_leaf.png";
import Red_Leaf from "../../images/01_Pondit_Homepage_red_leaf.png";
import Blue_Leaf from "../../images/01_Pondit_Homepage_blue_leaf.png";
import Green_Leaf from "../../images/01_Pondit_Homepage_green_leaf.png";
import Computer_Logo from "../../images/01_Pondit_Homepage-computer.png";
const Phone = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src={Pondit_Logo}
              alt="pondit_logo"
              style={{ width: "50%" }}
              className="mt-3 ms-3"
            ></img>
          </Col>
          <Col>
            <Button variant="primary" size="sm" className="mt-4">
              Log In
            </Button>{" "}
            <Button variant="secondary" size="sm" className="mt-4">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" className="mt-4">
        <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="d-flex flex-row">
                <img src={career_logo} alt="career_logo"></img>
                <p className="ms-3 fw-bold">Career Path</p>
              </Nav.Link>
              <Nav.Link href="" className="d-flex flex-row">
                <img src={access_logo} alt="assess_logo"></img>
                <p className="ms-3 fw-bold">Assess Yourself</p>
              </Nav.Link>
              <Nav.Link href="" className="d-flex flex-row">
                <img src={Courses_logo} alt="courses_logo"></img>
                <p className="ms-3 fw-bold">All Courses</p>
              </Nav.Link>
              <Nav.Link href="" className="d-flex flex-row">
                <img src={Success_logo} alt="success_logo"></img>
                <p className="ms-3 fw-bold">Success Story</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="heading_main">
        <Container>
          <Row>
            <Col className="d-flex flex-row mt-4">
              <img src={Yellow_leaf} alt="yellow_lead"></img>
              <div>
                {" "}
                <h4 className="ms-3" style={{ color: "#ea9722" }}>
                  CHOOSE YOUR CAREER
                </h4>
                <p className="ms-3">
                  Visit Our <a href="/">Courses.</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex flex-row mt-4">
              <img src={Red_Leaf} alt="yellow_lead"></img>
              <div>
                {" "}
                <h4 className="ms-3" style={{ color: "#eb483d" }}>
                  SPONSORSHIP PROGRAM
                </h4>
                <p className="ms-3">Give a test and grab the opportunities.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex flex-row mt-4">
              <img src={Blue_Leaf} alt="yellow_lead"></img>
              <div>
                {" "}
                <h4 className="ms-3" style={{ color: "#1abdd4" }}>
                  INTERNSHIP OPPORTUNITIES
                </h4>
                <p className="ms-3">
                  Get experience and learn how to work in the industry.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex flex-row mt-4">
              <img src={Green_Leaf} alt="yellow_lead"></img>
              <div>
                {" "}
                <h4 className="ms-3" style={{ color: "#54b947" }}>
                  SOFTWARE DEVELOPMENT
                </h4>
                <p className="ms-3">
                  Develop your idea by us with cutting edge technology.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about_us">
        <p className="mt-5 ms-3 fs-5 fw-bold border-bottom">About Us</p>
        <h2
          className="text-center fs-1 mt-5 fw-lighter"
          style={{ color: "#0288d1" }}
        >
          WELCOME TO PONDIT
        </h2>
        <p className="ms-3 me-3 lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>
      <div className="courses">
        <Card body>
          <h1 className="text-center fw-lighter" style={{ color: "#0288d1" }}>
            New Courses
          </h1>
          <div>
            <h2 className="mt-5">
              PYTHON WEB DEVELOPMENT USING DJANGO (2ND BATCH)
            </h2>
            <div className="d-flex flex-row">
              <i
                className="fa-regular fa-clock"
                style={{ color: "#0288d1", fontSize: "20px" }}
              ></i>
              <p className="ms-2 fw-bold" style={{ color: "#ea9722" }}>
                100H (4 Classes)
              </p>
            </div>
          </div>
          <div>
            <h2 className="mt-5">
              PYTHON WEB DEVELOPMENT USING DJANGO (2ND BATCH)
            </h2>
            <div className="d-flex flex-row">
              <i
                className="fa-regular fa-clock"
                style={{ color: "#0288d1", fontSize: "20px" }}
              ></i>
              <p className="ms-2 fw-bold" style={{ color: "#ea9722" }}>
                100H (4 Classes)
              </p>
            </div>
          </div>
          <div>
            <h2 className="mt-5">
              PYTHON WEB DEVELOPMENT USING DJANGO (2ND BATCH)
            </h2>
            <div className="d-flex flex-row">
              <i
                className="fa-regular fa-clock"
                style={{ color: "#0288d1", fontSize: "20px" }}
              ></i>
              <p className="ms-2 fw-bold" style={{ color: "#ea9722" }}>
                100H (4 Classes)
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="categories">
        <h1 className="text-center fw-lighter" style={{ color: "#0288d1" }}>
          COURSES CATEGORIES
        </h1>
        <p className="text-center fs-6">
          The type of courses we offered are listed below.
        </p>
        <Button variant="primary" size="sm" className="ms-3">
          ALL COURSES
        </Button>{" "}
        <Card body className="mt-5">
          <div className="d-flex justify-content-center align-content">
            <img
              src={Computer_Logo}
              alt="computer_logo"
              style={{ width: "56px" }}
            ></img>
          </div>
          <div className="d-flex justify-content-center align-content">
            <h4 className="mt-3">WEB DEVELOPMENT</h4>
          </div>
          <div className="d-flex justify-content-center align-content">
            <p>PHP,Node,Laravel, and JavaScript</p>
          </div>
        </Card>
        <Card body className="mt-5">
          <div className="d-flex justify-content-center align-content">
            <img
              src={Computer_Logo}
              alt="computer_logo"
              style={{ width: "56px" }}
            ></img>
          </div>
          <div className="d-flex justify-content-center align-content">
            <h4 className="mt-3">WEB DEVELOPMENT</h4>
          </div>
          <div className="d-flex justify-content-center align-content">
            <p>PHP,Node,Laravel, and JavaScript</p>
          </div>
        </Card>
        <Card body className="mt-5">
          <div className="d-flex justify-content-center align-content">
            <img
              src={Computer_Logo}
              alt="computer_logo"
              style={{ width: "56px" }}
            ></img>
          </div>
          <div className="d-flex justify-content-center align-content">
            <h4 className="mt-3">WEB DEVELOPMENT</h4>
          </div>
          <div className="d-flex justify-content-center align-content">
            <p>PHP,Node,Laravel, and JavaScript</p>
          </div>
        </Card>
        <Card body className="mt-5">
          <div className="d-flex justify-content-center align-content">
            <img
              src={Computer_Logo}
              alt="computer_logo"
              style={{ width: "56px" }}
            ></img>
          </div>
          <div className="d-flex justify-content-center align-content">
            <h4 className="mt-3">WEB DEVELOPMENT</h4>
          </div>
          <div className="d-flex justify-content-center align-content">
            <p>PHP,Node,Laravel, and JavaScript</p>
          </div>
        </Card>
      </div>
      <div className="seip">
        <h1
          className="text-center mb-5"
          style={{ color: "white", position: "relative", top: "50px" }}
        >
          APPLY FOR SEIP COURSES
        </h1>
        <p
          style={{ color: "white", position: "relative", top: "30px" }}
          className="lead ms-3 me-3"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button variant="primary" size="sm" className="mt-5 ms-3">
          Apply Now
        </Button>{" "}
      </div>

      <div className="SCHOLARSHIP">
        <h1
          className="text-center mb-5"
          style={{ color: "white", position: "relative", top: "50px" }}
        >
          APPLY FOR SCHOLARSHIP
        </h1>
        <p
          style={{ color: "white", position: "relative", top: "30px" }}
          className="lead ms-3 me-3"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button variant="primary" size="sm" className="mt-5 ms-3">
          How To Apply
        </Button>{" "}
      </div>

      <div className="students">
        <div className="categories">
          <Card body className="mt-5">
            <div className="d-flex justify-content-center align-content">
              <i
                class="fa-solid fa-graduation-cap"
                style={{ fontSize: "40px" }}
              ></i>
            </div>
            <div className="d-flex justify-content-center align-content">
              <h4 className="mt-3">Total Students</h4>
            </div>
            <div className="d-flex justify-content-center align-content">
              <p className="fw-bold">1000+</p>
            </div>
          </Card>
          <Card body className="mt-5">
            <div className="d-flex justify-content-center align-content">
              <i
                className="fa-solid fa-chalkboard-user"
                style={{ fontSize: "40px" }}
              ></i>
            </div>
            <div className="d-flex justify-content-center align-content">
              <h4 className="mt-3">Admins</h4>
            </div>
            <div className="d-flex justify-content-center align-content">
              <p className="fw-bold">4+</p>
            </div>
          </Card>
          <Card body className="mt-5">
            <div className="d-flex justify-content-center align-content">
              <i className="fa-solid fa-user" style={{ fontSize: "40px" }}></i>
            </div>
            <div className="d-flex justify-content-center align-content">
              <h4 className="mt-3">Mentors</h4>
            </div>
            <div className="d-flex justify-content-center align-content">
              <p className="fw-bold">20+</p>
            </div>
          </Card>
          <Card body className="mt-5">
            <div className="d-flex justify-content-center align-content">
              <i
                className="fa-sharp fa-solid fa-trophy"
                style={{ fontSize: "40px" }}
              ></i>
            </div>
            <div className="d-flex justify-content-center align-content">
              <h4 className="mt-3">Achivments</h4>
            </div>
            <div className="d-flex justify-content-center align-content">
              <p className="fw-bold">500+</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="mentors">
        <p className="mt-5 ms-3 fs-5 fw-bold border-bottom">Our Mentors</p>
        <h2
          className="text-center fs-1 mt-5 fw-lighter"
          style={{ color: "#0288d1" }}
        >
          MEET OUR MENTORS
        </h2>
        <p className="ms-3 me-3 lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className="ms-3 me-3 lead fw-bold">Mentors Core Qualifications: </p>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Professional degree or Higher.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
        </div>
        <div className="d-flex flex-row">
          <span className="ms-3 me-3 lead fw-bold">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <p className="lead">Practical, real-world business and expertise.</p>
        </div>
        <Button variant="secondary" size="sm" className="mt-3 ms-3">
          Become an Instructor
        </Button>

        <Container className="mt-3">
          <Row>
            <Col>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                />
                <Card.Body>
                  <Card.Title>Mentor 1</Card.Title>
                  <Card.Text>Mentor1</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                />
                <Card.Body>
                  <Card.Title>Mentor 2</Card.Title>
                  <Card.Text>Mentor2</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3 mt-3">
            <Col>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                />
                <Card.Body>
                  <Card.Title>Mentor 1</Card.Title>
                  <Card.Text>Mentor1</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                />
                <Card.Body>
                  <Card.Title>Mentor 2</Card.Title>
                  <Card.Text>Mentor2</Card.Text>
                  <Button variant="primary">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="success_story">
        <h1 className="text-center fw-lighter" style={{ color: "#0288d1" }}>
          SUCCESS STORIES
        </h1>
        <p className="text-center ms-3 me-3 fs-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <Carousel className="mt-5">
          <Carousel.Item>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              />
              <Card.Body>
                <Card.Title>Jhone Doe</Card.Title>
                <Card.Text className="fw-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              />
              <Card.Body>
                <Card.Title>Mary Rose</Card.Title>
                <Card.Text className="fw-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              />
              <Card.Body>
                <Card.Title>Willium Jack</Card.Title>
                <Card.Text className="fw-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="partners">
        <h1
          className="text-center fs-1 mt-5 fw-lighter"
          style={{ color: "#0288d1" }}
        >
          Partners.
        </h1>
        <img
          src="data:image/png;base64,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"
          alt="bitm_logo"
          style={{ marginLeft: "100px" }}
        ></img>
      </div>

      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5827015229697!2d90.39779971744383!3d23.868947600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c55251220de1%3A0x252d0802e97850b3!2sPONDIT!5e0!3m2!1sen!2sbd!4v1662559791179!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="pondit_map"
        ></iframe>
      </div>

      <Container className="footer">
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center align-center">
              <img src={Pondit_Logo} alt="pondit_logo" className="mt-5"></img>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-center">
              <div className="mt-3">
                <span className="mt-5 text-center">
                  রাজউক রাজীব কসমো শপিং কমপ্লেক্স। লেভেল: ৫
                </span>

                <p className="text-center">
                  প্লট: ৭১, সেক্টর: ৭, আজমপুর, উত্তরা, ঢাকা-১২৩০
                </p>
                <p className="text-center">+০১৮৯৭৬৫৪৩২৫</p>
                <p className="text-center">info@pondit.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Phone;
