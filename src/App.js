import React from 'react';
import NavigationBar from './components/NavigationBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <NavigationBar />
      </>
    );
  }
}

export default App;
