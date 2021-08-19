
import NavBar from './Components/NavBar';
import Video from "./Components/Video"
import Comments from './Components/Comments';
import './App.css';
import Sugg from "./Components/Sugg"
import { Row,Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavBar/>

     
      <Row>
      <Col sm={8}><Video/> <Comments/></Col>
      <Col sm={4}><Sugg/></Col>
      </Row>
      
      
     
    </div>
  );
}

export default App;
