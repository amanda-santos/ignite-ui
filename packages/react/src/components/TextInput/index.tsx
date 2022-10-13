import { ComponentProps, ReactElement } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = ({
  prefix,
  ...props
}: TextInputProps): ReactElement => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
