## Queue: 2 pointer method [array]

-------------------------
  Main
  - It's important to note the conditions when "isFull" and "isEmpty" are met.
    - isFull
      - whenever the `rear` pointer is one index before the size.
    - isEmpty
      - whenever the `rear` & `front` pointer's are equal.
  - Cannot re-use index locations of deleted elements.
  - We can only use each index location only once.
  - If the Q was completely filled, then completely emptied,
    then both pointers will appear at the end of the Q,
    and thus will look like it's Empty & Full at the same time.

  Note
  - Most drawbacks are fixed with a Circular Queue using 2 pointers.
-------------------------


## Queue: Circular [array]

-------------------------
  Main
  - Useful for re-using index locations.
  - isFull
    - whenever the `rear` pointer is 1 index before the `front` pointer.
  - isEmpty
    - whenever the `front` pointer is equal to the `rear` pointer.

  Note
  - Insert: `O(1)`
  - Delete: `O(1)`
  - Drawback: Fixed size.

## Queue [2 Stacks]

-------------------------
  Main
  - Useful for splicing into a Queue.