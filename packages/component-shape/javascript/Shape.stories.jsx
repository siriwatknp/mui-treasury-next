import React from 'react';
import { treasuryPalette } from '@mui-treasury/theme-treasury';
import { Shape } from './Shape';
import Add from '@material-ui/icons/Add';
export default {
    title: 'Component/Shape',
    component: Shape,
    argTypes: {
        palette: {
            control: {
                type: 'select',
                options: Object.keys(treasuryPalette),
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
    args: {
        fill: 'text',
    },
    parameters: {
        layout: 'centered',
    },
};
export const Palette = args => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    console.log(parsedSize);
    return (<Shape {...args} size={parsedSize}>
      <Add fontSize="large"/>
    </Shape>);
};
export const Solid = args => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize}>
      <Add fontSize="large"/>
    </Shape>);
};
Solid.args = {
    fill: 'solid',
};
export const Soft = args => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize}>
      <Add fontSize="large"/>
    </Shape>);
};
Soft.args = {
    fill: 'soft',
    palette: 'error',
};
export const Circle = args => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize}>
      <Add fontSize="large"/>
    </Shape>);
};
Circle.args = {
    circular: true,
    fill: 'solid',
};
export const Outlined = args => {
    const parsedSize = args.size ? Number(args.size) || args.size : undefined;
    return (<Shape {...args} size={parsedSize}>
      <Add fontSize="large"/>
    </Shape>);
};
Outlined.args = {
    outlined: true,
};
export const Sizes = args => {
    return (<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Shape {...args} size={20}>
        <Add fontSize="small"/>
      </Shape>
      <Shape {...args}>
        <Add />
      </Shape>
      <Shape {...args} size={'3rem'}>
        <Add fontSize="large"/>
      </Shape>
    </div>);
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
