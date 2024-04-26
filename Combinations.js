var combine = function(n, k) {
    const result = [];
    backtrack([], 1);

    function backtrack(current, start) {
        if(current.length === k){
            result.push([...current]);
            return;
        }

        for(let i = start; i <= n; i++){
            current.push(i);
            backtrack(current, i + 1);
            current.pop();
        }
    }
    return result;
};

//Example usage
console.log(combine(4, 2));
console.log(combine(1, 1));