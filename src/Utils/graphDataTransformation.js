const transformGraphData = (rawData) => {
    const graphData = { nodes: [], links: [] }
    const filterData = []
    if(rawData && rawData.items && rawData.items.length > 0){
        rawData.items.forEach(data => {
            if (data && data.relationships) {
                const parentNodeName = data.name
                const parentNode = {
                    id: parentNodeName,
                    level: 1,
                    color: '#FF6700'
                }
                graphData.nodes.push(parentNode)
        
                data.relationships.forEach(entity => {
                        let entityNodes = []
                        if(!filterData.includes(entity.id)){
                            filterData.push(entity.id.split('.')[1])
                        }
                        const entityLinks = entity.relationshipEntityList.map(relation => {
                            const link = {
                                id: relation.id,
                                source: entity.direction === 'OUT' ? parentNodeName : relation.name, // node's Id
                                target: entity.direction === 'OUT' ? relation.name : parentNodeName,
                                type: entity.id,
                                label: relation.type
                            }
                            const node = {
                                id: relation.name,
                                level: 2,
                                label: relation.id,
                                type: entity.id
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

    return { parsedData: graphData, filterData: filterData }
}

export default transformGraphData
