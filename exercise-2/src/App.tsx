import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import './styles.css';

const appState = observable({
  clicks: 0,
  handleIncrement: function () {
    this.clicks++;
  },
  handleDecrement: function () {
    if (this.clicks > 0) {
      this.clicks--;
    }
  },
});

@observer
class App extends React.Component {
  handleIncrement = () => {
    appState.handleIncrement();
  };

  handleDecrement = () => {
    appState.handleDecrement();
  };

  render() {
    return (
      <>
          <h1 className="clicks">Clicks: {appState.clicks}</h1>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}

export default App;
