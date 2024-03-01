import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];
  // let leftValues:number[] = [];
  // let rightValues:number[] = [];

  // if (node.left) leftValues = inOrder(node.left);
  // if (node.right) rightValues = inOrder(node.right);

  // return [...leftValues, node.val, ...rightValues];
  return [...inOrder(node.left), node.val, ...inOrder(node.right)];

}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
    node: BNodeNum | null = null,
    accum: number[] = []): number[] {
  if(node === null) return accum;
  if(node.left) accum = inOrderAccum(node.left, accum);
  accum.push(node.val)
  if(node.right) accum = inOrderAccum(node.right, accum);
  return accum;
}


export { inOrder, inOrderAccum };
