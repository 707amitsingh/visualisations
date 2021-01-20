import React, { useEffect, useState } from 'react';
import { Graph } from "react-d3-graph";
import Toolbar from '../Toolbar/Toolbar'
import './RelationalGraph.css'


const RelationalGraph = ({ data, config, filters, onNodeFilterSelect, onClickNode }) => {

    const [gravity, setGravity] = useState(-250)
    const [dotSize, setDotSize] = useState(300)
    const [fontSize, setFontSize] = useState(12)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    
    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    const handleGravityChange = (change) => {
        if(gravity + change < -100){
            setGravity(gravity + change)
        }
    }

    const handleDotSizeChange = (change) => {
        if(dotSize + change > 50) {
            setDotSize(dotSize + change)
        }
    }

    const handleFontSizeChange = (change) => {
        if(fontSize + change > 6) {
            setFontSize(fontSize + change)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowSize])

    config["d3"]["gravity"] = gravity
    config["width"] = windowSize*(0.85) - 20
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
            <Toolbar
            filters={filters}
            setGravity={handleGravityChange}
            setDotSize={handleDotSizeChange}
            setFontSize={handleFontSizeChange}
            onNodeFilterSelect={onNodeFilterSelect}
            size={windowSize*(0.15)}
            />
        </div>

    )
}

export default RelationalGraph