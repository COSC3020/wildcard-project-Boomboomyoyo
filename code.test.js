const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("nat", function(int) {
        console.log("Nodes: " + Math.max(int,1))
        graph = connectedGraph(Math.max(int,1))
        //console.log(graph)
        return isConnected(graph)
    });
jsc.assert(test, { tests: 100 });

// Check if graph is connected
function isConnected(graph)
{
    // Start checking from root node. This is the way all these graphs have generated to be used
    connected = [0]
    // Iterate over each node we know to be connected, and if it has an edge to an unmarked node,
    // mark that node to be connected. This will terminate when we have gone over every node we know
    // is connected to the root node
    for(i = 0; connected[i] != undefined; i++)
    {
        // For the next node in the known set of connected nodes, iterate over each of its edges and
        // mark any node that it has an edge to, if it isn't in the connected list.
        for(j = 0; j < graph[connected[i]].length; j++)
        {
            // Had an issue where there would be a single undefined pushed into the connected list.
            // This guards against that
            if(!connected.includes(graph[connected[i]][j]) && !(graph[connected[i]][j] == undefined))
            {
                connected.push(graph[connected[i]][j])
            }
        }
    }
    //console.log("Connected: " + connected)
    // Check if all nodes have been found to be connected
    if(connected.length == graph.length)
    {
        return true
    } else
    {
        return false
    }

    // Old code. Came back and couldn't understand it, so rewrote it. Ended up similar
    /*for(i = 0; i < connected.length; i++)
    {
        if(!(graph[connected[i]].length == 0))
        {
            for(j = 0; j < graph[connected[i]].length; j++)
            {
                if(!(connected.includes(graph[i][j]) || graph[i][j] == undefined))
                {
                    connected.push(graph[i][j])
                }
            }
        }
    }
    console.log("Connected: " + connected)
    if(connected.length == graph.length)
    {
        return true
    } else
    {
        return false
    }*/
}