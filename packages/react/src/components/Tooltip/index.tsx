import { ComponentProps, ReactNode } from 'react'
import * as TooltipComponent from '@radix-ui/react-tooltip'

import { TooltipArrow, TooltipContent } from './styles'
import { Text } from '../Text'

export type TooltipProps = ComponentProps<typeof TooltipContent> & {
  text: string
  triggerElement: ReactNode
}

export const Tooltip = ({ triggerElement, text, ...props }: TooltipProps) => {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root>
        <TooltipComponent.Trigger asChild>
          {triggerElement}
        </TooltipComponent.Trigger>
        <TooltipContent {...props}>
          <Text size="sm">{text}</Text>
          <TooltipArrow height={8} width={16} />
        </TooltipContent>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
