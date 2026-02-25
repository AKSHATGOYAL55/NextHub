import { describe, it } from 'node:test';
import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  it('should be defined', () => {
    expect(new UppercasePipe()).toBeDefined();
  });
});
