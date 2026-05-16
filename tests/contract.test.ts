import { describe, it, expect } from 'vitest';
import { buildReadOnlyUrl, describeContract } from '../src/contract';

const CONTRACT = {
  address: 'SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C',
  name: 'poll-of-day-a1',
};

describe('buildReadOnlyUrl', () => {
  it('targets mainnet by default', () => {
    const url = buildReadOnlyUrl({ contract: CONTRACT, functionName: 'get-current-poll' });
    expect(url).toContain('api.mainnet.hiro.so');
    expect(url).toContain('poll-of-day-a1/get-current-poll');
  });
  it('targets testnet when requested', () => {
    const url = buildReadOnlyUrl({
      contract: CONTRACT,
      functionName: 'get-current-poll',
      network: 'testnet',
    });
    expect(url).toContain('api.testnet.hiro.so');
  });
  it('rejects invalid address', () => {
    expect(() =>
      buildReadOnlyUrl({ contract: { address: 'x', name: 'y' }, functionName: 'f' })
    ).toThrow(/Invalid contract address/);
  });
});

describe('describeContract', () => {
  it('produces a readable description', () => {
    const desc = describeContract(CONTRACT);
    expect(desc).toContain('Stacks contract');
    expect(desc).toContain('poll-of-day-a1');
  });
});
