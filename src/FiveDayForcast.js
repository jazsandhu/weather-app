import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ForcastCard from './ForcastCard.js'
import './FiveDayForcast.css';

function FiveDayForcast(weather) {
    return (
        <div>
            {(typeof weather.currentWeather?.name !== "undefined") ? ( /* return weather result on valid search */
                <div>
                    <hr />
                    <Container fluid="md">
                        <Row className="justify-content-center forcast-title">
                            <p>5 Day Forcast</p>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} lg={true} className="forcast-col">
                                <Card className="forcast-card" bg="info">
                                    <Card.Body>
                                        <Card.Title>Today</Card.Title>
                                        <Card.Text>{weather.forcast[0]?.datetime}</Card.Text>
                                        <img src={"https://www.weatherbit.io/static/img/icons/" + weather.forcast[0]?.weather?.icon + ".png"} alt="" />
                                        <Card.Text>
                                            {weather.forcast[0]?.weather?.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Max Temp: {Math.round(weather.forcast[0]?.app_max_temp)}ºc<br />
                                            Min Temp: {Math.round(weather.forcast[0]?.app_min_temp)}ºc
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <ForcastCard weather={weather.forcast[1]} />
                            <ForcastCard weather={weather.forcast[2]} />
                            <ForcastCard weather={weather.forcast[3]} />
                            <ForcastCard weather={weather.forcast[4]} />
                        </Row>
                    </Container>
                </div>
            ) : ("") /* return empty on non-valid search */
            }
        </div>
    )
}

export default FiveDayForcast
