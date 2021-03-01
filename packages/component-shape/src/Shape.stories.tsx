import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { treasuryColors } from '@mui-treasury/theme-treasury';
import { Shape, ShapeProps } from './Shape';

import Add from '@material-ui/icons/Add';

export default {
  title: 'Component/Shape',
  component: Shape,
  argTypes: {
    palette: {
      control: {
        type: 'select',
        options: Object.keys(treasuryColors),
      },
    },
    size: {
      control: 'text',
    },
    classes: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Palette: Story<ShapeProps> = args => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize}>
      <Add fontSize="large" />
    </Shape>
  );
};
Palette.args = {
  // palette: 'primary',
};

export const Solid: Story<ShapeProps> = args => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize}>
      <Add fontSize="large" />
    </Shape>
  );
};
Solid.args = {
  fill: 'solid',
};

export const Soft: Story<ShapeProps> = args => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize}>
      <Add fontSize="large" />
    </Shape>
  );
};
Soft.args = {
  fill: 'soft',
  palette: 'error',
};

export const Circle: Story<ShapeProps> = args => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize}>
      <Add fontSize="large" />
    </Shape>
  );
};
Circle.args = {
  circular: true,
  fill: 'solid',
};

export const Outlined: Story<ShapeProps> = args => {
  const parsedSize = args.size ? Number(args.size) || args.size : undefined;
  return (
    <Shape {...args} size={parsedSize}>
      <Add fontSize="large" />
    </Shape>
  );
};
Outlined.args = {
  outlined: true,
};

export const Sizes: Story<ShapeProps> = args => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Shape {...args} size={20}>
        <Add fontSize="small" />
      </Shape>
      <Shape {...args}>
        <Add />
      </Shape>
      <Shape {...args} size={'3rem'}>
        <Add fontSize="large" />
      </Shape>
    </div>
  );
};
Sizes.args = {
  fill: 'solid',
};
Sizes.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
};
