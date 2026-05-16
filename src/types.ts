export interface ContractIdentifier {
  address: string;
  name: string;
}

export interface Poll {
  id: number;
  prompt: string;
  options: string[];
  totalVotes: number;
}

export interface TxOptions {
  fee?: number;
  nonce?: number;
  postConditions?: unknown[];
}
