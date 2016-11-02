class BinarySearchTree {
  constructor(options) {
    // re-assign options as empty object if passed nothing.
    options = options || {};
    // declare first childs as null;
    this.left = null;
    this.right = null;
    // declare parent as such or null
    this.parent = options.parent !== undefined ? options.parent : null;

    // re-assign this.key from the options object input
    if (options.hasOwnProperty('key')) { this.key = options.key; }
    // re-assign this.data from the options object value or as an empty array
    this.data = options.hasOwnProperty('value') ? [options.value] : [];
    // re-assign this.unique from the options obj or as "false"
    this.unique = options.unique || false;


    this.compareKeys = options.compareKeys || customUtil.defaultCompareKeysFunction; customUtils.defaultCompareKeysFunction;

  }
}
