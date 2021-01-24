import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Media } from "reactstrap";
import { Link } from "react-router-dom";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const Dashboard = (props) => {

    const reports = [
        { title: "Installs", iconClass: "bx-copy-alt", description: "1,235" },
        { title: "Active installs", iconClass: "bx-archive-in", description: "723" }
    ];
    const email = [
        { title: "Week", linkto: "#", isActive: false },
        { title: "Month", linkto: "#", isActive: false },
        { title: "Year", linkto: "#", isActive: true }
    ];

    return (
        <React.Fragment>
          <div className="page-content">
              <Container fluid>
                  {/* Render Breadcrumb */}
                  <Breadcrumbs title='Dashboard' breadcrumbItem='Dashboard' />
                  <Row>
                      <Col xl="4">
                          <WelcomeComp />
                          <MonthlyEarning />
                      </Col>
                      <Col xl="8">
                          <Row>
                              {/* Reports Render */}
                              {
                                  reports.map((report, key) =>
                                      <Col md="4" key={"_col_" + key}>
                                          <Card className="mini-stats-wid">
                                              <CardBody>
                                                  <Media>
                                                      <Media body>
                                                          <p className="text-muted font-weight-medium">{report.title}</p>
                                                          <h4 className="mb-0">{report.description}</h4>
                                                      </Media>
                                                      <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                          <span className="avatar-title">
                                                              <i className={"bx " + report.iconClass + " font-size-24"}></i>
                                                          </span>
                                                      </div>
                                                  </Media>
                                              </CardBody>
                                          </Card>
                                      </Col>
                                  )
                              }
                          </Row>
                          <Card>
                              <CardBody>
                                  <CardTitle className="mb-4 float-sm-left">
                                      Categories
                                  </CardTitle>
                                  <div className="float-sm-right">
                                      <ul className="nav nav-pills">
                                          {
                                              email.map((mail, key) =>
                                                  <li className="nav-item" key={"_li_" + key}>
                                                      <Link className={mail.isActive ? "nav-link active" : "nav-link"} to={mail.linkto}>{mail.title}</Link>
                                                  </li>
                                              )
                                          }
                                      </ul>
                                  </div>
                                  <div className="clearfix"></div>
                                  <StackedColumnChart />
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </div>
      </React.Fragment>
      );
    }

export default Dashboard;