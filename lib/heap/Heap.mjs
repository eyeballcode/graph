export default class Heap {

  _array = []
  #size = 0

  constructor() {
  }

  __setSize(size) { this.#size = size }

  getSize() { return this.#size }

  childComparison(parent, child) {
    throw new Error('Child comparison method not implemented')
  }

  largestChild(parentIndex) {
    let left = parentIndex * 2
    let right = parentIndex * 2 + 1
    if (left === this.getSize() || this.childComparison(this._array[left], this._array[right])) {
      return left
    }
    return right
  }

  sink(index) {
    // Ensure the element still has children where it can sink down to
    while (2 * index <= this.getSize()) {
      let child = this.largestChild(index)
      // Stop sinking once it is bigger than both its children
      if (this.childComparison(this._array[index], this._array[child])) break

      // Swap down with the largest child and move the index pointer to its new position
      let parentValue = this._array[index]
      let childValue = this._array[child]
      this._array[index] = childValue
      this._array[child] = parentValue

      index = child
    }
  }

  rise(index) {
    // Ensure the element still has a parent it can rise to
    // And the element is bigger than its parent
    while (2 <= index && this.childComparison(this._array[index], this._array[Math.floor(index / 2)])) {
      // Swap down with the largest child and move the index pointer to its new position
      let parentIndex = Math.floor(index / 2)

      let childValue = this._array[index]
      let parentValue = this._array[parentIndex]
      this._array[parentIndex] = childValue
      this._array[index] = parentValue

      index = parentIndex
    }
  }

  add(element) {
    this.#size++
    this._array[this.#size] = element
    this.rise(this.#size)
  }

  get() {
    if (this.#size === 0) throw new Error('Heap is empty')

    let topElement = this._array[1]
    this.#size--

    // If there are still elements remaining, do the swap and sink to the correct position
    if (this.#size > 0) {
      this._array[1] = this._array[this.#size + 1]
      this.sink(1)
    }

    return topElement
  }

  isEmpty() { return this.#size === 0}

}