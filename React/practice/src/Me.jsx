const me = () => {

const info = {
    forename: "Brendon",
    surname: "Whitfield",
    city: "Bangor",
    age: "22",
  
  }
  return(
<section className="App-header">
            
<a
  className="App-link"
  href="https://github.com/brendonwhitfield"
  target="_blank"
  rel="noopener noreferrer"
>
  My GitHub 
</a>
<p>
    <ul>
      <li> name = {info.forename} {info.surname}</li>
      <li> city = {info.city}</li>
      <li> age = {info.age} </li>
    </ul>
  </p>
</section>
  );
  }

  export default me;