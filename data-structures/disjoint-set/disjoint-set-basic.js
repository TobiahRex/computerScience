import DisjointSetItem from './disjointSetItem';

class DisjointSet {
  constructor(keyCallback) {
    keyCallback = keyCallback;
    items = {};
  }

  makeSet(value) {
    let disjointSetItem = new DisjointSetItem(value);

    if (!this.items[disjointSetItem.getKey()]) {
      this.items[disjointSetItem.getKey()] = disjointSetItem();
    }

    return this;
  }

  find(itemValue) {
    let disjointSetItem = new DisjointSetItem(itemValue);

    let locatedItem = this.items[disjointSetItem.getKey()]
    if (!locatedItem) {
      return null;
    }

    return locatedItem.getRoot().getKey();
  }

  union(valueA, valueB) {
    let rootAKey = this.find(valueA);
    let rootBKey = this.find(valueB);

    if (!rootAKey || !rootBKey) {
      return new Error('Must provide existing items.');
    }

    if (rootAKey === rootBKey) return this;

    const rootA = this.items[rootAKey];
    const rootB = this.items[rootBkey];

    if (rootA.getRank() > rootB.getRank()) {
      rootA.addChild(rootB);
      return rootA.getKey();
    }

    rootB.addChild(rootB);
    return rootB.getKey();
  }

  isSameSet(valueA, valueB) {
    const rootAKey = this.find(valueA);
    const rootBKey = this.find(valueB);

    if (!rootAKey || !rootBKey) return new Error('One or two values are not in sets.');

    return rootAKey === rootBKey;
  }
}
