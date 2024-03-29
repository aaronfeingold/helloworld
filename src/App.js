import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData(){
    const headers = new Headers({
      'Content-Type': "application/json",
      'Accept': "application/json"
    });

    fetch("resumeData.json", {
      headers,
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ resumeData: data });
      });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
