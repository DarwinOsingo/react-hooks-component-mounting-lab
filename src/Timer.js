import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  // Increments time every second
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  // Start ticking when mounted
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // Stop ticking when unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleRemove = () => {
    this.props.removeTimer(this.props.id);
  };

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <h3 className="header">Timer ID: {this.props.id}</h3>
          <p>Time Elapsed: {this.state.time} seconds</p>
          <button onClick={this.handleRemove} className="ui red button">Remove</button>
        </div>
      </div>
    );
  }
}

export default Timer;
