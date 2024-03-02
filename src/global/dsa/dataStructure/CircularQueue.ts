class CircularQueue {
  private items: any[];
  private capacity: number;
  private currentLenght: number;
  private rear: number;
  private front: number;

  constructor(capacity: number) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLenght = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentLenght === this.capacity;
  }

  isEmpty() {
    return this.currentLenght === 0;
  }

  enqueue(element: any) {
    if (this.isFull()) return null;

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLenght++;

    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLenght--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i]; // Since the condition end at i is not equal to rear, we are appending separtely
    console.log(str);
  }
}

export default CircularQueue;
