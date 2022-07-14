test('1 + 1 = 2', 
    () => {
        expect(1 + 3).toBe(2);
    }, 
    () => {
        expect(1 + 1).not.toBe(3);
    }
);

test("'Hello World' contains 'World'", () => {
  expect('Hello World').toMatch(/World/);
});

