import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Proof of Life */}
        {/* <h3>Wazzup</h3> */}
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
