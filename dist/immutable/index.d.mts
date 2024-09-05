import { Middleware, SWRHook } from '../_internal/index.mjs';

declare const immutable: Middleware;
declare const useSWRImmutable: SWRHook;

export { useSWRImmutable as default, immutable };
