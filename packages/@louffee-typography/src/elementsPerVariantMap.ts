import * as React from 'react'

import type TypographyVariant from './TypographyVariant'

const elementsPerVariantMap: { [K in TypographyVariant]: React.ElementType } = {
  bodyLarge: 'p',
  bodyMedium: 'p',
  bodySmall: 'small',
  displayLarge: 'h1',
  displayMedium: 'h2',
  displaySmall: 'h3',
  headlineLarge: 'h4',
  headlineMedium: 'h5',
  headlineSmall: 'h6',
  labelLarge: 'span',
  labelMedium: 'span',
  labelSmall: 'span',
  titleLarge: 'h4',
  titleMedium: 'h5',
  titleSmall: 'h6',
}

export default elementsPerVariantMap
