class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) { 
    if (pos<this.items.length) {
    this.index=this.items[pos];
    return this.index;
  }
  else{    
    throw new Error('OutOfBounds');
  }
}

  max() {
    if (this.items.length>0) {
      this.maxi= Math.max.apply(null, this.items);
      return this.maxi;
    }
    else{    
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length>0) {
      this.maxi= Math.min.apply(null, this.items);
      return this.maxi;
    }
    else{    
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    return this.sum()/this.items.length;
  }
}

module.exports = SortedList;
