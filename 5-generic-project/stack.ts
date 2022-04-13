interface Stack<T> {
  readonly size: number; //값을 변경 할 수 없고 내부적으로 결정됨
  push(value: T): void;
  pop(): T;
}

// 미션: Array를 쓰지 않고 구현하기

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  constructor(private capacity: number) {}

  push(value: T) {
    if (this._size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
const stack = new StackImpl<string>(10);
stack.push("Ellie 1");
stack.push("bob 2");
stack.push("Steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(5);
stack2.push(6);
stack2.push(3);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}

//stack.pop(); //error
