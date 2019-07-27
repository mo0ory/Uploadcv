import React, { Component } from 'react';
import Form from './form.js';
import TableExample from './table.js';
import './App.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import logo from './logo.jpg';






class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };


  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }






  render() {
    return (

      <div className="App">
        <img src={logo} height="80" alt="CV Logo" />
        <div >
          <Nav tabs className="Tap">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                UploadCV
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Preview the uploaded CV's
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                About us
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  {/* import form.js */}
                  <Form />
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <TableExample />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <div className="about">
                    <br></br>
                    <h1>About Us</h1>
                    <p> This  a site for personal information and biographies
                       so that the user can fill in the information and download the file for his resume.</p>
                    <p>Made for practice purposes using React.js </p>
                    <h1> By *_*</h1>
                    <h2> Leader</h2>
                    <p> سمر مسيعيد الرحيلي</p>
                    <h2> Member</h2>
                    <p> انوار دحيم عبدالله</p>
                    <h2> Member</h2>
                    <p>فاطمة معيض الحارثي</p>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>



      </div>

    );

  }
}
export default App;
