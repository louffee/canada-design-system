import type * as React from 'react'

import type BackdropBlur from './BackdropBlur'

type HTMLDivElementAttributes = React.HTMLAttributes<HTMLDivElement>

interface BackdropProps extends HTMLDivElementAttributes {
  /**
   * Boolean which determines whether the backdrop will apply a blur effect to
   * contain the content behind it or not.
   *
   * @default false
   */
  isBlurry?: boolean

  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and
   * its descendants or flex items. Overlapping elements with a larger z-index cover
   * those with a smaller one.
   *
   * **Syntax**: `auto | <integer>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: React.CSSProperties['zIndex']

  /**
   * Number from 1 to 10 which determine the degree of blur applied to the backdrop.
   *
   * **Warning**: This property only takes effect whether the {@link isBlurry} is
   * set to `true`.
   *
   * @see {@link BackdropBlur}
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   *
   * @default 2
   */
  blur?: BackdropBlur
}

export default BackdropProps
