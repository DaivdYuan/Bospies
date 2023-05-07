import logo from './logo.svg';
import './App.css';
import HomepageLayout from './layouts/HomepageLayout'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* TODO - add pages and routers here*/}
      <NavBar/>
      <HomepageLayout/>
    </div>
  );
}

export default App;
