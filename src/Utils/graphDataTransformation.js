import data from '../MockData/mockApiData.json'

const graphData = { nodes: [], links: [] }

const transformGraphData = (childCount) => {
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
    return graphData
}

export default transformGraphData
