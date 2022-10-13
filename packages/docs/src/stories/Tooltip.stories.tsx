import {
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@amanda-santos-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'This is the tooltip text',
    side: 'bottom',
  },
  argTypes: {
    triggerElement: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const TooltipWithButton: StoryObj<TooltipProps> = {
  args: {
    triggerElement: (
      <Button onClick={() => {}} size="md" variant="primary">
        Hover me
      </Button>
    ),
  },
}

export const TooltipWithText: StoryObj<TooltipProps> = {
  args: {
    triggerElement: <Text as="span">Hover me</Text>,
  },
}

export const TooltipOnRightSide: StoryObj<TooltipProps> = {
  args: {
    triggerElement: (
      <Button onClick={() => {}} size="md" variant="primary">
        Hover me
      </Button>
    ),
    side: 'right',
  },
}
