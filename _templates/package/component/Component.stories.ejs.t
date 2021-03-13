---
to: packages/<%=name%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
<%= Name=h.toName(name) %>import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%=Name%>, <%=Name%>Props } from './<%=Name%>';

export default {
  title: 'Component/<%=Name%>',
  component: <%=Name%>,
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} as Meta;

// export const Demo: Story<<%=Name%>Props> = args => {
//   return (
//     <<%=Name%> {...args}>
//       Children
//     </<%=Name%>>
//   );
// };

