export default class Graph {

  #vertices = {}

  constructor() {
  }

  add(vertex) {
    let name = vertex.getName()
    this.#vertices[name] = vertex
  }

  get(name) {
    return this.#vertices[name]
  }

  countVertices() {
    return Object.keys(this.#vertices).length
  }

}