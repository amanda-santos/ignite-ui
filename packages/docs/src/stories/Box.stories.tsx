import { Box, BoxProps, Text } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          ea at iusto nisi! Assumenda cum impedit, aliquam voluptatum nesciunt
          accusamus esse nulla aspernatur laudantium culpa, nostrum voluptatibus
          magni eos sapiente!
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          ea at iusto nisi! Assumenda cum impedit, aliquam voluptatum nesciunt
          accusamus esse nulla aspernatur laudantium culpa, nostrum voluptatibus
          magni eos sapiente!
        </Text>
      </>
    ),
    as: "section",
  },
};
