import { TestClass } from '.';

let subject: TestClass<string>;

beforeEach(() => {
  subject = new TestClass('any');
});

describe('.prefix()', () => {
  it('returns the correct text', () => {
    const result = subject.prefix('wow!');
    expect(result).toMatch(/\S+ v\S+: wow!/);
  });
});

describe('.suffix()', () => {
  it('returns the correct text', () => {
    const result = subject.suffix('wow!');
    expect(result).toMatch(/wow! \(.*\)/)
  });
});

describe('.get() and .set()', () => {
  it('returns the expected text', () => {
    const result = subject.get();
    expect(result).toEqual('any');
  });

  it('allows setting with a new value of the same type', () => {
    subject.set('anything');
    const result = subject.get();
    expect(result).toEqual('anything');
  });
});
