// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonContentComponent } from './button-content.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button-content',
  component: ButtonContentComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonContentComponent> = (args: ButtonContentComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
