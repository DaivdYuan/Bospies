import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CreatePostLayout from './layouts/CreatePostLayout'
import HomepageLayout from './layouts/HomepageLayout';
import PostLayout from "./layouts/PostLayout";
import GroupSelectLayout from "./layouts/GroupSelectLayout";

function App() {
  return (
    <div className="App">
      {/* TODO - add pages and routers here*/}
      <Router>
        <Routes>        
          <Route path="/" Component={HomepageLayout}/>
          <Route exact path="/createPost" element={<CreatePostLayout type="none" />} />
          <Route exact path="/createGroupPost" element={<CreatePostLayout type="groupPost" />} />
          <Route exact path="/editGroup" element={<CreatePostLayout type="makeGroup" />} />
          <Route path="/post/:id" Component={PostLayout}/>
          <Route path="/groups/" Component={GroupSelectLayout}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
