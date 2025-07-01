export default class MaxHeap {

  #array = []
  #size = 0

  constructor() {
  }

  __getArray() {
    return this.#array
  }

  __setSize(size) { this.#size = size }

  getSize() { return this.#size }

  largestChild(parentIndex) {
    let left = parentIndex * 2
    let right = parentIndex * 2 + 1
    if (left === this.getSize() || this.#array[left] > this.#array[right]) {
      return left
    }
    return right
  }

}