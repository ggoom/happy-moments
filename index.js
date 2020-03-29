


/**
 * Generate an svg containing squares representing each data point.
 * @param width the width of the svg
 * @param height the height of the svg
 * @param numPerRow the number of squares per row
 * @param numPerCol the number of squares per column
 */
function generateRects(width, height, numPerRow, numPerCol) {

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", hheight);

    const scale = d3.scaleLinear()
    .domain([0, numPerRow -1])
    .range([0, size * numPerRow])
        
    sel.selectAll('rect')
        .data(d3.range(100))
        .enter().append('rect')
        .attr('x', (d, i) => {
            const n = i % numPerRow
            return scale(n)
        })
        .attr('y', (d, i) => {
            const n = Math.floor(i / 10)
            return scale(n)
        }) 
        .attr('width', size)
        .attr('height', size)
        .attr('fill', 'tomato')
        .attr('stroke-width', 2)
        .attr('stroke', 'white')
}

// /**
//  * Updates each rectangle's associated class.
//  */
// function updateRectsClasses() {

// }

// /**
//  * Render the visualization for the first time.
//  */
// function render() {

// }

// /**
//  * Update the visualization based on new data.
//  */
// function update() {

// }
