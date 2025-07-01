import Heap from './Heap.mjs'

export default class MaxHeap extends Heap {
  constructor() {
    super()
  }

  childComparison(left, right) {
    return left > right
  }
}