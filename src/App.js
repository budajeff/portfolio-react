import './App.css';
import NavBar from './NavBar';
import ErrorBoundary from './ErrorBoundary';
import { SiteDataContextProvider } from './SiteDataContextProvider';

function App() {

  return (
    <SiteDataContextProvider>
      <div className="App" >
        <ErrorBoundary>
          <NavBar></NavBar>
        </ErrorBoundary>
      </div >
    </SiteDataContextProvider>
  );
}

export default App;
