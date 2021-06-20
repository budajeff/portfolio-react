import './App.css';
import NavBar from './NavBar';
import ErrorBoundary from './ErrorBoundary';

function App() {

  return (
    <div className="App" >
      <ErrorBoundary>
        <NavBar></NavBar>
      </ErrorBoundary>
    </div >
  );
}

export default App;
