import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image
        width="87"
        height="30"
        href={isDark ? 'images/slime/LogoTextNewDark.png' : 'images/slime/LogoTextNewWhite.png'}
      />
    </Svg>
  )
}

export default Logo
