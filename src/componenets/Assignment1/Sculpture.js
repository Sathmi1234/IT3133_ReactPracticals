import {Button, Col, Container, Row, ButtonGroup } from "react-bootstrap";
import { sculptureList } from "./data";
import { useState } from "react";
import Title from "./Title";
import Image from "./Image";
import Artist from "./Artist";
import Description from "./Description";
import DarkMode from "./DarkMode";

export default function Sculpture(){
    const [index,setIndex]=useState(0);
    const [darkMode,setDarkMode]=useState(false)
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
    const firstEle=()=>{
        setIndex(0)
    }
    const lastEle=()=>{
        setIndex(sculptureList.length-1)
    }
    const theme=(isDark)=>{
        setDarkMode(isDark)
    }
    return(
        <div style={{
            backgroundColor: darkMode? "#121212":"#ffffff",
            color:darkMode?"#ffffff":"#000000",
            minHeight:"100vh"
        }}>
            <Container>
                <Row>
                    <Title title={sculptureList[index].name}/>
                </Row>
                <Row style={{ height: "400px" }}>
                    <Col xs={4}>
                        <Image url={sculptureList[index].url} alt={sculptureList[index].alt}/>
                    </Col>
                    <Col xs={6}>
                        <Artist artist={sculptureList[index].artist}/>
                        <Description description={sculptureList[index].description}/>
                    </Col>
                    <Col xs={2}>     
                        <DarkMode isDark={theme}/>
                    </Col>
                </Row>
                <Row>
                    <center>
                        <ButtonGroup aria-label="Basic example">
                            <Button onClick={prevEle} variant="primary">Previous</Button>
                            <Button onClick={firstEle} variant="secondary">First</Button>
                            <Button onClick={lastEle} variant="secondary">Last</Button>
                            <Button onClick={nextEle} variant="primary">Next</Button>
                        </ButtonGroup>
                    </center>
                </Row>
            </Container>
        </div>
    );
}