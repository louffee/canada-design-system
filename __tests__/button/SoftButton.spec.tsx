import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider, LouTheme, toRem } from '@louffee/canada-style-system'

import SoftButton from '../../packages/@louffee-button/src/SoftButton/SoftButton'

describe('Test SoftButton', () => {
  it('should render component', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>,
    )

    const buttonElement = await findByRole('button')

    expect(buttonElement).toBeInTheDocument()
  })

  it('should listen to onClick event handler', async () => {
    const handleClick = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onClick={handleClick}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled()
  })

  it('should listen to onMouseEnter event handler', async () => {
    const handleMouseEnter = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onMouseEnter={handleMouseEnter}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.mouseEnter(buttonElement)
    expect(handleMouseEnter).toHaveBeenCalled()
  })

  it('should listen to onMouseLeave event handler', async () => {
    const handleMouseLeave = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onMouseLeave={handleMouseLeave}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.mouseLeave(buttonElement)
    expect(handleMouseLeave).toHaveBeenCalled()
  })

  it('should listen to onFocus event handler', async () => {
    const handleFocus = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onFocus={handleFocus}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.focus(buttonElement)
    expect(handleFocus).toHaveBeenCalled()
  })

  it('should listen to onBlur event handler', async () => {
    const handleBlur = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onBlur={handleBlur}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.blur(buttonElement)
    expect(handleBlur).toHaveBeenCalled()
  })

  it('should listen to onKeyDown event handler', async () => {
    const handleKeyDown = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onKeyDown={handleKeyDown}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.keyDown(buttonElement)
    expect(handleKeyDown).toHaveBeenCalled()
  })

  it('should listen to onKeyUp event handler', async () => {
    const handleKeyUp = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onKeyUp={handleKeyUp}>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    fireEvent.keyUp(buttonElement)
    expect(handleKeyUp).toHaveBeenCalled()
  })

  it('should render with "small" size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size='small'>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({
      height: toRem(24),
    })
  })

  it('should render with "medium" (default) size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size='medium'>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({
      height: toRem(32),
    })
  })

  it('should render with "large" size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size='large'>My button</SoftButton>
      </ThemeProvider>,
    )
    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({
      height: toRem(40),
    })
  })

  it('should have the correct background color', async () => {
    const expectedBackgroundColor = LouTheme.colors.primary[90]

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>,
    )

    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({ 'background-color': expectedBackgroundColor })
  })

  it('should have the correct foreground color', async () => {
    const expectedForegroundColor = LouTheme.colors.primary.main

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>,
    )

    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({ color: expectedForegroundColor })
  })

  it('should have matching background and border colors', async () => {
    const expectedBackgroundAndBorderColor = LouTheme.colors.primary[90]

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>,
    )

    const buttonElement = await findByRole('button')

    expect(buttonElement).toHaveStyle({
      'background-color': expectedBackgroundAndBorderColor,
      'border-color': expectedBackgroundAndBorderColor,
    })
  })
})
