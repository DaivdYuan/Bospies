import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CreatePostLayout from './layouts/CreatePostLayout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomepageLayout from './layouts/HomepageLayout';
import PostLayout from "./layouts/PostLayout";

function App() {
  return (
    <div className="App">
      {/* TODO - add pages and routers here*/}
      <Router>
        <Routes>        
          <Route path="/" Component={HomepageLayout}/>
          <Route exact path="/createPost" element={<CreatePostLayout />} />
          <Route path="/post/:id" Component={PostLayout}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
