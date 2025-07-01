import { expect } from 'chai'
import MinHeap from '../lib/heap/MinHeap.mjs'

function isHeapShaped(array, size) {
  if (array.length < size) return false
  for (let i = 2; i < size + 1; i++) {
    if (array[i] < array[Math.floor(i / 2)]) return false
  }
  return true
}

describe('The min heap class', () => {
  it('Should add numbers while preserving the heap invariant', function() {
    let numbers = [12, 52, 2, 55, 9, 1, 0, 42, 67, 99, 3, 4, 5]
    let heap = new MinHeap()

    for (let i = 0; i < numbers.length; i++) {
      expect(isHeapShaped(heap._array, i)).to.be.true
      heap.add(numbers[i])
    }
  })

  it('Should return the largest number each time', function() {
    let numbers = [12, 52, 2, 55, 9, 1, 0, 42, 67, 99, 3, 4, 5]
    let heap = new MinHeap()

    let values = numbers.toSorted((a, b) => a - b)

    for (let i = 0; i < numbers.length; i++) heap.add(numbers[i])

    for (let i = 0; i < values.length; i++) {
      expect(isHeapShaped(heap._array, values.length - i)).to.be.true

      let value = heap.get()
      expect(value).to.equal(values[i])
    }
  })
})