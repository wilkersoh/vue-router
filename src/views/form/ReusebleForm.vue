<template>
  <div>
    <h1>ReuseableForm component</h1>
    <div class="flex flex-col justify-center items-center">
      <p>use fieldset and legend 可以 幫助到 accessibility，用 firefox devtool's accessbility 可以看見</p>
      <fieldset class="flex mt-2">
        <legend>Input Component</legend>
        <BaseInput
          v-model="title"
          label="Titles"
          type="text"
        />
        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          error="show some error message"
        />
      </fieldset>
      <fieldset class="mt-2">
        <legend>Select component</legend>
        <BaseSelect
          :options="categories"
          v-model="category"
          label="Select a category"
          class="field"
        />

      </fieldset>
      <fieldset class="mt-2">
        <legend>Checkbox Component</legend>
        <BaseCheckbox
          v-model="extras.catering"
          label="Catering"
        />
        <BaseCheckbox
          v-model="extras.music"
          label="Music"
        />
      </fieldset>
      <div class="mt-2">
        <p>Radio Component</p>
        <BaseRadio
          v-model="pets"
          :value="1"
          label="Yes"
          name="pets"
        />
        <BaseRadio
          v-model="pets"
          :value="0"
          label="No"
          name="pets"
        />
      </div>
      <div class="mt-2">
        <p>Group radio Component with vertical </p>
        <BaseRadioGroup
          v-model="pets"
          name="pets"
          :options="petOptions"
          vertical
        />
      </div>
      <div class="mt-2">
        <p>Group radio Component with horizontal </p>
        <BaseRadioGroup
          v-model="pets"
          name="pets"
          :options="petOptions"
        />
      </div>
    </div>
    <pre class="mt-6">
      {{JSON.stringify(state, null, 2)}}
    </pre>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import  BaseInput from "./ReuseableInput/BaseInput";
import  BaseSelect from "./ReuseableInput/BaseSelect";
import  BaseCheckbox from "./ReuseableInput/BaseCheckbox";
import  BaseRadio from "./ReuseableInput/BaseRadio";
import  BaseRadioGroup from "./ReuseableInput/BaseRadioGroup";


export default {
  name: 'ReusebleForm',
  components: {BaseInput, BaseSelect, BaseCheckbox, BaseRadio, BaseRadioGroup},
  setup() {
    const state = reactive({
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        },
        categories: [
          'sustainability',
          'nature',
          'animal welfare',
          'housing',
          'education',
          'food',
          'community'
        ],
        petOptions: [
          { label: 'Yes', value: 1 },
          { label: 'No', value: 0 },
        ]
    })
    return {
      ...toRefs(state),
      state,
    }

  },
}
</script>
