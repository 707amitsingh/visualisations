import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Graph } from "react-d3-graph";
import './RelationalGraph.css'


const RelationalGraph = ({ data, config }) => {

    const [gravity, setGravity] = useState(-500)
    const [dotSize, setDotSize] = useState(600)
    const [fontSize, setFontSize] = useState(10)
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
    config["width"] = windowSize - 20
    config["node"]["size"] = dotSize
    config["node"]["fontSize"] = fontSize

    return (
        <div className="">
            <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={config}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
            />
            <div className="relationalGraphToolbar">
                <div className="toolbarButtons">
                    <span className="mr-sm-2">Zoom</span>
                    <ButtonGroup className="mr-sm-4">
                        <Button variant="primary" onClick={() => setGravity(gravity - 50)}>+</Button>
                        <Button variant="secondary" onClick={() => setGravity(gravity + 50)}>-</Button>
                    </ButtonGroup>

                    <span className="mr-sm-2">Dot Size</span>
                    <ButtonGroup className="mr-sm-4">
                        <Button variant="primary" onClick={() => setDotSize(dotSize + 100)}>+</Button>
                        <Button variant="secondary" onClick={() => setDotSize(dotSize - 100)}>-</Button>
                    </ButtonGroup>

                    <span className="mr-sm-2">Font Size</span>
                    <ButtonGroup>
                        <Button variant="primary" onClick={() => setFontSize(fontSize + 2)}>+</Button>
                        <Button variant="secondary" onClick={() => setFontSize(fontSize - 2)}>-</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>

    )
}

export default RelationalGraph