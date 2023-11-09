function connectedGraph(v)
{
    // Populate an empty adjacency list the size
    graph = []
    for(i=0; i < v; i++)
    {
        graph.push([])
    }
    // Pick a random number of edges between the number of nodes minus one (the minimum number of edges
    // for a connected graph) and v^2 edges (the maximum number of edges for a connected graph)
    edges = Math.max(Math.floor(v*(Math.random()*(v))),v-1)
    //console.log(edges)
    //return edges
    // Pass to recursive constructor function
    return connectedGraph2(v, edges, graph)
}

function connectedGraph2(v, e, graph, connectedNodes = new Set([0]))
{
    console.log(v + ", " + e + ", " + connectedNodes.size)
    // While there are more edges to be placed than unconnected nodes, place edge arbitrarily
    while(e > v-connectedNodes.size)
    //while(true)
    {
        // Select a random connected node to generate an edge to another random node
        //console.log(connectedNodes.size)

        /*
        temp = Math.max(Math.floor(Math.random()*(connectedNodes.size))-1,0)
        i = 0
        n1 = 0
        for(elem in connectedNodes)
        {
            if(i == temp)
            {
                console.log(elem)
                n1 = elem
            }
            i++
        }
        */
        n1 = Math.max(Math.floor(Math.random()*(connectedNodes.size))-1,0)
        n1 = connectedNodes[n1]
        n2 = Math.max(Math.floor(Math.random()*(v))-1,0)
        if(graph[n1][n2] === undefined)
        {
            graph[n1][n2] = n2
            if(!connectedNodes.has(n2))
            {
                connectedNodes.add(n2)
            }
            return connectedGraph2(v, e-1, graph, connectedNodes)
        }
    }
    
    return graph
    // When there are only enough edges to connect each unconnected node, connect nodes to graph
}


console.log(connectedGraph(10))




/* 
V nodes
between V-1 and 2V edges
connectedGraph(Int, Double): List[List[Int]]
graph = []
for(i=0; i< V; i++)
    graph.push([])
edges = Math.floor((v-1xEdgeRatio))
connectedGraph2(graph, edges, connectedNodes=[])
*/