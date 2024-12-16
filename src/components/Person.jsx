import React, { Component } from 'react'
import imgP from '../Assets/imgProfile.jpg'
export default class Person extends Component {
    constructor(props) {
        super(props)    
      this.state = {
        person: {
          fullName: "Omar",
          bio: "Full Stack",
          imgSrc: imgP,
          profession: "Developer"
        },
        timer: 0
      };
     this.interval=null
    }
  componentDidMount() {
      this.interval= setInterval(() => {
        this.setState({timer: this.state.timer +1})
      }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
    render() {
      
    return (
      <div>
        <h3>Time passed: { this.state.timer} sec</h3>
        <h2>{this.state.person.fullName}</h2>
        <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
        <p>{this.state.person.bio} </p>
        <h4>{ this.state.person.profession}</h4>
        
      </div>
    )
  }
}
