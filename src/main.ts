import { decode } from "./core/Decoder";
import { encode } from "./core/Encoder";

const dropZone = document.querySelectorAll('.drop-zone')!;
const fileInput = document.querySelector<HTMLInputElement>('#file-input')!;

dropZone.forEach((element: Element) => {
    element = element;

    element.addEventListener('dragover', (event) => {
        event.preventDefault();
        element.classList.add('dragging');
    });

    element.addEventListener('dragleave', () => {
        element.classList.remove('dragging');
    });

    element.addEventListener('drop', (event: Event) => {
        event.preventDefault();
        element.classList.remove('dragging');

        const files = (event as DragEvent).dataTransfer?.files;

        if (files && files.length > 0) {
            fileInput.files = files;

            const file = files[0];
            
            if (element.id == "file-to-gps") {
                encode(file);
            }
                
            else {
                decode(file)
            }       
        }
    });
})
