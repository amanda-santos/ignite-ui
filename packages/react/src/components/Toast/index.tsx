import { ComponentProps, ReactElement } from 'react'
import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastContainer,
  StyledHeading,
  StyledText,
  ToastCloseButton,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title?: string
  description: string
}

export const Toast = ({
  title,
  description,
  ...props
}: ToastProps): ReactElement => {
  return (
    <ToastComponent.Provider>
      <ToastContainer {...props}>
        <ToastComponent.Title>
          <StyledHeading size="sm">{title}</StyledHeading>
        </ToastComponent.Title>
        <ToastComponent.Description>
          <StyledText size="md">{description}</StyledText>
        </ToastComponent.Description>
        <ToastCloseButton aria-label="Close">
          <span aria-hidden>
            <X size={24} />
          </span>
        </ToastCloseButton>
      </ToastContainer>

      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
