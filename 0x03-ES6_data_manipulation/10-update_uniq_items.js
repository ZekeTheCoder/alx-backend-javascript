export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    // for (const [key, value] of map.entries())
    for (const [key, value] of map) { // map implicit behavior(default)
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
