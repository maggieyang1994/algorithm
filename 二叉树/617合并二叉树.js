/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var t1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}
var t2 = {
  val: 2,
  left: {
    val: 1,
    right: {
      val: 4,
      left: null,
      right: null
    },
    left: null
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
var mergeTrees = function (t1, t2) {
  if (!t1 || !t2) return t1 || t2
  return {
    val: t1.val + t2.val,
    left: mergeTrees(t1.left, t2.left),
    right: mergeTrees(t1.right, t2.right)
  }
};
var res = mergeTrees(t1, t2);
console.log(res)

const again = (t1, t2) => {
  if (!t1 && !t2) return null;
  else {
    return {
      val: t1.node + t2.node,
      left: again(t1.left, t2.left),
      right:again (t1.right, t2.right)
    }
  }
}