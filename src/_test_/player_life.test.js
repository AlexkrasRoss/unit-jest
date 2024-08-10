import  levelHealth  from '../player_life';
it('health more 50', () => {
  expect(levelHealth({name: 'Маг', health: 100 })).toBe('healthy');
});
it('health less 50', () => {
  expect(levelHealth({ name: 'Лучник', health: 50})).toBe('wounded');
});
it('health less 15', () => {
  expect(levelHealth({ name: 'мечник', health: 10 })).toBe('critical');
});

