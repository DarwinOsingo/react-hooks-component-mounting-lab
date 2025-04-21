import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  // Initial state with timer IDs
  state = {
    timerIDs: []
  };

  // Add a new timer with a random ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random() * 1000)]
    }));
  };

  // Remove a timer by ID
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };

  // Add the first timer when the component mounts
  componentDidMount() {
    this.handleAddTimer();
  }

  // Render all timers
  renderTimers = () => {
    return this.state.timerIDs.map(id => (
      <Timer key={id} id={id} removeTimer={this.removeTimer} />
    ));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }
}

export default App;
