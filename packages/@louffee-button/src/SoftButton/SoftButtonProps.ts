import { LouTheme } from '@louffee/canada-style-system'
import ButtonProps from '../ButtonProps'

interface SoftButtonProps extends ButtonProps {
  isLoading?: boolean

  color?: Exclude<keyof typeof LouTheme['colors'], 'white' | 'grey' | 'black'>
}

export default SoftButtonProps
