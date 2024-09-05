import { Middleware, SWRHook } from '../_internal/index.js';

declare const immutable: Middleware;
declare const useSWRImmutable: SWRHook;

export { useSWRImmutable as default, immutable };
