import type { Track } from "./GPX";
import { Walker } from "./Walker";

export interface EncodedData {
    track: Track;
    filename: string;
}


export function simulate(fileContent: Uint8Array, filename : string) : EncodedData {
    let walker = new Walker();

    for (let i = 0; i < fileContent.length; ++i) {
        walker.moveNext(fileContent[i]);
    }

    return {track: walker.getTracks(), filename:filename};
}
