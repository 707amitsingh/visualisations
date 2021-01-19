import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Graph } from "react-d3-graph";
import './RelationalGraph.css'


const RelationalGraph = ({ data, config }) => {

    const [gravity, setGravity] = useState(-250)
    const [dotSize, setDotSize] = useState(300)
    const [fontSize, setFontSize] = useState(12)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const onClickNode = function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowSize])

    config["d3"]["gravity"] = gravity
    config["width"] = windowSize*(0.85) - 10
    config["node"]["size"] = dotSize
    config["node"]["fontSize"] = fontSize

    return (
        <div className="graphDashboard">
            <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={config}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
            />
            <div className="relationalGraphToolbar" style={{width: windowSize*(0.15)}}>
                <div className="toolbarButtonContainer">
                    <div className="">
                    <p className="mr-sm-2">Zoom</p>
                    <ButtonGroup className="mb-sm-4">
                        <Button variant="info" onClick={() => setGravity(gravity - 50)}>+</Button>
                        <Button variant="dark" onClick={() => setGravity(gravity + 50)}>-</Button>
                    </ButtonGroup>
                    </div>
                    <div className="">
                    <p className="mr-sm-2">Dot Size</p>
                    <ButtonGroup className="mb-sm-4">
                        <Button variant="info" onClick={() => setDotSize(dotSize + 100)}>+</Button>
                        <Button variant="dark" onClick={() => setDotSize(dotSize - 100)}>-</Button>
                    </ButtonGroup>
                    </div>
                    <div className="">
                    <p className="mr-sm-2">Font Size</p>
                    <ButtonGroup className="mb-sm-4">
                        <Button variant="info" onClick={() => setFontSize(fontSize + 2)}>+</Button>
                        <Button variant="dark" onClick={() => setFontSize(fontSize - 2)}>-</Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RelationalGraph