const expect = require('chai').expect;

import {
  Soldier,
  Jedi,
  JediAdapter
} from '../src/structural/adapter/adapter_es6';

describe('Adapter Pattern', () => {
  it('should demonstrate adapter pattern', () => {
    const stormtrooper = new Soldier(1);
    const jediMaster = new Jedi(10);
    const yoda = new JediAdapter(jediMaster);

    const stormtrooperAttack = stormtrooper.attack();
    const yodaAttack = yoda.attack();
    expect(yodaAttack).to.equal(stormtrooperAttack * 1000);
  })
});
