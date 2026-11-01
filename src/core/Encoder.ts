import type {Track} from './GPX';
import {generateSeed} from './RNG';
import {Walker} from './Walker';

export interface EncodedData {
  tracks: Track[];
  seed: number;
}
;

export function encode(fileContent: Uint8Array) {
  let seed = generateSeed();
  let walker = new Walker();

  while (true) {
    
  }
}