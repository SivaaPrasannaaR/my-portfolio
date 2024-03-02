class Node {
  public value: any;
  public next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  tail: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Insert the value at the head (start) position which has O(1)
  prepand(value: any) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.tail = node; // Tail always point to last node where the next point to null
    } else {
      node.next = this.head;
    }

    this.head = node; // Head always point to new value/Node
    this.size++;
  }

  // Insert the value at the end of the list
  append(value: any) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node; // Tail always point to last node where the next point to null
    this.size++;
  }

  // Insert the value at the given index of the list
  insert(value: any, index: number) {
    if (index < 0 || index > this.size) return;

    // if index is 0, use prepand to insert value at the start of the list
    if (index === 0) {
      this.prepand(value);
      return;
    }

    const node = new Node(value);

    // Assign first element (which is head) to traverse from head to given index
    let prev = this.head;
    if (prev === null) return;

    for (let i = 0; i < index - 1; i++) {
      prev.next = node;
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;
    if (!this.head) return null; // if the head is null

    const value = this.head?.value;
    this.head = this.head?.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;
    if (!this.tail) return null; // if the head is null

    const value = this.tail?.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;

      while (prev?.next && prev.next !== this.tail) {
        prev = prev.next;
      }
      if (prev) {
        prev.next = null;
        this.tail = prev;
      }
    }
    this.size--;
    return value;
  }

  // Remove the value at the given index of the list
  removeFromIndex(index: number) {
    if (index < 0 || index > this.size) return null; // If the index is invalid
    if (!this.head) return null; // if the head is null

    let removedNode;

    // If index is 0, remove the head node and point the head to its prev node next
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev: Node = this.head;

      for (let i = 0; i < index - 1; i++) {
        if (prev.next !== null) prev = prev.next;
      }

      if (prev.next !== null) {
        removedNode = prev.next;
        prev.next = removedNode.value;
      }
    }

    this.size--;
    return removedNode?.value;
  }

  removeValue(value: any) {
    if (this.isEmpty()) return null;

    // if the value is in head
    if (this.head && this.head.value === value) {
      this.head = this.head?.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev?.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev?.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }

      return null;
    }
  }

  // return the index based on the search value
  search(value: any) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }

    let curr = this.head;
    let i = 0;

    // the condition fails, when curr points to last node which is null
    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;

      // prev <- curr <- next
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let listValues = "";

    // the condition fails, when curr points to last node which is null
    while (curr) {
      listValues += `${curr.value}`;
      curr = curr.next;
    }
    console.log(listValues);
  }
}

export default LinkedList;
