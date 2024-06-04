var LRUCache = function (capacity) {
  this.map = new Map(); // Using Map to store key-value pairs
  this.capacity = capacity; // Capacity of the cache
};

// Get the value associated with the given key in the cache
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1; // If key not found in cache, return -1
  let value = this.map.get(key); // Get the value from the map
  this.map.delete(key); // Remove the key-value pair from the map
  this.map.set(key, value); // Re-insert the key-value pair to mark it as most recently used
  return value; // Return the value associated with the key
};

// Put a new key-value pair in the cache
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) this.map.delete(key); // If key already exists, remove it from the map
  this.map.set(key, value); // Insert the new key-value pair into the map
  if (this.map.size > this.capacity) {
    // If cache exceeds capacity after insertion, remove the least recently used item
    const leastRecentlyUsedKey = this.map.keys().next().value; // Get the first key in the map
    this.map.delete(leastRecentlyUsedKey); // Delete the least recently used key-value pair
  }
};
