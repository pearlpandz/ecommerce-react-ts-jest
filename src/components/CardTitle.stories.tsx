import { Meta, StoryObj } from "@storybook/react/*";
import CardTitle from "./CardTitle";

const meta: Meta<typeof CardTitle> = {
    component: CardTitle,
    title: 'Card Title',
    argTypes: {
        color: { control: { type: "select", options: ["dark", "light"] } },
    },
}

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        children: 'New text',
        color: 'light'
    },
    argTypes: {
        color: {
            control: {
                type: 'color'
            }
        }
    }
}