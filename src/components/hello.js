import React from "react"
import "../styles/tachyons.css"

class Hello extends React.Component {


   constructor(props) {
    super(props);
    this.state = {
      message: "Bonjour."
    }
  }
  
 componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      3000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    if (this.state.message === "Bonjour.") {
      this.setState({
        message: "Hi."
      });
    } else if (this.state.message === "Hi.") {
      this.setState({
        message: "Hallo."
      });
  } else if (this.state.message === "Hallo.") {
      this.setState({
        message: "Guten Tag."
      });
    } else{
      this.setState({
        message: "Bonjour."
      });
    }
  }




  render () {
    return(
            <div>
              <h1 className="b f1 fw7 cf center nord0 mb0">{this.state.message}</h1>
            </div>
          )
  }
}

export default Hello