import type {Track, Vector2} from './GPX';
import {generateSeed, RNG} from './RNG';

export enum Direction {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

export class Walker {
  private position: Vector2;
  private direction: Direction;
  private track: Track;
  private rng: RNG;

  constructor() {
    this.rng = new RNG(generateSeed());
    this.direction = this.rng.next() % 4;

    this.position = {x: 0, y: 0};
    this.track = {points: new Array({x: 0, y: 0}), pointSet: new Set()};

    this.track.pointSet.add(this.position);
  }

  nextPoint(): Vector2|null {
    this.direction = this.rng.next() % 4;

    return null;
  }
}