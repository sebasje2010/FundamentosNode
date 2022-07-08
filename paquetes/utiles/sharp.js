const sharp = require('sharp')

sharp()
.resize(80)
.grayscale()
.toFile(resized.png)