interface Array<T> {
  custForEach(callback: (value: any, index: number, array: any[]) => void): void;
  custMap(callback: (value: any, index: number, array: any[]) => any): any;
  custFilter(callback: (value: any, index: number, array: any[]) => boolean): any[];
  custReduce(callback: (accumulator: any, value: any, index: number, array: any[]) => any, initialValue?: any): any;
}

Array.prototype.custForEach = function(callback: (value: any, index: number, array: any[]) => void): void {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.custMap = function(callback: (value: any, index: number, array: any[]) => any): any {
  const newArr: any[] = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

Array.prototype.custFilter = function(callback: (value: any, index: number, array: any[]) => boolean): any[] {
  const result: any[] = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.custReduce = function(callback: (accumulator: any, value: any, index: number, array: any[]) => any, initialValue?: any): any {
  let accumulator = initialValue !== undefined ? initialValue : (this.length > 0 ? this[0] : undefined);
  
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};