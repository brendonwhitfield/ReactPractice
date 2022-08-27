import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './home';
import User from './users';
import Contact from './contact';

const Navbar = () => {
    return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
    </>
    );
}
export default Navbar;