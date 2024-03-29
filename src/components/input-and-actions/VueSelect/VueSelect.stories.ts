import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import VueSelect from './VueSelect.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import {
  BadgeStatusValues,
  HorizontalDirectionValues,
  ShirtSizeValues,
  VerticalDirectionValues,
} from '~/components/prop-types';

export default {
  title: 'Input & Actions/Select',
  component: VueSelect,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
    size: {
      options: ShirtSizeValues,
      control: { type: 'select' },
    },
    alignXMenu: {
      options: HorizontalDirectionValues,
      control: { type: 'select' },
    },
    alignYMenu: {
      options: VerticalDirectionValues,
      control: { type: 'select' },
    },
    badgeStatus: {
      options: BadgeStatusValues,
      control: { type: 'select' },
    },
  },
};

const Template: Story = (args) => ({
  components: {
    VueSelect,
    ComponentDocs,
    VueStack,
    VueInline,
    VueText,
  },
  data(): any {
    return {
      model: true,
    };
  },
  setup() {
    const model = ref(null);
    return {
      args,
      model,
    };
  },
  template: `<component-docs
      component-name="Select"
      usage="Select lets users choose one option from an options menu.
    Consider select when you have 4 or more options, to avoid cluttering the interface.
    Different from dropdown menu because it is used for data entry in forms."
      story="Display select component with all properties. Please interact with the select to see different states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    
    <vue-inline>
      <vue-select
          v-bind="args"
          v-model="model"
      />
    </vue-inline>
  </vue-stack>
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'select',
  name: 'select',
  label: 'Label',
  hideLabel: false,
  hideDescription: false,
  required: true,
  validation: 'required',
  disabled: false,
  items: [
    { label: 'Trigger validation', value: '' },
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ],
  placeholder: 'Please select an option',
  description: 'Description',
  errorMessage: 'Error message',
  duration: 250,
  alignXMenu: 'left',
  alignYMenu: 'bottom',
  size: 'md',
  multiSelect: false,
  badgeStatus: 'info',
};
