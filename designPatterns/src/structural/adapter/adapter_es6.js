class Soldier {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}
// ---------------------------
class Jedi {
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}
// ---------------------------
class JediAdapter {
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

export {
  Soldier,
  Jedi,
  JediAdapter
};

/*
https://sourcemaking.com/design_patterns/adapter

Problem:
- You like an interface, but off the shelf, it's implementation goes against
the desired usage.

Solutions:
- Create an adapter to wrap the functionality of the off-the-shelf system
such that, it's client facing API contains the capable qualities for desired use.


--- Example ---
The "Jedi" class is too general to be used as is, to represent Yoda. This is bc
yoda is a Jedi-Master, but there's Jedi's, Padawans. We must elevate one Jedi's
abilities above another, or vice-versa. Furthermore, the class "Solder" can
represent many types. Specificity would be needed to represent a storm trooper,
from an Tie-Fighter pilot.  Therefore we create an Adapter, to provide further 
*/
