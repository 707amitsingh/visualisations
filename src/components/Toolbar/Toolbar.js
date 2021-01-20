import React, { useState } from 'react'
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'

const Toolbar = ({ filters, setGravity, setDotSize, setFontSize, onNodeFilterSelect, size = '200px' }) => {
    const [currentFilter, setCurrentFilter] = useState(0)

    const handleNodeCountSelect = (value) => {
        setCurrentFilter(value)
        onNodeFilterSelect(value)
    }
    return <div className="relationalGraphToolbar" style={{ width: size }}>
        <div className="toolbarButtonContainer">
            <p className="mr-sm-2">Type Filter</p>
            <DropdownButton className="mb-sm-4" id="dropdown-basic-button" title={currentFilter ? currentFilter : "Filter "} variant="primary" onSelect={handleNodeCountSelect} >
                {[...filters.map((filter, i) => <div key={filter}>
                    <Dropdown.Item eventKey={filter}>{filter}</Dropdown.Item>
                    <Dropdown.Divider />
                    </div>), <Dropdown.Item eventKey='No filter'>NO FILTER</Dropdown.Item>]}
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