export interface Vector2 {
    x: number;
    y: number;
}

export interface Track {
    points: Vector2[];
}

// Each x and y unit represent this many degrees
export const GRID_SCALE = 0.0001;