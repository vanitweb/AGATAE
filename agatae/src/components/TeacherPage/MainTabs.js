import React, { Component } from 'react';

import { Tab, Tabs,  } from 'react-tabs';




class MainTabs extends Component{


  render() {
    return (
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <h6>Marketing Director</h6>
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <h6>Marketing Director</h6>
  </Tab>
</Tabs>
    )
  }
}

export {MainTabs};