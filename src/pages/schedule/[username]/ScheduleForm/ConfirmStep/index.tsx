import {
  Button,
  Text,
  TextArea,
  TextInput,
} from '@design-system-experience/react'
import {
  ConfirmStepActions,
  ConfirmStepContainer,
  ConfirmStepHeader,
} from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmStepContainer as="form" onSubmit={handleConfirmScheduling}>
      <ConfirmStepHeader>
        <Text>
          <CalendarBlank />
          02 de Fevereiro de 2024
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </ConfirmStepHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="johndoe@example.com" />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <ConfirmStepActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </ConfirmStepActions>
    </ConfirmStepContainer>
  )
}
