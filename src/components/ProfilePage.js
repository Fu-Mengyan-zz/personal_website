import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import "./public/font.css";
import "./assets/css/nucleo-icons.css";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardText,
  CardFooter
} from "reactstrap";

// core components
import PagesNavbar from "./PagesNavbar";
import Footer from "./Footer";

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }

  render() {
    return (
      <div>
        <PagesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("./assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("./assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Personal Profile</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">"Hello fellows!"</span>);
                    <br />
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">
                      "Here is Fu Mengyan's personal profile!"
                    </span>
                    );
                    <br />
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">"Have fun!"</span>);
                  </p>
                  <div className="btn-wrapper profile pt-3" />
                </Col>
                <Col md="6">
                  <Card className="card-user">
                    <CardBody>
                      <CardText />
                      <div className="author">
                        <div className="block block-one" />
                        <div className="block block-two" />
                        <div className="block block-three" />
                        <div className="block block-four" />
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar"
                            src={require("./assets/img/fu_mengyan_profile.jpg")}
                          />
                          <h2 className="title">Fu Mengyan</h2>
                        </a>
                        <p className="description">
                          Software Developer, Web Designer &amp; Code Enthusiast
                        </p>
                        <p className="description">mengyan.fu003@gmail.com</p>
                      </div>
                      <div className="card-description">
                        I've been an undergraduate at Nanyang Technological
                        University of Singapore since 2016 as an SM2 scholar.
                        During bridging year, I discovered my great interest in
                        coding and designing. With my passion, knowledge and
                        fast-learning ability, I believe I will be able to
                        devote and contribute to any projects.
                      </div>
                    </CardBody>
                    <CardFooter />
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <Card className="card-coin card-plain">
                      <CardBody>
                        <Nav
                          className="nav-tabs-primary justify-content-center"
                          tabs
                        >
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.tabs === 1
                              })}
                              onClick={e => this.toggleTabs(e, "tabs", 1)}
                              href="#pablo"
                            >
                              Web
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.tabs === 2
                              })}
                              onClick={e => this.toggleTabs(e, "tabs", 2)}
                              href="#pablo"
                            >
                              Android
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.tabs === 3
                              })}
                              onClick={e => this.toggleTabs(e, "tabs", 3)}
                              href="#pablo"
                            >
                              Photoshop
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.tabs === 4
                              })}
                              onClick={e => this.toggleTabs(e, "tabs", 4)}
                              href="#pablo"
                            >
                              Telegram bot
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent
                          className="tab-subcategories"
                          activeTab={"tab" + this.state.tabs}
                        >
                          <TabPane tabId="tab1">
                            <p>
                              I cooperated in an 8 men team for a duration of 3
                              months in developing a{" "}
                              <span className="text-info">
                                Crisis Management System
                              </span>{" "}
                              with <code>layered architecture</code> using{" "}
                              <code>Django framework</code>, <code>React</code>{" "}
                              and <code>Redux</code>. We followed{" "}
                              <span className="text-info">
                                V-model software development lifecycle
                              </span>
                              . In this project, I focused on{" "}
                              <span className="text-info">
                                Incident Management subsystem
                              </span>{" "}
                              using <code>Python</code> and{" "}
                              <code>HTML/CSS</code>.
                            </p>
                            <div className="btn-wrapper pt-3">
                              <Button
                                className="btn-simple"
                                color="danger"
                                href="https://github.com/Fu-Mengyan/8Pax_CZ3003GroupProject"
                              >
                                <i className="tim-icons icon-bulb-63" /> Check
                                it!
                              </Button>
                            </div>
                          </TabPane>
                          <TabPane tabId="tab2">
                            <p>
                              I led a team of 5 members to develop{" "}
                              <span className="text-info">
                                'Light' book reading application
                              </span>{" "}
                              with <code>Android Studio</code> adopting{" "}
                              <span className="text-info">
                                V-model software development lifecycle
                              </span>
                              . I facilitated the project by eliciting
                              requirements, building relevant analysis models
                              and developing softwaare requirement
                              specifications. I designed a{" "}
                              <span className="text-info">
                                social network subsystem
                              </span>{" "}
                              in <code>Java</code> employing <code>Facade</code>{" "}
                              and <code> Adapter design pattern</code>. The
                              database for the whole application is built using{" "}
                              <code>SQLite</code> and database basics.
                            </p>
                            <div className="btn-wrapper pt-3">
                              <Button
                                className="btn-simple"
                                color="danger"
                                href="https://github.com/Fu-Mengyan/Light"
                              >
                                <i className="tim-icons icon-bulb-63" /> Check
                                it!
                              </Button>
                            </div>
                          </TabPane>
                          <TabPane tabId="tab3">
                            <p>
                              I independently designed a song cover for high
                              school college entrance examination cheering song
                              for my juniors from next batch using{" "}
                              <code>Adobe photoshop</code>.
                            </p>
                          </TabPane>
                          <TabPane tabId="tab4">
                            <p>
                              I collaborated with 5 teammates for 3 months for
                              designing a{" "}
                              <span className="text-info">telegram bot</span>{" "}
                              using <code>Python</code>. The chatbot is an
                              integrated data management system for student
                              clubs, which improved club management time
                              compared to traditional Excel management by 20%.
                            </p>
                            <div className="btn-wrapper pt-3">
                              <Button
                                className="btn-simple"
                                color="danger"
                                href="https://github.com/Fu-Mengyan/Telegram-Chatbot"
                              >
                                <i className="tim-icons icon-bulb-63" /> Check
                                it!
                              </Button>
                            </div>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Projects</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">"Hello again!"</span>);
                    <br />
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">
                      "Here is some of Fu Mengyan's projects!"
                    </span>
                    );
                    <br />
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">
                      "If you would like to check the source code of the
                      projects, please click on the <code>'Check it!'</code>{" "}
                      button!"
                    </span>
                    );
                    <br />
                    <span className="text-info">System</span>.out.println(
                    <span className="text-success">"Have fun!"</span>);
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            <Container>
              <Row>
                <Col>
                  <h1 className="profile-title text-left">
                    Co-Curricular Activities
                  </h1>
                  <h5 className="text-on-back">03</h5>
                  <Row className="row-grid justify-content-center">
                    <Col md="3">
                      <div className="info">
                        <h2 className="info-title">Event Manager</h2>
                        <hr className="line-primary" />
                        <p>
                          I am an event manager at{" "}
                          <span className="text-info">
                            Institute of Engineering and Technology-NTU On
                            Campus
                          </span>
                          . As a member of an event team, we've successfully
                          held multiple workshops about recent technologies and
                          also several industrial visits. We also organized
                          Present Aroud the World 2018 NTU round competition
                          with another event team.
                        </p>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="info">
                        <h2 className="info-title">Debater</h2>
                        <hr className="line-warning" />
                        <p>
                          As a debater at{" "}
                          <span className="text-info">
                            Chinese Debating Squad
                          </span>
                          , I gave speeches and debated with members on a weekly
                          basis. In March 2019, we've conducted a demonstration
                          match of 8th Asia-Pacific Intervarsity Chinese Debate
                          Tournament with the debate team from National
                          University of Singapore.
                        </p>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="info">
                        <h2 className="info-title">Volunteer</h2>
                        <hr className="line-success" />
                        <p>
                          I've actively participated in kinds of volunteering
                          events in{" "}
                          <span className="text-info">
                            NTU Red Cross Youth NTU chapter
                          </span>
                          . I volunteered at Red Cross Enamour Roadshow to raise
                          funds for "FoodAid" program under Singapore Red Cross.
                          I also facilitated at Blood Donation Drive to raise
                          awareness of Blood Donation and assist Blood Donation
                          process as a guide.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row>
                <Col>
                  <Row className="row-grid justify-content-center">
                    <Col md="4">
                      <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-square-pin" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Find me</h4>
                          <p>
                            52 Nanyang Walk, <br />
                            Nanyang Technological University, <br />
                            Singapore
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-mobile" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Call me</h4>
                          <p>
                            Fu Mengyan <br />
                            +65 83589197 <br />
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">
                    Contact Information
                  </h1>
                  <h5 className="text-on-back">04</h5>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
