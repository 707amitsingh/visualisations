const chillerSvg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHBDfGuds05HBovlOJ9hXKnlW9L7aWrq0fw&usqp=CAU"
const ahu1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAdLz///8AcrsAaLcAa7gAargAbbkAcLoAZ7cAdb3r8/n4/P7d6vTm8Pfx9/va6PPF2uy50uimxuKGstiNttqWvN1lns8rhMMggMEVe7+vy+Rinc47icXR4vCdwN99rNVSlMp3qdRWlsvA1upFj8h9qNOtx+KWt9rM3OxrpNKGrdVXlMoPfcDAv9TUAAAQoklEQVR4nOWdDbuiLBrHFRG0svcyq5Onl5mtmfn+n29BtBRQAbE8u/9rr32enZ3MX8AN3C/guL1rGs0Xp3W6vR3jXZI4SbKLj7dtuj4t5tG0/693+nz46H46H0PkQYgwxgA45D+Ok/2T/G8EoYeS43l5H/X5En0RjharIwp8QuY0i5D6AbqtFn1h9kE42j8SnzQbaIF7CZAG9ZPHvg9K24TjeRoHsK3hapoTBvFqPrb8RlYJx4sD8jWaTtaYPjosrEJaJLweEOyEV0BCdLjaey1bhJM/uFvrVSF9vJpYejM7hPujh2zh5ZDIO+6tvJsFwtEaQbt4OaSP1haMa2fCyQNabr4SI4KPzp21I+HsEpjNDKrCwWX2QcLZxeuXL2P0ujF2IIz6br8nY3CJPkA4Tt/Qfk9GLzVeBZgSLjF6Gx8Vwsu3En7tepkfmgTgzmw4GhGm3rv5MkYvfRPh3HlvB30JOfN3ED68D/FReY/eCb/CTzUgEwq/+iVcf2QElgW8dY+E0xh+mI8KHrU8dDqE81a30nuEsY7B0SBcB5/uoYVAsOmD8Nv/NFhJ/rd1wunuszaUF9qpDkZFwtlAhuBLGCsu4tQIr/5QhuBLwFdzyCkRLgdjY8oCgdJ2Q4XwFHwapkbByQ7h5pML0WZ5CrNGO+F6uIAEsX0J10o4aEAVxDbCAXdRptaO2kK4HDogQWyxqM2E+6Fa0bKC5vhGI+H9JwASxLsp4WSAKxmZAGwKbjQQTp2fAUgQnYZleANhPLTFdr1wbEJ4GdZ2qVmofr9YS7gZ0oa3XX7ttFhHOP8ZZvSloM53U0M4tZZ18C4BXGNtagh/kJUpVGdt5ISrIfhFdQVX6oT34a9GZfKkaxsZ4Tj8aYOQCYSyQLGMcPuTZsKykCwyJSG8/sw+SuVJ3G8SwreYUVCR5M9wIb3HqhCedfooygSf8p//Ushjyv9J/gBC8ons3SlamClh2lHFcXykuhF9f39fYh1CdG4n/NLpo3hzOi2Xv3//3lMtMl2J5lT3L6oZ0WQSRdGIalrSOJdk7JT1Hy2r4AkBVIEw0bGj0HZCr0RrLUKQtBEuteZ6/w3VBHpt6EDebcMRjvXWowMkBJjrVxxhqve4ARI6iFu8VQkjzanQ67UWxIzQ8atpflXCg+Zc+A7CjS4hPtQTznS3vYMkdIKK661CeNFdzgyTEF/qCGfaC9J3EJ709wFeOQBeJvzWXpF6HXJ3eySsNGKJUHsUDpbQCUqNWCLc6m8q/IES4q2McGTgIB1qGzrwZSBehHor3JzQVnGSbUL0Cg2/CE0ytwdLCJBI+NvEgeh1rGdR0dLIawR/C4RHE//acAnBkSecGLmf3kJo5p1+DqCCMDXyP4k+g8EQ4qJ0oSA0i8T4byDcmxECXCVcmD1mwIQOXFQIdTeGP4Cw2CYywrFhGajfmOfxWUKAxiVCw0466DYsuikjNOykjm9Qh6Qr01+/WH5nhKaddNiEeTfNCOemeRdvITROCmFvlxGaTfdEcMhtmE/6GeHONOb7DsKrMSHYFYSRce4MtHhCh31CJxjlhEYbp59AmG2hKKGBg+aNhHdzwmy+oISJ8SNehOOSptPpaBQRTSYTGiDNIqVf93sWN53TCOp1sVjQmOqS6nQ6bYjWRCuiPynRL6rHY7vdHm4dEkMSRhiZ/0ggTMIwP7kLQRrSDgR5hnp+0Ofi5r56l4NRRqhujlE5NO8Xr1GOzReh+aQcmo/50PzlcjgcttvH43E+/0r/EK0zbTKRNj1ljVtEzrOw+Z2IdYbJQxmRLtwcjdkQ77+K0PykU2i+mzRMD15lhOoemvANAdFWzTTKzKi3hhCqr4pw+IZITIumQMfy+JRQJ+6LwccR/2lNbV5ECLVm1MZWLE8UEZsonjMFVTZT5PPEPp8nnhMFmymIfv06n+k8QYzR5ULsErFOxEjFeThJMz5GpjNHMwJZII4SajKdfJ6Az2niaeKf/1KIz5pConCdAM5NwFlzo4E2hFBzRVMgRgBXktJaP8fRaH0pQCwEdNL16pJVjePGmmuGF6LOB3Gaz3R5mthS61vzNPWr9hYBxIRQO122MDeRTk2Nz3nHtVKT8vK0mX7wCISuM9Vfs5m0Iu+z0ikGgKn2R16fnTomAQuMc3OjjsgTarQhys3ozmQL5E2cucm6W78Vec+qOmFRZfBtFmWbO3ujDxZjUbkVBULVDwLA5onUbAcE945RiLXUigS2nLEMHAeUJrLn3CAhxNVdEZ08CQWmZ9GWJsy8ttC0XBednJXhBv+JGNNd0d+/f+mWCIAEgFu+LyIb2dVqvf4PmSQ2WCREqzyZON8W0Q3LFeEzRkuyLBqNio1L9teNy7Dwyvll6sKQLOAmPrzG5UyPp+VEIiGUlO+mCLpHfBP+3LyaFaeOuZNGRDwj7C6hJAVlJBI6EsIxRqm7h0L+w9S8xAVvnQ5uEH6nMUY0e9VH4sFxYhu6oYRw6dMUJCw8oEOdGbg5Wsn+PGK1FffQn9CehoQ9/hgL/n8Z4Q7TUtA/KA/fZnsVMhYPHWp4wLETITF882JLtNgv4mwERT5+nNiWiOyHqOOM7IaA4B0PQZztiuJ4t/v3L0nIXgWwI2ciH1QdWZ1KXGLH2KOfCeS7oey/AYvYXTAWNkSiZ5UMLYwrNTPUiZX9XzeLVTtg55g7S8Wnsd4lre2TEQpC7LyZq8USZJA4ob2nFQkesm5R5A00EQKYe7osvpPNFnzlD8ni0r4CIS6K6/QTn5tk7/d6JVpJ1pwqbfjMsBpZLNJNHK06p0a9zL8kkVMgFHsPeJUqm+YViCLjsJstLT/rVY4zEm2NMPuJhKW/crdma4gt7TQfloXPr9cXl4LthM80LSprvzvhs0ZYzlMUixjbCSv1SobpeqLImqZLeK7yqF35/YVYSDthZcE+ttVNybrUfG9RVbXuT0gREQj5flgtdHHPll6L7C2M94dVAVSNS/FNJBQ+8oTc0ly/fkcu/Mt4j88/idv38pM2aiPkq1uPlt5rZeqn4SV4C7luKhByrnbEH4G4tzMS0cnQ1yZIKDDmBlILId/JiewcwwX3Zv5SQUIT8Knxwl+oEmLxvIeVlZ8ezo183qLEJnD/VhqxhVDm27Hy03sTk7iFKHCbZIHQbNKfsIMHVjqEgAZCb7cj9YqM6ZafBidtCE4NYk8ygSwUGmQGdRNk235uHPKE3JqAuQJYfWtIP6oVu6t/r9Agftgg/CcjlA0gxJ/FJc0AYSs/m24HGj+0t1PJl5bSIjiRUPa1zOdoVKAkFz5ox/EbxTCkqySBUOpuYms77YLrxjfSzMVoFntBaadQI2Sj9Y89wiwXw850kamhk6kRsj2mWbWaVFk+jUZOlMLz3BpPGeLP+5UmxrCgjL0dPsuJsjewWeHmVNoCaoRs8Te1dqJhntdmnKkve17dIUWKhP7I6nRBPbha+aUKz6ur4hEI5QaTucbVE0hblOeXRra6PfMYynfn/KkxNYTsrxmXOglvFHXN8+ael3Wxf9JhrUjIfKYmRwNIled5d8jVr4j5ospmAudBKbpk5aOe3wFL7qMRtNL3B9kmxdYGv8jVt+S6Y1NeqYfhB83RZinadz5yHdE8apqKMB6Xf2K2aLD0Rs96C/OamYrYbFha0YB/rpLKa44sCmxeTFdVELld657KYrN15d0EB5tclVHCBrMVZ+Kr7snOjMjiZ1UzGKoAVtOw2dJ0YqNb4dWT0Lj+sCzmi6oukHyVRuRmP/ar2NjTleoPbXR7PzMRM/630m3CYla1MEmXa0gt/GJ52IKfeGD7TTD8AiYPI647m9NyHbCFhVvwJf3lgeRAUa4Jha/OA+KdQ7eVWu7O3TQ/31bsC7DtChGJ1WQjsWvkolqP37Wb5jOfZFtROgpHqqmEI1/hdbwfpYikdDsXIxfIT7mTzavC5r4q6USVB1vPnV6KOxfD8GyT4o3Yw6TnnAunbVY0kqbfF8esHjog8mebdJr089vBas7nFXaGZdUEJ4rk9UuHCln+fJoO/qj8brBxXS/w6htxXLd08fPNVmr8WsIZQ+auby+PX9fm2wlbw9YmdF6rIdNL7cRzokxL1jHIQ6P1V5pIYoO5pg2TVHHH0Vdi66wv12RKBN53/vZNRkGSNMzUeAje86Yqk0vcZee1mZy5h1CRYdFsEjx5I46b65iCwkRNLoEuo/TMPe2IJPbP+ZuPj82/TjldSrUJieClsFFfF1+vi/mycxP13DUAeecibjsJ2z7pyypP2wuDcPLMf4hWwFOfs8tBc7PzS7H37/ScA5btN1lLwvRKWaTAK9nh+znxoBplzfmlalEtgGEQpq/ckuimspOTHXSq9LIoKadtTvbnOPB8mB9vUPchXL79SfEcYZAdDYGg58fnfeltxys1IyBpxI3auAdezKWIR/f9aX1+HC61KXm15wjXNyIGye64TU+Lr4pVHG+AqgEWky2UA/XA2/3mP5ypznFcfxZ07UiUlSjRwY/UDZxQDXXSMN0AwrPkZLi6kwQazvOu2yZCyW94vUAtA84XM+klkwDsJemcW+DWEDadyV73GT5lK9o/sMYZKrLvNfBqExN3TPez1ziRJFtTNZ6rX7MULhGOZ/tHAhWNdkXVvmOWD0QMuY/C4yHdLBfXqzwlr/luhJpZGK2j2X2x3Jy/d74HDXeSlfHfJTCRWXV6t40UsO1+i5qvxj496Qc1TEEKKh/narWSpaK2O0psZsnzKtWGWguBChKjQd3uCtJT8GxEm4VNVSncFaR335OWno3YXxOq3PdEFht9ff3zcjt5INyGlO7s6vHeNcycJ+anWbZJ8d61Hu/OY43YWxMiSaH8m+8/zBqxtyZUv/+wxzssvXkHv2Xrw5XvsOzxHlIQ9zfMde4h7fEuWX9uMQO4Ir27ZHu8D9hOhrpEmvcB/+/f6fx/cC+36alFH5LJ3eo/6ubqOivTQqh3yuQnVZwlpUvozuwUyPUuAJsug2lMWvohBrXWjLYTusufgBg0J8+1JJ51zGl5h7yW7MC21LrN0BG9tqSr1uTB9bARvaZcFjXCYSO2AyoQupvhmpugPblThXC4FrXFiqoTunvDtJ1+BQJp0M+I0L0PcHUDoNplU2qE7gQMbRmOgeLtkoqE7nQ3rM0U2qme8a9KSPaLvbniDeTX7wfNCd31YOwNCNqnQRNCd46HMRgx1rmESYfQHcVD6Kkw1rqgQYvQdVftGV49Cygs1LoQul/hZ20qCnUvJNQldN3HJ1finiwF0DahO/9YM6LQ4J43A0Kal/yJ0Qi8umxq+4TubPf2hSrwY7Prlc0IyXZDOSvRjhBQ2khYJHTHq25nNGsJeyvjW7KMCV03Omin0BvyBQdJivEbCMlwvLyhHbF36XS/eSdCwvjdczvi4Lvj/e0dCQnjVrMUQkMA+dvO99N3JiTr8TUyzchs5oNobeESNAuERPujRrmHGh7yjqbzQ1V2CF13kmKTxOEaPPKsVNEN0ypbhESLA7IBSfDQgT/9u4MsEpJVAIH0O0EC7BM8q3dgWiUkGs/TXWBoeDAMdkLJQWfZJqSK9tuEZoVr3KaJEYTJdt9h6VKrPgipRovVEXkUs5kTUDgPHVeLvm7H7IswUzQ/PeIQsjR/yprhApDfIExPkQrjx2neR9M91Ssh03QyX5zW6fZ2jHdJ4iTJLj7etun6tJhHb7ic9r91Bwti+eUOigAAAABJRU5ErkJggg=="
const siteSvg = "https://img.icons8.com/plasticine/2x/worldwide-location.png"
const gatewaySvg = "data:image/png;base64,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"
const vavSvg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRXlcuy4xuBYG9oXtNuP1fXExqistG3-aVQ&usqp=CAU"

const transformGraphData = (rawData) => {
    const graphData = { nodes: [], links: [] }
    const filterData = []
    if (rawData && rawData.items && rawData.items.length > 0) {
        rawData.items.forEach(data => {
            if (data && data.relationships) {
                const parentNodeName = data.type === 'iot.Asset' ? `${data.type.split('.')[1].toUpperCase()} ${data.name}` : data.name
                const parentNode = {
                    id: parentNodeName,
                    level: 1,
                    color: '#FF6700',
                    svg: data.assetType === 'Air Handling Unit' ? ahu1 : (data.assetType === 'Chiller' ? chillerSvg : (data.assetType === 'Variable Air Volume' ? vavSvg : ( data.assetType === 'Gateway' ? gatewaySvg : (data.assetType === '' && data.type !== 'iot.Asset' ? siteSvg : '')) )),
                    size: 600
                }
                graphData.nodes.push(parentNode)

                data.relationships.forEach(entity => {
                    let entityNodes = []

                    // generate filter data
                    if (!filterData.includes(`${entity.direction}-${entity.id.split('.')[1]}`)) {
                        filterData.push(`${entity.direction}-${entity.id.split('.')[1]}`)
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
                            directed: entity.direction,
                            svg: relation.assetType === 'Air Handling Unit' ? ahu1 : (relation.assetType === 'Chiller' ? chillerSvg : (relation.assetType === 'Variable Air Volume' ? vavSvg : ( relation.assetType === 'Gateway' ? gatewaySvg : (relation.assetType === '' && relation.type !== 'iot.Asset' ? siteSvg : '')) ))
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

    return { parsedData: graphData, filterData: tranformFilterData(filterData) }
}

const tranformFilterData = (filterData) => {

    filterData.forEach((filter, i) => {
        if (filter in filterMapping) {
            filterData[i] = filterMapping[filter]
        }
    })
    return filterData
}

export const filterMapping = {
    "OUT-IS_CONTAINED_BY_SPATIAL_ELEMENT": 'Located At',
    "IN-IS_CONTAINED_BY_SPATIAL_ELEMENT": 'Contains',
    "OUT-SUPPLIES_SPATIAL_ELEMENT": 'Supplies To Location',
    "IN-SUPPLIES_SPATIAL_ELEMENT": 'Supplied By Asset',
    "OUT-IS_LOCATED_IN": 'Installed Location',
    "IN-IS_LOCATED_IN": 'Installed Asset',
    "OUT-SUPPLIES_ASSET": 'Provides To Asset',
    "IN-SUPPLIES_ASSET": 'Provided By Asset'
}


export default transformGraphData
