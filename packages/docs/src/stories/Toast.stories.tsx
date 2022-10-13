import { Toast, ToastProps } from '@amanda-santos-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'This is a toast title',
    description: 'This is a toast description',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
