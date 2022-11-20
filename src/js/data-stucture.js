// 栈，队列，哈希表
const arr = [1, 2, 3, 4, 5]
const arr1 = [[1, 2, 3], 3, 4, 5]
const arr2 = ['1', '2', '3']
const arr3 = [{ name: 'pjw' }, { name: 'xty' }, { name: '哈哈哈' }]

// const stack = []
// stack.push(1)
// stack.push(2)
// const stackToEle = stack.pop()
// console.log(stack, stackToEle, stack.length)
const Stack = {
    capacity: [],
    size: function () {
        return this.capacity.length;
    },
    push: function (item) {
        this.capacity.push(item)
    },
    pop: function () {
        return this.capacity.pop()
    }
}

console.log(Stack.capacity, Stack.pop(), Stack.size())


// 队列
const Queue = {
    capacity: [],
    size: function() {
        return this.capacity.length;
    },
    add(item) {
        // 从左边进入队列
        this.capacity.unshift(item)
    },
    remove() {
        return this.capacity.pop();
    }
}

Queue.add(1)
Queue.add(2)
Queue.add(3)

console.log(Queue.remove(), Queue.size(), Queue.capacity)
