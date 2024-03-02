import LinkedList from "./LinkedList";

class LinkedListQueue {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value: any) {
    return this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head?.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

export default LinkedListQueue;
