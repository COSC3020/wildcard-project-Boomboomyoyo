[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12804093&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

# Problem Specification
I am going to create a function or a set of functions that generate a connected graph with a number of edges between the number of nodes and twice the number of nodes. This will be useful for generating test cases for my graph problems. Afterwards, I will do a recurrence analysis on this. Not sure how I will write test code for this, if at all.

# Response
Okay, that gave me a lot more trouble than I expected. The actual code for generating a connected graph wasn't too bad, but I had a lot of issues with the test code. I think the for loop conditions are set at compile time, which caused me an issue where I would set the termination condition for the outer loop to be when i reached the value of connected.length. This didn't work, because within the body of the loop I would change the length of connected. So, I had to find an equivalent termination condition.

## Recurrence Analysis
The runtime analysis of this is actually rather interesting, as there is randomness to it. First, a list of empty lists of length V is created, for a runtime of $|V|$, then each edge is randomly placed to where there isn't an edge. This random process will tend to increase as there are less available slots to place the edge, and in theory, it could run forever. The last few edges are placed more strictly, starting from a connected node to an unconnected node without any repeats. This will occur for the last edges needed to make the graph connected. So, while I could say the runtime is in total $|V|+|E| = \Omega\left(|E|\right)$ because there will always be at least as many edges as there are nodes, the upper bound is difficult to specify. I don't know if I can specify it. It is a constant, I think, but can I treat it as one if it could go to infinity?

## References
Found by Jacob, shows how to use random number generator in JavaScript
https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/

Jacob: Make sure the random makes an Int, not a Double

For assistance with tracking connected Nodes via a Set
https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set
https://www.w3schools.com/js/js_object_sets.asp