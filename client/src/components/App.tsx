import React from 'react';
import Header from './Header';
import VideoBanner from './VideoBanner';
import About from './About';
import Form from './Form';

const App: React.FC<any> = () => {
  return (
    <React.Fragment>
        <Header />
        <Form />
        <About />
        <VideoBanner />
    </React.Fragment>
  );
}

export default App;
