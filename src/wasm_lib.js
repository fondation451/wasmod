/* eslint-disable */ 
let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Int32Array} arr1
* @returns {number}
*/
export function sum(arr1) {
    const ptr0 = passArray32ToWasm0(arr1, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.sum(ptr0, len0);
    return ret;
}



const bytes = Uint8Array.from(atob("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"), (c) => c.charCodeAt(0));

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, {});
__wbg_set_wasm(wasmInstance.exports);