import { Heading, Text } from '@design-system-experience/react'
import { Hero, HomeContainer, Preview } from './styles'

import previewImg from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClainUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClainUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImg}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </HomeContainer>
  )
}
