import './App.css';
import Header from './header.jsx'
import Footer from './footer.jsx';
import MoreAboutMe from './PropTest';
import Clock from './Clock';
import Item from './Item';
import Home from './home.js';
import Contact from './contact';
import User from './users';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App () {
return (
  <><>
    <Header />
    <MoreAboutMe nameProp={"Brendon"} ageProp={"22"} hobby1Prop={"football"} faveCerealProp={"nesquik choco balls"}></MoreAboutMe>
    <Clock />
    <Item />
    <Footer /> </>
  <Router> 
 
  <div>
      <ul>
          <li>
              <Link to="/home">Home</Link>
          </li>
          <li>
              <Link to="/users">Users</Link>
          </li>
          <li>
              <Link to="/contact">Contact</Link>
          </li>
      </ul>
      <Routes>
          <Route path="/home"><Home /></Route>
          <Route path="/users"><User /></Route>
          <Route path="/contact"><Contact /></Route>
      </Routes>
  </div>
</Router></>
);
}

export default App;



