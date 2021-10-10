const fs = require('fs')
const kmeans = require('node-kmeans');
const fishersIrises = require('./fishersIrises')

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

let data = fishersIrises;

let vectors = new Array();
for (let i = 0; i < data.length; i++) {
    vectors[i] = [data[i][2], data[i][3]];
}

kmeans.clusterize(vectors, {k: 3}, (err, res) => {
    if (err) console.error(err);
    clusters = res.map((cluster, index) => {
        return (
            {
                label: `${data[cluster.clusterInd[cluster.clusterInd.length / 2]][4]}`,
                data: cluster.cluster = cluster.cluster.map(el => {
                    return ({
                        x: el[0],
                        y: el[1]
                    })
                }),
                backgroundColor: random_rgb()
            }
        )
    })
    let centers = res.map((cluster, index) => {
        return (
            {
                label: null,
                data: [{
                    x: cluster.centroid[0],
                    y: cluster.centroid[1],
                }],

                backgroundColor: 'red',
                radius: 10,
                pointStyle: 'triangle',
            }

        )
    })
    let foo =
        {
            label: 'cluster centers',
            data: centers.map(c => c.data[0]),
            backgroundColor: 'red',
            radius: 10,
            pointStyle: 'triangle',
        }
    fs.writeFile('data.js', 'let _data = ' + JSON.stringify({data: [...clusters, foo]}), err => {
        if (err) {
            console.error(err)
            return
        }
    })
});