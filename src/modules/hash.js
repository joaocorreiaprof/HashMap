export default class HashMap {
  constructor(initialCapacity = 8, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.size = 0;
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey, existingValue] = bucket[i];
      if (existingKey === key) {
        bucket[i] = [key, value]; // Overwrite existing value
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    /*
    Need to pay attention to this later 
      if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
      */
  }
  get(key) {}
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {}
}
