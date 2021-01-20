import React, { useEffect, useState } from 'react';
import './SpaceDetail.css';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { Bricks, Thermometer, TypeH3 } from 'react-bootstrap-icons';

const SpaceDetail = ({ data }) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowSize])

    return (
        <div>
            <Container><br />
                <Row>
                    {data[0]["questions"].map((elem, index) => (
                        <Col sm={4} key={index}>
                            <Card>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {elem.question}
                                        </p>
                                        <footer >
                                            <Badge variant="primary">-- value</Badge>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {data[0]["questions"].map((elem, index) => (
                        <Col sm={4} key={index}>
                            <div className="info-box l-bg-green order-info-box">
                                <div className="info-box-block">
                                    <h5 className="m-b-20">{elem.question}</h5>
                                    <h3 className="text-right">
                                        <i className="text-left"><Thermometer></Thermometer></i><span >358</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default SpaceDetail;