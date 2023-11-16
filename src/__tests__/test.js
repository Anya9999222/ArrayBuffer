import ArrayBufferConverter, { getBuffer } from '../js/arrayBuffer';

test('returns a string', () => {
  const buffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(buffer);
  const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(arrayBufferConverter.toString()).toEqual(correct);
});
