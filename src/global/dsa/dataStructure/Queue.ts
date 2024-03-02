/**
 * FIFO
 */
class Queue {
  private items: Record<number, any>;
  private rear: number;
  private front: number;

  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element: any) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    console.log(this.items);
  }
}

export default Queue;

export class QueueWithArray {
  items: any[];

  constructor() {
    this.items = [];
  }

  // To insert the element into queue
  enqueue(element: any) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
