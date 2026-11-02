import { downloadGPX } from './File';
import {GRID_SCALE} from './GPX';
import { simulate, type EncodedData } from './Core';

function escapeXML(value: string): string {
    return value.replace(/[<>&"']/g, char => ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;"
    })[char]!);
}

function writeFileContent(data: EncodedData) : string { // string because gpx is xml
    let str : string = "";

    for (const point of data.track.points) {
        str += `                <trkpt lat="${point.y * GRID_SCALE}" lon="${point.x * GRID_SCALE}" />\n`
    }

    return String.raw`<?xml version="1.0" encoding="UTF-8"?>
    <gpx version="1.1" creator="Waypoint" xmlns="http://www.topografix.com/GPX/1/1"
        xmlns:wp="https://goobusthenoobus.github.com/Waypoint">
        <metadata>
            <name>Waypoint Encoded File</name>
            <extension><wp:filename>${escapeXML(data.filename)}</wp:filename></extension>
        </metadata>
        <trk>
            <name>Waypoint Journey</name>
            <trkseg>
${str}
            </trkseg>
        </trk>
    </gpx>
    `
}

export async function encode(file: File): Promise<void> {
    const buffer = await file.arrayBuffer();

    const fileContent = new Uint8Array(buffer);

    const encodedData = simulate(fileContent, file.name);
    const encodedContent = writeFileContent(encodedData);
    downloadGPX(encodedContent, "encoded.gpx");
}