class MinHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(i) {
    return (i - 1) >> 2
  }
  getLeftIndex(i) {
    return 2 * i + 1
  }
  getRightIndex(i) {
    return 2 * i + 2
  }
  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }
  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[leftIndex] < this.heap[index]){
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] < this.heap[index]){
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  // 插入数据从堆的尾部进行插入并与父节点比较上移
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  // 删除 将尾部元素弹出并赋值给堆顶元素 同时与左右节点进行比较进行下移操作
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  // 获取堆顶元素
  peek(){
    return this.heap[0]
  }
  // 获取堆元素个数
  size(){
    return this.heap.length
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.pop()