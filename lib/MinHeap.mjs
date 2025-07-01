export default class MinHeap {

  #array = []
  #size = 0

  constructor() {
  }

  __getArray() {
    return this.#array
  }

  __setSize(size) { this.#size = size }

  getSize() { return this.#size }

}