import React, { useState } from 'react'
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'

const Toolbar = ({ setGravity, setDotSize, setFontSize, onNodeCountSelect, size = '200px' }) => {
    const [nodesCount, setNodesCount] = useState(0)

    const handleNodeCountSelect = (value) => {
        setNodesCount(+value ? +value : 'all')
        onNodeCountSelect(+value)
    }
    return <div className="relationalGraphToolbar" style={{ width: size }}>
        <div className="toolbarButtonContainer">
            <p className="mr-sm-2">Number of Nodes</p>
            <DropdownButton className="mb-sm-4" id="dropdown-basic-button" title={nodesCount ? `Nodes: ${nodesCount}` : "Node count "} variant="primary" onSelect={handleNodeCountSelect} >
                <Dropdown.Item eventKey="10">10 nodes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="15">15 nodes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="20">20 nodes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="0">All nodes</Dropdown.Item>
            </DropdownButton>
            <p className="mr-sm-2">Zoom</p>
            <ButtonGroup className="mb-sm-4">
                <Button variant="info" onClick={() => setGravity(-50)}>+</Button>
                <Button variant="dark" onClick={() => setGravity(+50)}>-</Button>
            </ButtonGroup>

            <p className="mr-sm-2">Dot Size</p>
            <ButtonGroup className="mb-sm-4">
                <Button variant="info" onClick={() => setDotSize(+100)}>+</Button>
                <Button variant="dark" onClick={() => setDotSize(-100)}>-</Button>
            </ButtonGroup>
            <p className="mr-sm-2">Font Size</p>
            <ButtonGroup className="mb-sm-4">
                <Button variant="info" onClick={() => setFontSize(+2)}>+</Button>
                <Button variant="dark" onClick={() => setFontSize(-2)}>-</Button>
            </ButtonGroup>
        </div>
    </div>
}

export default Toolbar