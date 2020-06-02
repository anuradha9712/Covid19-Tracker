import React from 'react';
import { Card,  CardTitle, CardText } from 'reactstrap';
import CountUp from 'react-countup';


const Display = ({name,number,color}) => {
  return (
    
        <Card body  color={color} className="text-center lesson-card">
          <CardTitle className="lesson-item">{name}</CardTitle>
          <CardText className="lesson-item">  
            <CountUp start={0} end={number} duration={2.5} separator="," />
          </CardText>
        </Card>
     
  );
};

export default Display;