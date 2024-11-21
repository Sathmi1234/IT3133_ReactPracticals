import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Books from './componenets/Day3_15_10/Books';
import Mycont from './componenets/Day3_15_10/Mycont';
import Student from './componenets/Day3_15_10/Student';

function App() {
  const sum=(num1,num2)=>{
    let s=num1+num2;
    return s;
  }

  const books=[
    {id:"uov125",name:"Fundamentals of Programming",pages:200},
    {id:"uov126",name:"Javascript for beginners",pages:500},
    {id:"uov127",name:"Knowledge Base: Guide Book",pages:400},
    {id:"uov128",name:"Newsletter Issue 2",pages:100},
    {id:"uov129",name:"Modern Web app",pages:150},
  ]

  const selectedBook=(book)=>{
    console.log(`Selected book is ${book.name} which has ${book.pages} pages`)
  }

  return (
    <Container>
      <Row>
        <Col >
          <Mycont msg="Hello React!" dosum={sum}/>
        </Col>
        <Col>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <Books bdata={books} onSelectBook={selectedBook}/>        
        </Col>
        <Col>
        <Student regno="2020ict117" name="Sathmi" age="22" degree="IT"/>
        </Col>
      </Row>
      {
        /*
        books.map(item=><Books book={item} />)
        */
      }

    </Container>
  );
}

export default App;