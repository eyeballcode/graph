import MinHeap from './heap/MinHeap.mjs'

class VertexDistance {

  vertex
  distance

  constructor(vertex, distance) {
    this.vertex = vertex
    this.distance = distance
  }

  valueOf() { return this.distance }
}

export function dijkstra(graph, source, target = null) {
  let targetVertex = target ? graph.get(target) : null
  let dist = {}
  let pred = {}
  for (let vertex of graph.getVertices()) {
    dist[vertex.getName()] = Infinity
    pred[vertex.getName()] = null
  }

  dist[source] = 0

  let Q = new MinHeap()
  Q.add(new VertexDistance(graph.get(source), 0))

  while (!Q.isEmpty()) {
    let vertexDist = Q.get()
    let { vertex, distance } = vertexDist

    if (vertex === targetVertex) break

    // Do not process outdated entries
    if (dist[vertex.getName()] !== distance) continue

    for (let edge of vertex.getOutgoingEdges()) {
      let dest = edge.getDest()
      let newDist = distance + edge.getWeight()
      if (newDist < dist[dest.getName()]) {
        dist[dest.getName()] = newDist
        pred[dest.getName()] = vertex
        Q.add(new VertexDistance(dest, newDist))
      }
    }
  }

  return { pred, dist }
}

export function backtrack(graph, pred, target) {
  let path = []
  let current = graph.get(target)
  while (current) {
    path.push(current)
    current = pred[current.getName()]
  }

  return path.reverse()
}