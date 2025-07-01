export default class Edge {

  #source
  #dest
  #weight

  #attrs = {}

  constructor(source, dest, weight) {
    this.#source = source
    this.#dest = dest
    this.#weight = weight
  }
  
  getSource() { return this.#source }
  getDest() { return this.#dest }
  getWeight() { return this.#weight }

  setAttrs(attrs) {
    this.#attrs = { ...attrs }
  }

  setAttr(name, val) { this.#attrs[name] = val }
  getAttr(name) { return this.#attrs[name] }

}