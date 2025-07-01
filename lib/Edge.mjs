export default class Edge {

  #source
  #dest
  #weight

  constructor(source, dest, weight) {
    this.#source = source
    this.#dest = dest
    this.#weight = weight
  }
  
  getSource() { return this.#source }
  getDest() { return this.#dest }
  getWeight() { return this.#weight }

}