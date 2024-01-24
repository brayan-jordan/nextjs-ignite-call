import { styled, Heading, Text } from '@design-system-experience/react'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  marginLeft: 'auto',
  height: '100vh',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    /* Temp */
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  /* Temp */
  '@media(max-width: 600px)': {
    display: 'none',
  },
})
