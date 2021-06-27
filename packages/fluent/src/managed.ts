// tracing: off

import type * as T from "@effect-ts/core/Effect"
import type { Cause } from "@effect-ts/core/Effect/Cause"
import type * as M from "@effect-ts/core/Effect/Managed"

declare module "@effect-ts/system/Managed/managed" {
  export interface Managed<R, E, A> {
    /**
     * @rewrite pipe from "smart:pipe"
     */
    pipe<Self, Ret>(this: Self, f: (self: Self) => Ret): Ret

    /**
     * @rewrite as_ from "@effect-ts/core/Effect/Managed"
     */
    as<RX, EX, AX, B>(
      this: M.Managed<RX, EX, AX>,
      b: B,
      __trace?: string
    ): M.Managed<RX, EX, B>

    /**
     * @rewrite map_ from "@effect-ts/core/Effect/Managed"
     */
    map<RX, EX, AX, B>(
      this: M.Managed<RX, EX, AX>,
      f: (a: AX) => B,
      __trace?: string
    ): M.Managed<RX, EX, B>

    /**
     * @rewrite chain_ from "@effect-ts/core/Effect/Managed"
     */
    chain<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (a: AX) => M.Managed<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, EX | E2, B>

    /**
     * @rewrite tapM_ from "@effect-ts/core/Effect/Managed"
     */
    tap<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (a: AX) => T.Effect<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, EX | E2, AX>

    /**
     * @rewrite tap_ from "@effect-ts/core/Effect/Managed"
     */
    tap<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (a: AX) => M.Managed<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, EX | E2, AX>

    /**
     * @rewrite tapError_ from "@effect-ts/core/Effect/Managed"
     */
    tapError<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (e: EX) => M.Managed<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, EX | E2, AX>

    /**
     * @rewrite tapCause_ from "@effect-ts/core/Effect/Managed"
     */
    tapCause<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (e: Cause<EX>) => M.Managed<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, EX | E2, AX>

    /**
     * @rewrite tapBoth_ from "@effect-ts/core/Effect/Managed"
     */
    tapBoth<RX, EX, AX, R2, E2, B, R3, E3, C>(
      this: M.Managed<RX, EX, AX>,
      f: (e: EX) => M.Managed<R2, E2, B>,
      g: (e: AX) => M.Managed<R2, E3, C>,
      __trace?: string
    ): M.Managed<RX & R2 & R3, EX | E2 | E3, AX>

    /**
     * @rewrite catchAll_ from "@effect-ts/core/Effect/Managed"
     */
    catchAll<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (e: EX) => M.Managed<R2, E2, B>,
      __trace?: string
    ): M.Managed<RX & R2, E2, AX | B>

    /**
     * @rewrite use_ from "@effect-ts/core/Effect/Managed"
     */
    use<RX, EX, AX, R2, E2, B>(
      this: M.Managed<RX, EX, AX>,
      f: (a: AX) => T.Effect<R2, E2, B>,
      __trace?: string
    ): T.Effect<RX & R2, EX | E2, B>
  }
}
