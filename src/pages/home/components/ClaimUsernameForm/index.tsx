import { Button, TextInput } from '@design-system-experience/react'
import { FormContainer } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClainUsernameForm() {
  return (
    <FormContainer as="form">
      <TextInput
        containerProps={{ size: 'sm' }}
        prefix="ignite.com/"
        placeholder="seu-usuário"
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </FormContainer>
  )
}
