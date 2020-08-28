//最小堆类
class MinHeap {
  constructor() {
    this.heap = [];
  }

  //获取parent index
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  //获取左侧子节点index
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  //获取右侧子节点index
  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  //index交换
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  //上移
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  //下移
  shiftDown(index) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  //插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    //删除堆顶，并把最后一个元素移到堆顶
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
console.log(h.size());
console.log(h.peek());
h.pop();
console.log(h.peek());
