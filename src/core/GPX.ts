export interface Vector2 {
  x: number;
  y: number;
}

export interface Track {
  points: Vector2[];
  pointSet: Set<Vector2>;
}