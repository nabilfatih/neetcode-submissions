class LRUCache {
    readonly cache = new Map<number, number>()
    readonly capacity: number = 0
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.cache = new Map()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(!this.cache.get(key)) {
            return -1
        }

        const value = this.cache.get(key)

        // map store by order, we keep the least use to be latest
        this.cache.delete(key)
        this.cache.set(key, value)
        return this.cache.get(key)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        // check if cache our of size
        if(this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
    }
}
