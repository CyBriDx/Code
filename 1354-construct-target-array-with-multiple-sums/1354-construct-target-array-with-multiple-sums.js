/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
let pq = new MaxPriorityQueue({priority: x => x});
    let sum = target.reduce((x, y) => {
        pq.enqueue(y);
        return x + y;
    }, 0);
    while (1) {
        let cur = pq.dequeue().element;
        sum -= cur;
        if (cur == 1 || sum == 1) return 1;
        if (cur < sum || sum == 0 || cur % sum == 0) return 0;
        cur %= sum;
        sum += cur;
        pq.enqueue(cur);
    }

};