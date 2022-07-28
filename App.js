//import logo from './logo.svg';
import React, { Suspense } from 'react';
//import Splitting2 from './Amar';
import './App.css';

const Amar = React.lazy(()=>import('./Amar'))
function App() {
  return (
    <Suspense fallback={<div>Please Wait</div>}>
      <h1>Code Splitting</h1>
      <Amar/>
    </Suspense>
  );
}

export default App;
