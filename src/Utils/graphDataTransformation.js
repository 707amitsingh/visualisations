const transformGraphData = (rawData) => {
    const graphData = { nodes: [], links: [] }
    const filterData = []
    const directions = []
    if (rawData && rawData.items && rawData.items.length > 0) {
        rawData.items.forEach(data => {
            if (data && data.relationships) {
                const parentNodeName = data.type === 'iot.Asset' ? `${data.type.split('.')[1].toUpperCase()} ${data.name}` : data.name
                const parentNode = {
                    id: parentNodeName,
                    level: 1,
                    color: '#FF6700'
                }
                graphData.nodes.push(parentNode)

                data.relationships.forEach(entity => {
                    let entityNodes = []

                    // generate filter data
                    if (!filterData.includes(entity.id)) {
                        filterData.push(entity.id.split('.')[1])
                    }
                    if (entity.direction && !directions.includes(entity.direction)) {
                        directions.push(entity.direction)
                    }

                    const entityLinks = entity.relationshipEntityList.map(relation => {
                        const link = {
                            id: relation.id,
                            source: entity.direction === 'OUT' ? parentNodeName : (relation.type === 'iot.Asset' ? `${relation.type.split('.')[1].toUpperCase()} ${relation.name}` : relation.name), // node's Id
                            target: entity.direction === 'OUT' ? (relation.type === 'iot.Asset' ? `${relation.type.split('.')[1].toUpperCase()} ${relation.name}` : relation.name) : parentNodeName,
                            type: entity.id,
                            label: relation.type,
                            directed: entity.direction
                        }
                        const node = {
                            id: relation.type === 'iot.Asset' ? `${relation.type.split('.')[1].toUpperCase()} ${relation.name}` : relation.name,
                            level: 2,
                            label: relation.id,
                            type: entity.id,
                            directed: entity.direction
                        }
                        entityNodes = [...entityNodes, node]
                        return link
                    })
                    graphData.links = [...graphData.links, ...entityLinks]
                    graphData.nodes = [...graphData.nodes, ...entityNodes]
                })
            }
        })
    }

    return { parsedData: graphData, filterData: tranformFilterData(filterData, directions) }
}

const tranformFilterData = (filterData, directions) => {
    const newFilterData = []
    filterData.forEach(filter => {
        directions.forEach(direction => {
            newFilterData.push(`${direction}-${filter}`)
        })
    })
    newFilterData.forEach((filter, i) => {
        if(filter in filterMapping) {
            newFilterData[i] = filterMapping[filter]
        }
    })
    return newFilterData
}

export const filterMapping = {
    "OUT-IS_CONTAINED_BY_SPATIAL_ELEMENT": '1',
    "IN-IS_CONTAINED_BY_SPATIAL_ELEMENT": '2',
    "OUT-SUPPLIES_SPATIAL_ELEMENT": '3',
    "IN-SUPPLIES_SPATIAL_ELEMENT": '4',
    "OUT-IS_LOCATED_IN": '5',
    "IN-IS_LOCATED_IN": '6',
    "OUT-SUPPLIES_ASSET": '7',
    "IN-SUPPLIES_ASSET": '8'
}


export default transformGraphData
