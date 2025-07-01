import Heap from './Heap.mjs'

export default class MinHeap extends Heap {
  constructor() {
    super()
  }

  childComparison(left, right) {
    return left < right
  }
}