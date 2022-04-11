interface Stack {
  readonly size: number; //값을 변경 할 수 없고 내부적으로 결정됨
  push(value: string): void;
  pop(): string;
}

// 미션: Array를 쓰지 않고 구현하기

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  constructor(private capacity: number) {}

  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error("Stack is full");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop() {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop(); //error
