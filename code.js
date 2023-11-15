function connectedGraph(v)
{
    // Populate an empty adjacency matrix the size of the graph
    graph = []
    //connected = []
    for(i=0; i < v; i++)
    {
        graph.push([])
        for(j=0; j < v; j++)
        {
            graph[i].push(0)
        }
    }
    console.log(graph)
    // Pick a random number of edges between the number of nodes minus one (the minimum number of edges
    // for a connected graph) and v^2 edges (the maximum number of edges for a connected graph)
    edges = Math.max(Math.floor(v*(Math.random()*(v))),v-1)
    //console.log("Edges: " + edges)
    // Pass to recursive constructor function
    //console.log(edges)
    return connectedGraph2(v, edges, graph)
}

function connectedGraph2(v, e, graph, connectedNodes = [0])
{
    //console.log(v + ", " + e + ", " + connectedNodes.length)
    // While there are more edges to be placed than unconnected nodes, place edge arbitrarily
    while(e > v-connectedNodes.length)
    {
        // Select a random connected node to generate an edge to another random node
        //console.log(connectedNodes.size)

        n1 = randomElementRange(connectedNodes.length)
        n1 = connectedNodes[n1]
        n2 = randomElementRange(v)
        unplaced = true
        while(unplaced)
        {
            //console.log(n1 + ", " + n2)
            // If this is an unplaced edge, place the edge
            if(graph[n1][n2] == 0)
            {
                graph[n1][n2] = 1
                e -=1    
                if(!connectedNodes.includes(n2))
                {
                    connectedNodes.push(n2)
                }
                unplaced = false
            // Else if there are remaining edges in this row that may be placeable, 
            // iterate to the next one
            } else if(n2 < graph[n1].length)
            {
                n2 += 1
            // Else if there is no remaining edges in this row that may be placeable, go to the next row
            } else if(n2 >= graph[n1].length-1)
            {
                if(n1 == graph.length - 1)
                {
                    n1 = 0
                    n2 = 0
                } else
                {
                    n2 = 0
                    n1 += 1
                }
            }
        }

        //graph[n1].push(n2)
        //if(!connectedNodes.includes(n2))
        //{
        //    connectedNodes.push(n2)
        //}
        //return connectedGraph2(v, e-1, graph, connectedNodes)
    
    }
    
    // When there are only enough edges to connect each unconnected node, connect unconnected nodes to graph
    if(e > 0)
    {
        for(i = 0; i < v; i++)
        {
            if(!connectedNodes.includes(i))
            {
                n1 = Math.max(Math.floor(Math.random()*(connectedNodes.length))-1,0)
                n1 = connectedNodes[n1]
                graph[n1][i] = 1
                e -= 1
                connectedNodes.push(i)
            }   
            //console.log("Final connections loop")
        }
    }
    //console.log(graph)
    return graph
}

function randomElementRange(n) 
{
    return Math.floor(Math.random()*n)
}

//console.log(connectedGraph(10000))




/* Whiteboard notes from last week, when I sketched this out on the board
V nodes
between V-1 and 2V edges
connectedGraph(Int, Double): List[List[Int]]
graph = []
for(i=0; i< V; i++)
    graph.push([])
edges = Math.floor((v-1xEdgeRatio))
connectedGraph2(graph, edges, connectedNodes=[])
*/