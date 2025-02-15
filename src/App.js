import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import FileList from './FileList'; // Import the FileList component
import ServiceRequestForm from './ServiceRequestForm'; // Import the ServiceRequestForm component
import ServiceRequestList from './ServiceRequestList'; // Import the ServiceRequestList component

function App() {
  return (
    <div>
     {/*<h1>Welcome to My App</h1> */}
      <FileList />
      <ServiceRequestForm />
      <ServiceRequestList />
    </div>
  );
}

export default withAuthenticator(App);














/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
