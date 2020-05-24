## Queue [array]

-------------------------
  DRAWBACKS
  - Cannot re-use index locations of deleted elements.
  - We can only use each index location only once.
  - If the Q was completely filled, then completely emptied,
    then both pointers will appear at the end of the Q,
    and thus will look like it's Empty & Full at the same time.
-------------------------
  Solutions
  - Circular Queue using 2 pointers.