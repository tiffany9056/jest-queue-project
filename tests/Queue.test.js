const Queue = require('../src/Queue');

describe('Queue operations', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });


  test('constructor initializes empty queue', () => {
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.length()).toBe(0);
  });

  test('enqueue adds item to the queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.length()).toBe(1);
  });

  test('dequeue removes item from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.length()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('peek returns the front item without removing it', () => {
    queue.enqueue(5);
    expect(queue.peek()).toBe(5);
    expect(queue.length()).toBe(1);
  });

  test('peek on empty queue returns undefined', () => {
    expect(queue.peek()).toBeUndefined();
  });

  test('length returns number of elements', () => {
    expect(queue.length()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length()).toBe(2);
  });

  test('isEmpty returns true if queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(7);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('removeAll empties the queue', () => {
    queue.enqueue(3);
    queue.enqueue(4);
    queue.removeAll();
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  // Failing test for bug in dequeue
  test('dequeue should throw error on empty queue', () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });
});