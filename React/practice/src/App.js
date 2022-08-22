import './App.css';

const App = () => {

const address = {
  forename: "John",
  surname: "Smith",
  firstLine: "8 Lions head",
  city: "Manchester",
  postcode: "M1 1AA"

}
return (
   <div>
    <header className="App-Header"></header>
      <h2>forename - {address.forename}</h2>
      <h2>surname - {address.surname}</h2>
      <h2>Line 1 - {address.firstLine}</h2>
      <h2>city - {address.city}</h2>
      <h2>postcode - {address.postcode}</h2>
   </div>
);
}
export default App;

