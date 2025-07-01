import Edge from './Edge.mjs'

export default class Vertex {

  #edges = {}
  #name

  constructor(name) {
    this.#name = name
  }

  getName() { return this.#name }
  setName(name) { this.#name = name }

  addEdge(target, { weight = 1, bidirectional = false, attrs = {} } = {}) {
    let edge = new Edge(this, target, weight)
    edge.setAttrs(attrs)
    this.#edges[target.getName()] = edge
    if (bidirectional) {
      target.addEdge(this, { weight })
    }
  }

  getOutgoingEdges() { return Object.values(this.#edges) }

}