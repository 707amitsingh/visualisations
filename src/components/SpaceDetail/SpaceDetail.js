import React, { useEffect, useState } from 'react';
import './SpaceDetail.css';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';

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
            <Container>
                <Row>
                    {data[0]["questions"].map(elem => (
                        <Col sm={4}>
                            {' '}<Card>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {elem.question}
                                        </p>
                                        <footer >
                                            <Badge variant="primary">Someone value</Badge>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>{' '}
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default SpaceDetail;