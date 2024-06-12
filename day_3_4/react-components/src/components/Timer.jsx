import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    console.log("Timer constructed");
  }

  static getDerivedStateFromProps(props, state) {
    // Perform state transitions on prop changes
    console.log("got props and state", props, state);
    return null; // No state update necessary
  }

  componentDidMount() {
    console.log("Timer mounted");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Decide to re-render based on changes to props or state
    return nextState.seconds % 2 === 0; // Only re-render on even seconds
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Timer updated");
  }

  componentWillUnmount() {
    console.log("Timer will unmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("Timer render");
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default Timer;
