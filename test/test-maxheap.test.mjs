import { expect } from 'chai'
import MaxHeap from '../lib/heap/MaxHeap.mjs'

function isHeapShaped(array, size) {
  if (array.length < size) return false
  for (let i = 2; i < size + 1; i++) {
    if (array[i] > array[Math.floor(i / 2)]) return false
  }
  return true
}

describe('The max heap class', () => {
  beforeEach(function() {
    this.values = [21, 17, 4, 15, 12, 2, 3, 9, 13, 8, 11, 1]
    this.heap = new MaxHeap()
    for (let i = 0; i < this.values.length; i++) {
      this.heap._array[i + 1] = this.values[i]
    }
    this.heap.__setSize(this.values.length)
  })

  it('Returns the largest child of a parent node', function() {
    let heap = this.heap
    for (let i = 2; i < heap.getSize(); i++) {
      let largestChild = heap.largestChild(Math.floor(i / 2))
      expect(this.heap._array[largestChild]).to.be.greaterThanOrEqual(this.heap._array[i])
    }
  })

  it('Should sink values into place maintaining the heap invariant', function() {
    let heap = this.heap
    let values = this.values.toSorted()

    while (heap.getSize() > 1) {
      expect(isHeapShaped(heap._array, heap.getSize())).to.be.true
      expect(heap._array.slice(1, heap.getSize() + 1).toSorted()).to.deep.equal(values)

      heap._array[1] = heap._array[heap.getSize()]
      values = heap._array.slice(1, heap.getSize()).toSorted()
      heap.__setSize(heap.getSize() - 1)
      heap.sink(1)
    }
  })

  it('Should rise values into the correct spot', function() {
    let heap = new MaxHeap()
    let values = this.values.toSorted()

    for (let i = 0; i < values.length; i++) {
      expect(isHeapShaped(heap._array, heap.getSize())).to.be.true
      expect(heap._array.slice(1).toSorted()).to.deep.equal(values.slice(0, i).toSorted())

      heap._array[i + 1] = values[i]
      heap.rise(i + 1)
      heap.__setSize(heap.getSize() + 1)
    }
  })

  it('Should add numbers while preserving the heap invariant', function() {
    let numbers = [12, 52, 2, 55, 9, 1, 0, 42, 67, 99, 3, 4, 5]
    let heap = new MaxHeap()

    for (let i = 0; i < numbers.length; i++) {
      expect(isHeapShaped(heap._array, i)).to.be.true
      heap.add(numbers[i])
    }
  })

  it('Should return the largest number each time', function() {
    let values = this.values.toSorted((a, b) => b - a)

    for (let i = 0; i < values.length; i++) {
      expect(isHeapShaped(this.heap._array, values.length - i)).to.be.true

      let value = this.heap.get()
      expect(value).to.equal(values[i])
    }
  })
})