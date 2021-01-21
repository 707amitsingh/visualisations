import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import './EmptyDataScreen.css'

const EmptyDataScreen = ({ loading }) => {

    const renderComponet = () => {
        if (loading) {
            return <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Loading...</Card.Title>
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="dark" />
                </Card.Body>
            </Card>
        }
        return <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    Endless Delve
                </Card.Text>
            </Card.Body>
        </Card>
    }

    return <div className="emptyDataScreen">
        {renderComponet()}
    </div>
}

export default EmptyDataScreen