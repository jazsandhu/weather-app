import React from 'react';
import { Col, Card } from 'react-bootstrap';
import GetDay from './GetDay.js';
import './FiveDayForcast.css';

function ForcastCard(forcast) {
    return (
        <Col xs={12} sm={6} lg={true} className="forcast-col">
            <Card className="forcast-card" bg="light">
                <Card.Body>
                    <Card.Title><GetDay date={forcast.weather?.datetime} /></Card.Title>
                    <Card.Text>{forcast.weather?.datetime}</Card.Text>
                    <img src={`https://www.weatherbit.io/static/img/icons/${forcast.weather?.weather.icon}.png`} alt="" />
                    <Card.Text>
                        {forcast.weather?.weather.description}
                    </Card.Text>
                    <Card.Text>
                        Max Temp: {Math.round(forcast.weather?.app_max_temp)}ºc<br />
                        Min Temp: {Math.round(forcast.weather?.app_min_temp)}ºc
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ForcastCard
