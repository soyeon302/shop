import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
 import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Data from './components/data' 
import { useState } from "react";

function App() {

  let [shoes, shoe변경] = useState(Data);


  return (
    <div className="App">
      <NavBar />
      <Container className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
     </Container>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          {
            shoes.map((a,i) => {
              return <Card shoes={shoes[i]} i={i} />
            })
          }
 
            <h4>White and Black</h4>
 
            <p>상품정보</p>
          </div>
 
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
 
            <h4>Red Knit</h4>
 
            <p>상품정보</p>
          </div>
 
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
 
            <h4>Grey Yordan</h4>
 
            <p>상품정보</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;