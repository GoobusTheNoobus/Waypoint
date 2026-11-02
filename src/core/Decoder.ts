import { downloadRaw } from "./File";
import { GRID_SCALE, type Vector2 } from "./GPX";
import type { EncodedData } from "./Core";

function parseGPX(content: string): Document {
    const parser = new DOMParser();
    const document = parser.parseFromString(content, "application/xml");

    const error = document.querySelector("parsererror");

    if (error) {
        console.error("GPX parsing error:", error.textContent);

        throw new Error("Invalid GPX file.");
    }
    

    return document;
}

const GPX_NAMESPACE = "http://www.topografix.com/GPX/1/1";
const WP_NAMESPACE = "https://goobusthenoobus.github.com/Waypoint"

function fetchData(gpx: Document) : EncodedData {
    let elems = gpx.getElementsByTagNameNS(
        GPX_NAMESPACE,
        "trkpt"
    )
    
    let filenameElem = gpx.getElementsByTagNameNS(
        WP_NAMESPACE,
        "filename"
    )

    if (!filenameElem[0]) {
        throw new Error("No filename metadata found in encoded file")
    }

    let points = new Array<Vector2>()

    for (const elem of elems) {
        points.push({
            x: Math.round(Number(elem.getAttribute("lon")) / GRID_SCALE),
            y: Math.round(Number(elem.getAttribute("lat")) / GRID_SCALE)
        })
    }

    return {track: {points: points}, filename:filenameElem[0].textContent};
}

function getRaw(data: EncodedData): Uint8Array {
    if (data.track.points.length <= 1) {
        return new Uint8Array();
    }

    const arr: number[] = [];

    for (let i = 1; i < data.track.points.length; ++i) {
        const lastPoint = data.track.points[i - 1];
        const point = data.track.points[i];

        const dx = point.x - lastPoint.x;
        const dy = point.y - lastPoint.y;

        arr.push(Math.abs(dx) + Math.abs(dy));
    }

    return new Uint8Array(arr);
}

export async function decode(file: File): Promise<void> {
    const content = await file.text();

    const document = parseGPX(content);
    const data = fetchData(document);
    const raw = getRaw(data);

    downloadRaw(raw, data.filename);
}