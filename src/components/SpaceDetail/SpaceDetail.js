import React, { useEffect, useState } from 'react';
import './SpaceDetail.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { House, Thermometer, Soundwave, Forward } from 'react-bootstrap-icons';
import { getNodes } from '../../Utils/findApiHelper';

const SpaceDetail = ({ data, spaceName }) => {
    const [apiRes1, setApiRes1] = useState()
    const [apiRes2, setApiRes2] = useState()
    const [apiRes3, setApiRes3] = useState()
    const [apiRes4, setApiRes4] = useState()
    const [apiRes5, setApiRes5] = useState()
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [cardValues, setCardValues] = useState()
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
                    value: spaceName
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
                    value: ""
                },
                {
                    op: "eq",
                    field: "points.role",
                    value: "Supply Air Temperature Setpoint"
                }
            ]
        }
    }

    const config3 = {
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
                    value: spaceName
                },
                {
                    op: "eq",
                    field: "relationships.id",
                    value: "iot.SUPPLIES_SPATIAL_ELEMENT"
                },
                {
                    op: "eq",
                    field: "relationships.relationshipEntityList.assetType",
                    value: "Variable Air Volume"
                }
            ]
        }
    }

    const config4 = {
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
                    value: "iot.Asset"
                },
                {
                    op: "eq",
                    field: "relationships.relationshipEntityList.id",
                    value: "Y3VzdG9tZXIuaThiNjRjZDY0LWJlZjctNDMwMi05MzQxLWJlNjg0M2ExMDYzOA=="
                },
                {
                    op: "eq",
                    field: "relationships.id",
                    value: "iot.SUPPLIES_ASSET"
                },
                {
                    op: "eq",
                    field: "relationships.direction",
                    value: "OUT"
                },
                {
                    op: "eq",
                    field: "assetType",
                    value: "Air Handling Unit"
                }
            ]
        }
    }

    const config5 = {
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
                    value: "iot.Asset"
                },
                {
                    op: "eq",
                    field: "relationships.relationshipEntityList.id",
                    value: "OWI2YjRjMTEtYWYzMy00OWE2LWI3NzMtZDFhNGVlMWQzYmRi"
                },
                {
                    op: "eq",
                    field: "relationships.id",
                    value: "iot.SUPPLIES_ASSET"
                },
                {
                    op: "eq",
                    field: "relationships.direction",
                    value: "OUT"
                },
                {
                    op: "eq",
                    field: "assetType",
                    value: "Chiller"
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

    const resetValue = () => {
        data[0]["questions"][0].value = "";
        data[0]["questions"][1].value = "";
        data[0]["questions"][2].value = "";
        data[0]["questions"][5].value = "";
        setCardValues(data);
    }
    const getCard1Data = () => {
        data[0]["questions"][0].question = `What is the temperature point name in ${spaceName} `;
        data[0]["questions"][1].question = `Which VAV is serving Air to ${spaceName}`;
        getNodes(config1, handleCard1Response);
    }

    const getCard1Api2Data = (res) => {
        config2.q.criteria.find(x => x.field == "relationships.relationshipEntityList.id").value = res.items[0].id;
        getNodes(config2, handleApi2Response);
    }

    const getApi3Data = (res) => {
        const _data = res.items[0]
        data[0]["questions"][2].question = `Which AHU is serving cooled Air to ${_data.name}`;
        getNodes(config3, handleApi3Response);
    }

    const getApi4Data = (res) => {
        const _data = res.items[0].relationships.find(x => x.direction === "IN" && x.name === "iot.SUPPLIES_SPATIAL_ELEMENT").relationshipEntityList.find(x => x.assetType === "Variable Air Volume");
        config4.q.criteria.find(x => x.field == "relationships.relationshipEntityList.id").value = _data.id
        getNodes(config4, handleApi4Response);
    }

    const getApi5Data = (res) => {
        config5.q.criteria.find(x => x.field == "relationships.relationshipEntityList.id").value = res.items[0].id
        getNodes(config5, handleApi5Response);
    }

    const handleCard1Response = (res) => {
        if (res.items[0]) {
            setApiRes1(res);
            getCard1Api2Data(res);
        } else {
            resetValue();
        }
    }

    const handleApi2Response = (res) => {
        data[0]["questions"][0].value = res.items[0].points.find(x => x.role == "Supply Air Temperature Setpoint").name
        setApiRes2(res);
        getApi3Data(res);
    }

    const handleApi3Response = (res) => {
        data[0]["questions"][1].value = res.items[0].relationships.find(x => x.name == "iot.SUPPLIES_SPATIAL_ELEMENT").relationshipEntityList.find(x => x.assetType == "Variable Air Volume").name
        setApiRes3(res);
        getApi4Data(res);
    }

    const handleApi4Response = (res) => {
        data[0]["questions"][5].question = `Which chiller is serving ${res.items[0].name}`;
        data[0]["questions"][2].value = res.items[0].name
        setApiRes4(res);
        getApi5Data(res);
    }

    const handleApi5Response = (res) => {
        data[0]["questions"][5].value = res.items[0].name
        setApiRes5(res);
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
        if (spaceName) {
            resetValue();
            getCard1Data()
        }
    }, [spaceName])


    return (
        <div>
            <Container><br />
                <Row>
                    {data[0]["questions"].filter(x => x.value !== "").map((elem, index) => (
                        <Col sm={6} key={index}>
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
            </Container>

        </div>
    )

}

export default SpaceDetail;