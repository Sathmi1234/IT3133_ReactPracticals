import {sculptureList} from './data';
import { useState } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
export default function Artist(){
    const [index,setIndex]=useState(0);
    const nextEle=()=>{
        if(index>(sculptureList.length-2)){
          setIndex(0);
        }else{
          setIndex(index+1);
        }
    }
    const prevEle=()=>{
        if(index<1){
          setIndex(sculptureList.length-1)
        }else{
          setIndex(index-1);
        }
    }
    return(
        <Container fluid>
          <Row>
            <Col xs={3}>
              <center>
              <button onClick={prevEle}>Previous</button>
              </center>
            </Col>
            <Col xs={6}>
              <center>
              {sculptureList[index].name}<br/> 
              {sculptureList[index].artist} <br/>
              {sculptureList[index].description} <br/>
              <img src={sculptureList[index].url} alt={sculptureList[index].alt}/>
              </center>
            </Col>
            <Col xs={3}>
              <center>
              <button onClick={nextEle}>Next</button>
              </center>
            </Col>
          </Row>
        </Container>
    );

}