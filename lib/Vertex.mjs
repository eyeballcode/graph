import Edge from './Edge.mjs'

export default class Vertex {

  #edges = {}
  #name

  constructor(name) {
    this.#name = name
  }

  getName() { return this.#name }
  setName(name) { this.#name = name }

  addEdge(target, { weight = 1, bidirectional = false } = {}) {
    this.#edges[target.getName()] = new Edge(this, target, weight)
  }

  getOutgoingEdges() { return Object.values(this.#edges) }

}