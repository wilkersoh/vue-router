<template>
<div>
  <div>
    <pre>
    {{ JSON.stringify(formValues, null, 2) }}
  </pre
    >
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea
        name="profile"
        id="profile"
        cols="30"
        rows="10"
        v-model="formValues.profileSummary"
      />
    </div>
    <div>
      <label for="country">Country</label>
      <select name="country" id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="malaysia">Malaysia</option>
        <option value="singapore">Singapore</option>
        <option value="taiwan">Taiwan</option>
      </select>
    </div>
    <div>
      <label for="location">Job Location</label>
      <select
        name="location"
        id="location"
        multiple
        v-model="formValues.jobLocation"
      >
        <option value="malaysia">Malaysia</option>
        <option value="singapore">Singapore</option>
        <option value="taiwan">Taiwan</option>
      </select>
    </div>
    <div class="remote">
      <input
        type="checkbox"
        name="remoteWork"
        id="remoteWork"
        true-value="yes"
        false-value="no"
        v-model="formValues.remoteWork"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div class="group-checkbox">
      <label>Skill set</label>
      <div>
        <input
          type="checkbox"
          id="html"
          value="html"
          v-model="formValues.skillset"
        />
        <label for="html">Html</label>
        <input
          type="checkbox"
          id="css"
          value="css"
          v-model="formValues.skillset"
        />
        <label for="css">Css</label>
        <input
          type="checkbox"
          id="javascript"
          value="javascript"
          v-model="formValues.skillset"
        />
        <label for="javascript">Javascript</label>
      </div>
    </div>
    <div class="group-checkbox">
      <label>Years of Experience</label>
      <div>
        <input
          type="radio"
          id="0-2"
          value="0-2"
          v-model="formValues.yearsOfExperience"
        />
        <label for="0-2">0-2</label>
        <input
          type="radio"
          id="2-4"
          value="2-4"
          v-model="formValues.yearsOfExperience"
        />
        <label for="2-4">2-4</label>
        <input
          type="radio"
          id="4-10"
          value="4-10"
          v-model="formValues.yearsOfExperience"
        />
        <label for="4-10">4-10</label>
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'FormVue',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: 'no',
        skillset: [],
        yearsOfExperience: '',
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log('this.formValues :>> ', this.formValues);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + labal {
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
}
.remote {
  display: flex;
}
.group-checkbox {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.group-checkbox input,
.group-checkbox label {
  display: inline-block;
}
</style>
