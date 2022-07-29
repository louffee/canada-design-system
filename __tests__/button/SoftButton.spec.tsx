import * as React from 'react'

import { render, fireEvent } from '@testing-library/react'

import { ThemeProvider, LouTheme, toRem } from '@louffee/style-system'

import SoftButton from '../../packages/@louffee-button/src/SoftButton/SoftButton'

describe('Test SoftButton', () => {
  it('should render component', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>
    )

    const buttonEl = await findByRole('button')

    expect(buttonEl).toBeInTheDocument()
  })

  it('should listen to onClick event handler', async () => {
    const handleClick = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onClick={handleClick}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.click(buttonEl)
    expect(handleClick).toHaveBeenCalled()
  })

  it('should listen to onMouseEnter event handler', async () => {
    const handleMouseEnter = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onMouseEnter={handleMouseEnter}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.mouseEnter(buttonEl)
    expect(handleMouseEnter).toHaveBeenCalled()
  })

  it('should listen to onMouseLeave event handler', async () => {
    const handleMouseLeave = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onMouseLeave={handleMouseLeave}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.mouseLeave(buttonEl)
    expect(handleMouseLeave).toHaveBeenCalled()
  })

  it('should listen to onFocus event handler', async () => {
    const handleFocus = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onFocus={handleFocus}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.focus(buttonEl)
    expect(handleFocus).toHaveBeenCalled()
  })

  it('should listen to onBlur event handler', async () => {
    const handleBlur = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onBlur={handleBlur}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.blur(buttonEl)
    expect(handleBlur).toHaveBeenCalled()
  })

  it('should listen to onKeyDown event handler', async () => {
    const handleKeyDown = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onKeyDown={handleKeyDown}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.keyDown(buttonEl)
    expect(handleKeyDown).toHaveBeenCalled()
  })

  it('should listen to onKeyUp event handler', async () => {
    const handleKeyUp = jest.fn()

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton onKeyUp={handleKeyUp}>My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    fireEvent.keyUp(buttonEl)
    expect(handleKeyUp).toHaveBeenCalled()
  })

  it('should render with "small" size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size="small">My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({
      height: toRem(24),
    })
  })

  it('should render with "medium" (default) size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size="medium">My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({
      height: toRem(32),
    })
  })

  it('should render with "large" size', async () => {
    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton size="large">My button</SoftButton>
      </ThemeProvider>
    )
    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({
      height: toRem(40),
    })
  })

  it('should have the correct background color', async () => {
    const expectedBackgroundColor = LouTheme.colors.primary[90]

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>
    )

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({ 'background-color': expectedBackgroundColor })
  })

  it('should have the correct foreground color', async () => {
    const expectedForegroundColor = LouTheme.colors.primary.main

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>
    )

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({ color: expectedForegroundColor })
  })

  it('should have matching background and border colors', async () => {
    const expectedBackgroundAndBorderColor = LouTheme.colors.primary[90]

    const { findByRole } = render(
      <ThemeProvider>
        <SoftButton>My button</SoftButton>
      </ThemeProvider>
    )

    const buttonEl = await findByRole('button')

    expect(buttonEl).toHaveStyle({
      'background-color': expectedBackgroundAndBorderColor,
      'border-color': expectedBackgroundAndBorderColor,
    })
  })
})
