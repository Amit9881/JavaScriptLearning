function counter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count }
    };
};

let mark = counter(0);
mark.increment();
mark.increment();
console.log(mark.get());//2
mark.decrement();
console.log(mark.get());//1