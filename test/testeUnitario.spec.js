import {soma} from './matematicas';

test('1 + 1 = 2', 
    () => {
        expect(soma(1, 2)).toBe(2);
    }, 
    () => {
        expect(soma(1, 1)).not.toBe(3);
    }
);

test("'Hello World' contains 'World'", () => {
  expect('Hello World').toMatch(/World/);
});

