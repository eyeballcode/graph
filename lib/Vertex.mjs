export default class Vertex {

  #name

  constructor(name) {
    this.#name = name
  }

  getName() { return this.#name }
  setName(name) { this.#name = name }

}