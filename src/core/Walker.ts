import type {Track, Vector2} from './GPX';

export enum Direction {
    North = 0,
    East = 1,
    South = 2,
    West = 3,
}

function getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export class Walker {
    private position: Vector2;
    private direction: Direction;
    private track: Track;

    constructor() {
        this.direction = getRandomInt(0, 4);

        this.position = {x: 0, y: 0};
        this.track = {points: new Array({x: 0, y: 0})};
    }

    private move(dist: number): void {
        switch (this.direction) {
            case Direction.North: 
                this.position.y += dist 
                break;
            case Direction.South:
                this.position.y -= dist
                break;
            case Direction.East:
                this.position.x += dist 
                break;
            case Direction.West:
                this.position.x -= dist
                break;
            default:
                throw Error("Unexpected direction: " + this.direction)
        }
    }

    moveNext(dist: number): void {
        this.direction = getRandomInt(0, 4)
        this.move(dist) 
        this.track.points.push({...this.position}); // to create a copy. Im never coding in javascript again. C++ for the win!
    }

    getTracks() : Track {
        return this.track;
    }
}