class MinStack {
    readonly stack: number[] = []
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let min = this.stack[0]

        for(let i = 1; i < this.stack.length; i++) {
            min = Math.min(min, this.stack[i])
        }

        return min
    }
}
