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
import GroupHomeLayout from "./layouts/GroupHomeLayout";

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
          <Route path="/groups/:id" Component={GroupHomeLayout}/>
          <Route exact path="/groups/:grpid/post/:id" element={<PostLayout isGrp={true}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
