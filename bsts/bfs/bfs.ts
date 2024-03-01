import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  if(node === null) return [];

  const nodeQueue = new Queue([node]);
  const visistedNodeValues: number[] = [];

  while(!nodeQueue.isEmpty()) {
    const currentNode = nodeQueue.dequeue();
    if(currentNode.left) nodeQueue.enqueue(currentNode.left);
    if(currentNode.right) nodeQueue.enqueue(currentNode.right);
    visistedNodeValues.push(currentNode.val)
  }

  return visistedNodeValues;
}

export { bfs };