const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

/*
const breadthFirstTraversal = (visitQueue, callback, visitedVertices = []) => {
  // Base case: if the queue is empty, stop the recursion
  if (visitQueue.isEmpty()) {
    return;
  }

  const current = visitQueue.dequeue();
  // console.log(current.data);
  callback(current)

  // Visit all the neighbors of the current vertex
  current.edges.forEach((edge) => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      visitQueue.enqueue(neighbor);
    }
  });

  // Recursive call
  breadthFirstTraversal(visitQueue, callback, visitedVertices);
};

// Initial call to start the traversal
const startTraversal = (start) => {
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  breadthFirstTraversal(visitQueue,(vertex)=>console.log(vertex.data), [start]);
};

startTraversal(testGraph.vertices[0]);
*/


const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue()
  visitQueue.enqueue(start)  

  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue()
    console.log(current.data)
    
    current.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      visitQueue.enqueue(neighbor)
    }
  })
  }
};

breadthFirstTraversal(testGraph.vertices[0]);
