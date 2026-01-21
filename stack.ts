type NodeStack<T> = {
    next?: NodeStack<T>;
    value: T;
}

class Stack<T> {
    public length: number;
    private head?: NodeStack<T>;

    constructor() {
        this.head = undefined
        this.length = 0;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    push(item: T): void {
        const node = { value: item } as NodeStack<T>;
        if (!this.length) {
            this.length = 1;
            this.head = node;
        }

        this.length++;

        node.next = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.length) return;

        this.length--;
        const head = this.head;
        this.head = head?.next;

        return head?.value;
    }
}