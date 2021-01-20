import React, { useEffect, useState } from 'react';
import './SpaceDetail.css';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { House, Bricks, Thermometer, Soundwave, Forward } from 'react-bootstrap-icons';
import { getNodes } from '../../Utils/findApiHelper';

const SpaceDetail = ({ data }) => {

    const [apiRes1, setApiRes1] = useState()
    const [apiRes2, setApiRes2] = useState()
    const [apiRes3, setApiRes3] = useState()
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    const config1 = {
        resource: "hierarchy",
        page: {
            "pageSize": 1500,
            "page": 1
        },
        q: {
            op: "and",
            criteria: [
                {
                    op: "eq",
                    field: "type",
                    value: "iot.SpatialElement"
                },
                {
                    op: "eq",
                    field: "name",
                    value: "GF_L02_CAM16"
                }
            ]
        }
    }

    const config2 = {
        resource: "hierarchy",
        page: {
            "pageSize": 1500,
            "page": 1
        },
        q: {
            op: "and",
            criteria: [
                {
                    op: "eq",
                    field: "relationships.id",
                    value: "iot.SUPPLIES_SPATIAL_ELEMENT"
                },
                {
                    op: "eq",
                    field: "relationships.relationshipEntityList.type",
                    value: "iot.SpatialElement"
                },
                {
                    op: "eq",
                    field: "relationships.relationshipEntityList.id",
                    value: "Y3VzdG9tZXIuaTY0MzYxNDAzLTFiMWQtNDZhZi05YzQ4LWI3ZjdmMTUxZGQzYg=="
                },
                {
                    op: "eq",
                    field: "points.role",
                    value: "Supply Air Temperature Setpoint"
                }
            ]
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowSize])

    const getCard1Data = () => {
        getNodes(config1, handleCard1Response);
    }

    const getCard1Api2Data = () => {
        getNodes(config2, handleCard2Response);
    }

    const handleCard1Response = (res) => {
        setApiRes1(res);
        getCard1Api2Data();
    }

    const handleCard2Response = (res) => {
        data[0]["questions"][0].value = res.items[0].points.find(x => x.role == "Supply Air Temperature Setpoint").name
        setApiRes2(res);
    }

    const getCardIcon = (room) => {
        if (room.id == "1") {
            return <House></House>
        } else if (room.id == "2") {
            return <Soundwave></Soundwave>
        } else if (room.id == "3") {
            return <Thermometer></Thermometer>
        }
        return (<Forward></Forward>);
    }
    useEffect(() => {
        getCard1Data()
    }, [])

    return (
        <div>
            <Container><br />
                <Row>
                    {data[0]["questions"].filter(x => x.value !== "").map((elem, index) => (
                        <Col sm={4} key={index}>
                            <Card className="info-box l-bg-green order-info-box">
                                <Card.Body className="info-box-block">
                                    <h5 className="m-b-20">{elem.question}</h5>
                                    <h6 className="text-left">
                                        <i className="m-r-5">
                                            {getCardIcon(elem)}
                                        </i><span >{elem.value}</span>
                                    </h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* <Row>
                    {data[0]["questions"].map((elem, index) => (
                        <Col sm={4} key={index}>
                            <div className="info-box l-bg-green order-info-box">
                                <div className="info-box-block">
                                    <h5 className="m-b-20">{elem.question}</h5>
                                    <h3 className="text-left">
                                        <i className="m-r-5">
                                            {getCardIcon(elem)}
                                        </i><span >358</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row> */}
            </Container>

        </div>
    )

}

export default SpaceDetail;