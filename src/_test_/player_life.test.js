import { levelHealth } from './player_life';
it('health', () => {
  expect(levelHealth({name: 'Маг', health: 100 })).toBe('healthy');
  expect(levelHealth({ name: 'Лучник', health: 50})).toBe('wounded');
  expect(levelHealth({ name: 'мечник', health: 10 })).toBe('critical');
});
