// Type declarations for Three.js WebGPU / TSL extensions
// These sub-path exports are available in three@0.163+

declare module 'three/webgpu' {
  export * from 'three';
  export class WebGPURenderer {
    constructor(params?: any);
    init(): Promise<void>;
    render(scene: any, camera: any): void;
    renderAsync(): Promise<void>;
    setSize(width: number, height: number): void;
    setPixelRatio(ratio: number): void;
    dispose(): void;
    domElement: HTMLCanvasElement;
  }
  export class PostProcessing {
    constructor(renderer: any);
    outputNode: any;
    renderAsync(): Promise<void>;
  }
  export class MeshBasicNodeMaterial {
    constructor(params?: any);
    colorNode: any;
    transparent: boolean;
    opacity: number;
  }
  export const MathUtils: typeof import('three').MathUtils;
  export function uniform(value: any): any;
}

declare module 'three/tsl' {
  export function abs(a: any): any;
  export function screen(a: any, b: any): any;
  export function bloom(inputNode: any, strength?: number, radius?: number, threshold?: number): any;
  export function float(value: any): any;
  export function mod(a: any, b: any): any;
  export function mx_cell_noise_float(a: any): any;
  export function oneMinus(a: any): any;
  export function smoothstep(a: any, b: any, c: any): any;
  export function texture(tex: any, uv?: any): any;
  export function uniform(value: any): any;
  export function uv(): any;
  export function vec2(x: any, y?: any): any;
  export function vec3(x: any, y?: any, z?: any): any;
  export function pass(scene: any, camera: any): any;
  export function mix(a: any, b: any, c: any): any;
  export function add(a: any, b: any): any;
}

declare module 'three/examples/jsm/tsl/display/BloomNode.js' {
  export function bloom(inputNode: any, strength?: number, radius?: number, threshold?: number): any;
}
