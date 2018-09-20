class Sorter {
  constructor() {
    this.mass = [];
    this.compareFunction = (a, b) => a - b;
   }

  add(element) {
    this.mass.push(element);
   }

  at(index) {
    return this.mass[index];
   }

  get length() {
    return this.mass.length;
  }

  toArray() {
    return this.mass;
 
  }

  sort(indices) {
    console.log(this.mass);
    var massQ = [];
    for ( var i = 0; i < indices.length; i++) {
      if(indices[i] > indices[i+1]) {
        indices.sort();
      }
      massQ.push(this.mass[indices[i]]);
    }
    console.log(massQ);
    massQ.sort(this.compareFunction);
    console.log(massQ);
    for ( var j = 0; j < indices.length; j++) {
      this.mass[indices[j]] = massQ[j];
    }
    console.log(this.mass);
    
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
    
  }
}

module.exports = Sorter;