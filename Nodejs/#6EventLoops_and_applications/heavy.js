const worker = require('worker_threads')

const outer_boundary = worker.workerData.outer
const inner_boundary = worker.workerData.inner
sum = 0;
for(let i = 0; i < outer_boundary; i++){
    for(let j = 0; j < inner_boundary; j++){
        sum += i*j
    }
}

worker.parentPort.postMessage(`Task Completed Successfully sum = ${sum}`)
