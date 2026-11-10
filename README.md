# Waypoint
Waypoint encodes data in a GPS file format, by making a "walker" aimlessly
wonder around.

It determines the path using the input data and a bit of pseudo-RNG. It 
is completely decodable, as the RNG does not affect the encoded content of the file.

## How to use
On the site, you will see 2 boxes next to each other. One prompts you to encode your file into
.gpx format. The other decodes the .gpx file and converts it back into the original. Filename and
extensions are preserved. When either conversion finishes, it will download the converted file. There 
is also a .gpx viewer linked below (not mine). Since there is RNG built into the program, the path should
seem random. However, complete retrieval of the file is supported, even with randomness in the mix. 

## Developer Note
Waypoint was developed under time constraint (to ship with bonus multipliers). As a result, 
I had to get help from some LLMs. Note that about 90%+ of the code is hand written by me. 
The source code is also somewhat messy, and there may be edge cases that haven't been tested
or accounted for.

Given more time, I would improve the code structure, perform rigid testing, and improve
my code in other small ways.

Thank you for looking at my project!
