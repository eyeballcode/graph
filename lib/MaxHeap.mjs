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

  sink(index) {
    // Ensure the element still has children where it can sink down to
    while (2 * index <= this.getSize()) {
      let child = this.largestChild(index)
      // Stop sinking once it is bigger than both its children
      if (this.#array[index] > this.#array[child]) break

      // Swap down with the largest child and move the index pointer to its new position
      let parentValue = this.#array[index]
      let childValue = this.#array[child]
      this.#array[index] = childValue
      this.#array[child] = parentValue

      index = child
    }
  }

  rise(index) {
    // Ensure the element still has a parent it can rise to
    // And the element is bigger than its parent
    while (2 <= index && this.#array[index] > this.#array[Math.floor(index / 2)]) {
      // Swap down with the largest child and move the index pointer to its new position
      let parentIndex = Math.floor(index / 2)

      let childValue = this.#array[index]
      let parentValue = this.#array[parentIndex]
      this.#array[parentIndex] = childValue
      this.#array[index] = parentValue

      index = parentIndex
    }
  }

  add(element) {
    this.#size++
    this.#array[this.#size] = element
    this.rise(this.#size)
  }

}