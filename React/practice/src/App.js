import './App.css';
import Header from './header.jsx'
import Footer from "./footer.jsx";
import MoreAboutMe from './PropTest';


function App () {
return (
  <div className="App">
    <Header />
    <MoreAboutMe nameProp={"Brendon"} ageProp={"22"} hobby1Prop={"football"} faveCerealProp={"nesquik choco balls"}></MoreAboutMe>
    <Footer />
  </div>
);
}

export default App;



