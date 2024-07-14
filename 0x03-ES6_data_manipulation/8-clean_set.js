export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    const strings = [];
    set.forEach((item) => {
      if (item.toLowerCase().startsWith(startString.toLowerCase())) {
        strings.push(item.slice(startString.length));
      }
    });
    return strings.join('-');
  }
  return '';
}
