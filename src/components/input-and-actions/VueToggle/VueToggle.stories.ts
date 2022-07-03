import VueToggle from './VueToggle.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Input & Actions/Toggle',
  component: VueToggle,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
  },
};

const Template = (args) => ({
  components: {
    VueToggle,
    ComponentDocs,
    VueInline,
    VueText,
  },
  data(): any {
    return {
      model: true,
    };
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Toggle"
      usage="Allows users to choose between two mutually exclusive options. There is always a default value and settings should be saved and take into effect immediately."
      story="Show default toggle. Please interact with the toggle to see different states."
  >
  <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
    <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
    <vue-toggle
        :id="args.id"
        v-model="model"
        :name="args.name"
        :label="args.label"
        :description="args.description"
        :required="args.required"
        :disabled="args.disabled"
    />
  </vue-inline>
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'toggle',
  name: 'toggle',
  label: 'Toggle me',
  description: 'Get notified when someone comments on your posting.',
  required: true,
  disabled: false,
};