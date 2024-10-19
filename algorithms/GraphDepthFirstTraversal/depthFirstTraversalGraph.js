import { vertices } from './testGraph.js';

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start)
  
  start.edges.forEach((edge) => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }    
  });    
};

/*
const depthFirstTraversal = (start, callback) => {
  const stack = [start]; // Initialize the stack with the start vertex
  const visitedVertices = new Set(); // Set to track visited vertices

  visitedVertices.add(start.data);
  
  while (stack.length > 0) {
     console.log(visitedVertices)
    const current = stack.pop(); // Pop a vertex from the stack
    callback(current); // Process the current vertex
    console.log(current.data)

    // Push all unvisited neighbors onto the stack
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.has(neighbor.data)) {
        visitedVertices.add(neighbor.data); // Mark the neighbor as visited
        stack.push(neighbor); // Add the neighbor to the stack
       
      }
    });
  }
};
*/

depthFirstTraversal(vertices[0], (vertex) => console.log(vertex.data));