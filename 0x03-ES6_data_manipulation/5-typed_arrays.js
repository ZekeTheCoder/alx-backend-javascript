export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length); // with specified byte offset and byte length.

  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  view.setInt8(position, value);
  return (view);
}
