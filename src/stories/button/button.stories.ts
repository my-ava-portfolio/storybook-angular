// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { LinkComponent } from '../link/link.component';
import { CommonModule } from '@angular/common';



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
  },
  subcomponents: { LinkComponent }, //👈 Adds the ListItem component as a subcomponent

  decorators: [
    moduleMetadata({
      declarations: [LinkComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Simple.args = {
  label: 'Button',
};

export const OneItem: Story = () => ({
  props: {
    args,
  },
  template: `
    <app-list>
      <app-list-item></app-list-item>
    </app-list>
  `,
});

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
