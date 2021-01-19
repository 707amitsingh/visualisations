import data from '../MockData/mockApiData.json'
// import data from '../MockData/reallyLargeApiMockData.json'


const transformGraphData = (childCount) => {
    console.log('>>>>>>>>>>>>>> CHILD_COUNT: ', childCount)
    const graphData = { nodes: [], links: [] }
    if (data && data.relationships) {
        const parentNodeName = data.name
        const parentNode = {
            id: parentNodeName,
            level: 1
        }
        graphData.nodes.push(parentNode)

        data.relationships.forEach(entity => {
            if (graphData.links.length < childCount) {
                console.log('>>>>>>>>>> LENGTH: ', graphData.links.length)
                let entityNodes = []
                const entityLinks = entity.relationshipEntityList.map(relation => {
                    const link = {
                        id: relation.id,
                        source: entity.direction === 'OUT' ? parentNodeName : relation.name, // node's Id
                        target: entity.direction === 'OUT' ? relation.name : parentNodeName,
                        type: relation.type,
                        label: entity.name
                    }
                    const node = {
                        id: relation.name,
                        level: 2
                    }
                    entityNodes = [...entityNodes, node]
                    return link
                })
                graphData.links = [...graphData.links, ...entityLinks]
                graphData.nodes = [...graphData.nodes, ...entityNodes]
            }
        })
    }
    if(childCount < graphData.nodes.length) {
        graphData.links = graphData.links.filter((_, i) => i < childCount)
        graphData.nodes = graphData.nodes.filter((_, i) => i <= childCount)
    }
    return graphData
}

export default transformGraphData
