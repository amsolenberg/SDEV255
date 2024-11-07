## Rectangle Methods and Properties
Method/Property                   | Description                                                        | Example
----------------------------------|--------------------------------------------------------------------|-------
`fillRect(x, y, width, height)`   | Draw a filled rectangle with top-left corner at (x, y)             | `context.fillRect(0, 5, 20, 30);`
`fillStyle`                       | Interior color of filled rectangle                                 | `context.fillStyle = "maroon";`
`lineWidth`                       | Outline width of stroked rectangle                                 | `context.lineWidth = 5;`
`strokeRect(x, y, width, height)` | Draw a stroked (outlined) rectangle with top-left corner at (x, y) | `context.strokeRect(0, 5, 20, 30);`
`strokeStyle`                     | Outline color of stroked rectangle                                 | `context.strokeStyle = "blue";`

## Path Methods and Properties
| Method/Property     | Description                                                 | Example                           |
|---------------------|-------------------------------------------------------------|-----------------------------------|
| `beginPath()`       | Begin a path                                                | `context.beginPath();`            |
| `closePath()`       | Close a path                                                | `context.closePath();`            |
| `fill()`            | Draw a filled shape defined by the current path             | `context.fill();`                 |
| `fillStyle`         | Interior color of filled shape                              | `context.fillStyle = "blue";`     |
| `lineTo(x, y)`      | Draw a line from the last point in the path to (x, y)       | `context.lineTo(100, 50);`        |
| `moveTo(x, y)`      | Move the path to (x, y)                                     | `context.moveTo(50, 20);`         |
| `stroke()`          | Draw a stroked (outlined) shape defined by the current path | `context.stroke();`               |
| `strokeStyle`       | Outline color of stroked shape                              | `context.strokeStyle = "orange";` |


## Arc Methods and Properties
### Convert degrees to radians
`radians = π/180 × degrees`

Ex: `90 degrees = π/180 × 90 = π/2 radians`

| Method/Property                                            | Description                   | Example                                              |
|------------------------------------------------------------|-------------------------------|------------------------------------------------------|
| `arc(x, y, radius, startAngle, endAngle, [anticlockwise])` | Adds an arc to the path       | `context.arc(50, 100, 30, 0, Math.PI, true);`        |
| `fill()`                                                   | Draw a filled arc             | `context.fill();`                                    |
| `fillStyle`                                                | Interior color of arc         | `context.fillStyle = "maroon";`                      |
| `stroke()`                                                 | Draw a stroked (outlined) arc | `context.stroke();`                                  |
| `strokeStyle`                                              | Outline color of stroked arc  | `context.strokeStyle = "blue";`                      |

## Text Methods and Properties
| Method/Property          | Description                          | Example                                                |
|--------------------------|--------------------------------------|--------------------------------------------------------|
| `font(fontProperties)`   | Set the font's style, size, typeface | `context.font("italic 12pt Times New Roman");`         |
| `fillText(text, x, y)`   | Draw filled text                     | `context.fillText("filled", 10, 20);`                  |
| `fillStyle`              | Interior color of text               | `context.fillStyle = "gold";`                          |
| `strokeText(text, x, y)` | Draw stroked (outlined) text         | `context.strokeText("stroked", 50, 50);`               |
| `strokeStyle`            | Outline color of stroked text        | `context.strokeStyle = "brown";`                       |
| `textAlign`              | Text's horizontal alignment          | `context.textAlign = "center";`                        |
| `textBaseline`           | Text's baseline                      | `context.textBaseline = "top";`                        |
