
// Uses the mulberry 32 algorithm, since the randomness (well, technically
// pseudo-randomness) needs to be recreatable given the same seed.
export class RNG {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  public next(): number {
    let t = this.seed += 0x6D2B79F5;

    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

export function generateSeed(): number {
  return Date.now() >>> 0;  // To only keep the lower 32 bits, since 
}