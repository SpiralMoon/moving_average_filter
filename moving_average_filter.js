import * as buffer from "buffer";

class MovingAverageFilter {

    _size;
    _buffer;

    /**
     * Initialize MAF
     *
     * @param _size  buffer window size
     */
    constructor(size) {

        if (typeof size !== 'number') {
            throw new Error('size must be number.');
        }

        this._size = size;
        this._buffer = [];
    }

    /**
     * Push data to buffer
     *
     * @param data
     */
    push(data) {

        if (typeof data !== 'number') {
            throw new Error('data must be number.');
        }

        this._buffer.push(data);

        if (this._size < this._buffer.length) {
            // remove first element
            this._buffer.splice(0, 1);
        }

        return this.average();
    }

    /**
     * Get average of buffer
     *
     * @returns {number}
     */
    average() {

        let count = 0;
        let sum = 0;

        for (let i = 0; i < this._buffer.length; i++) {

            const element = this._buffer[i];

            if (Number.isFinite(element) && !Number.isNaN(element)) {
                count++;
                sum += element;
            }
        }

        return sum / count;
    }
}

export default MovingAverageFilter;