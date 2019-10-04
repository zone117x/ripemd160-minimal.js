export default class RIPEMD160 {
    _block: number[];
    _blockSize: number;
    _blockOffset: number;
    _length: number[];
    _finalized: boolean;
    _a: number;
    _b: number;
    _c: number;
    _d: number;
    _e: number;
    constructor();
    update(data: number[]): this;
    _update(): void;
    digest(): number[];
    _digest(): number[];
}
//# sourceMappingURL=index.d.ts.map