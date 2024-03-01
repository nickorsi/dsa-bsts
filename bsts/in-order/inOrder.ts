import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];
  let leftValues:number[] = [];
  let rightValues:number[] = [];

  if (node.left) leftValues = inOrder(node.left);
  if (node.right) rightValues = inOrder(node.right);

  return [...leftValues, node.val, ...rightValues];

}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
    node: BNodeNum | null = null,
    accum: number[] = []): number[] {
  return [42];
}


export { inOrder, inOrderAccum };
