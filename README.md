[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12804093&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

# Problem Specification
I am going to create a function or a set of functions that generate a connected graph with a number of edges between the number of nodes and the number of nodes squared. This will be useful for generating test cases for my graph problems. Afterwards, I will do a recurrence analysis on this. Not sure how I will write test code for this, if at all. My test code ended up being rather straightforward, in iterating over each 

# Response
Okay, that gave me a lot more trouble than I expected. The actual code for generating a connected graph wasn't too bad, but I had a lot of issues with the test code. I think the for loop conditions are set at compile time, which caused me an issue where I would set the termination condition for the outer loop to be when i reached the value of connected.length. This didn't work, because within the body of the loop I would change the length of connected. So, I had to find an equivalent termination condition.

Updated:
I have now changed this over to an adjacency matrix representation. In a lot of ways, this was much easier to represent. I barely had to change the test code, thankfully. The graph generation function is no longer recursive, and much faster for large graphs. I did a test on a graph with 5000 nodes and over 10 million edges, and it only took around 5 minutes for it to calculate, which would've been impossible with my previous implementation.

## Recurrence Analysis
The runtime analysis of this is actually rather interesting, as there is randomness to it. First, a list of empty lists of length V is created, for a runtime of $|V|$, then each edge is randomly placed to where there isn't an edge. This random process will tend to increase as there are less available slots to place the edge, and in theory, it could run forever. The last few edges are placed more strictly, starting from a connected node to an unconnected node without any repeats. This will occur for the last edges needed to make the graph connected. So, while I could say the runtime is in total $|V|+|E| = \Omega\left(|E|\right)$ because there will always be at least as many edges as there are nodes, the upper bound is difficult to specify. I don't know if I can specify it. It is a constant, I think, but can I treat it as one if it could go to infinity?

Updated:
With my updated solution, the recurrence analysis of this is relatively simple. First, it is $|V^2|$ time to populate the initial graph. The next step is to select a random starting spot to try putting an edge, placing each edge until it is done. If the selected starting spot is occupied, the algorithm will iterate over the each following spot until it finds an unoccupied edge. The worst case will be that each edge has to iterate over each previously placed edge. In a way, I condensed two loops into one, so I will break these apart for analysis.

Edge placement:
1) First, pick a place to start trying to place an edge: Complexity of 1
2) Second, iterate until a suitable place to place an edge is found: Complexity of $|E_P|$, where $E_P$ is the number of edges placed. In the worst case, this will be all the edges, so simplify this to $|E|$
3) Repeat steps 1 and 2 for each edge: Complexity of $|E|$

Then, for the edge placement section of my implementation, the complexity is $|E^2|$ in the worst case. So, the overall complexity for my implementation is $|V^2|+|E^2|$. Then, since there are at most $|V^2|$ edges, we get a asymptotic complexity of $|V^2|+|V^4|= \Theta\left(|V^4|\right)$

## References
Found by Jacob, shows how to use random number generator in JavaScript
https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/

Jacob: Make sure the random makes an Int, not a Double

For assistance with tracking connected Nodes via a Set
https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set
https://www.w3schools.com/js/js_object_sets.asp

Ali helped me with my asymptotic analysis. I had a hard time wrapping my head around what was the worst case for this, and then how to represent it in terms of nodes. I think I've got it down now though!