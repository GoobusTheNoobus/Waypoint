export function downloadGPX(contents: string, filename: string) : void {

    const blob = new Blob(
        [contents],
        { type: "application/gpx+xml"}
    );

    // redirect to a temporary download link
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url
    link.download = filename;

    link.click()

    URL.revokeObjectURL(url);
} 

export function downloadRaw(contents: Uint8Array, filename: string) : void {

    const buffer = new ArrayBuffer(contents.byteLength);
    new Uint8Array(buffer).set(contents);

    const blob = new Blob(
        [buffer],
        { type: "application/octet-stream"}
    );

    // redirect to a temporary download link
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url
    link.download = filename;

    link.click()

    URL.revokeObjectURL(url);
} 