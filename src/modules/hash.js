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

    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [existingKey, value] of bucket) {
      if (existingKey === key) {
        return value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const existingKey = bucket[i];
      if (existingKey === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey, value] = bucket[i];
      if (existingKey === key) {
        bucket.splice(i, 1);
        this.size--;
        return value;
      }
    }
    return false;
  }
  length() {
    return this.size;
  }
  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }
  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }
  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }
    return entriesArray;
  }
  resize() {
    const newBuckets = new Array(this.buckets.length * 2)
      .fill(null)
      .map(() => []);
    const oldBuckets = this.buckets;
    this.buckets = newBuckets;
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}
