import { BNodeNum, BSTNum } from "../common/bst";


/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNodeNum(val);

  if(bst.root === null) bst.root = newNode;

  else {

    function _traverseNodes(node: BNodeNum | null, newNode: BNodeNum): void{
      if(node === null) node = newNode;
      else if (newNode.val < node.val) {
        if(node.left === null) node.left = newNode;
        else _traverseNodes(node.left, newNode)
      }
      else if (newNode.val > node.val) {
        if(node.right === null) node.right = newNode;
        else _traverseNodes(node.right, newNode);
      }
    }

    _traverseNodes(bst.root, newNode);
  }
}

export { insertRecur };

