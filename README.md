# poll-of-day-sdk

TypeScript SDK for daily on-chain polls on the Stacks blockchain — propose options, cast votes, tally results.

## Install

```bash
npm install poll-of-day-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'poll-of-day-sdk';

const contract = parseContractId('SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.poll-of-day-a1');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-current-poll' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `Poll` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
