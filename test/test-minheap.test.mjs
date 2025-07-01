import { expect } from 'chai'
import MinHeap from '../lib/MinHeap.mjs'

function isHeapShaped(array, size) {
  for (let i = 2; i < size + 1; i++) {
    if (array[i] > array[Math.floor(i / 2)]) return false
  }
  return true
}

describe('The min heap class', () => {
  beforeEach(function() {
    this.values = [21, 17, 4, 15, 12, 2, 3, 9, 13, 8, 11, 1]
    this.heap = new MinHeap()
    for (let i = 0; i < this.values.length; i++) {
      this.heap.__getArray()[i + 1] = this.values[i]
    }
    this.heap.__setSize(this.values.length)
  })

  it('Returns the largest child of a parent node', () => {
    let heap = this.heap
    for (let i = 2; i < heap.getSize(); i++) {
      let largestChild = heap.largestChild(Math.floor(i / 2))
      expect(this.heap.__getArray()[largestChild]).to.be.greaterThanOrEqual(this.heap.__getArray()[i])
    }
  })

  it('Should sink values into place maintaining the heap invariant', () => {
    let heap = this.heap
    let values = this.values.toSorted()

    while (heap.getSize() > 1) {
      expect(isHeapShaped(heap.__getArray(), heap.getSize())).to.be.true
      expect(heap.__getArray().toSorted().slice(1, heap.getSize() + 1)).to.deep.equal(values)

      heap.__getArray()[0] = heap.__getArray()[heap.getSize()]
      values = heap.__getArray().slice(1, heap.getSize()).toSorted()
      heap.__setSize(heap.getSize() - 1)
      heap.sink(1)
    }
  })
})