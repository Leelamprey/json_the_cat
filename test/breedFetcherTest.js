const fetchBreedDescription = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', ()=> {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Ragdoll', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.";
      assert.equal(desc, expectedDesc);
      done();
    });
  });

  it('returns an error for invalid cat breed', (done) => {
    fetchBreedDescription('Snuffalagapagos', (err, desc) => {
      assert.isNotNull(err);
      assert.equal(desc, null);
      done();
    });
  });

});