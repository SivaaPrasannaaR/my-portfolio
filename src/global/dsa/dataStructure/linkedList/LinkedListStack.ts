import LinkedList from "./LinkedList";

class LinkedListStack {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  push(value: any) {
    return this.list.prepand(value);
  }

  pop() {
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

export default LinkedListStack;
