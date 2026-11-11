# Waypoint
## How it works

Waypoint encodes a file into a .gpx track using RNG.
However, despite the randomness, it can still retrieve the
original file content. This is because each byte is
interpreted as an unsigned integer. When encoding, the
direction the walker moves is random. However, the distance
is the integer's value. Decoding would simply require it to
calculate the distance between the current position with the
next. The filename is also preserved as metadata is the
encoded GPS file.

Unfortunately, I don't have the brainpower to build a .gpx
viewer within the site. I could, however I don't want to
spend too much time on this. I linked an external viewer,
however, it is not mine. After encoding the file, use the
viewer to see what Waypoint really generated.
