import logo from './logo.svg';
import './App.css';
import HomepageLayout from './layouts/HomepageLayout'
import CreatePostLayout from './layouts/CreatePostLayout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* TODO - add pages and routers here*/}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomepageLayout />} />
          <Route exact path="/createPost" element={<CreatePostLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
