export default class RIPEMD160 {
    _block: Uint8Array;
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
    update(data: Uint8Array): this;
    _update(): void;
    digest(): Uint8Array;
    _digest(): Uint8Array;
}
//# sourceMappingURL=index.d.ts.map