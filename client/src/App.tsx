import React from 'react';
import { ReactQueryProvider } from './context/react-query';
import Home from './components/Home';

const App: React.FC = () => {  
  return (
    <ReactQueryProvider>
      <Home />
    </ReactQueryProvider>
  );
};

export default App;
