<template>
  <p>The job id is {{ id }}</p>
  <div v-if="dataReady">
    <p>{{ job.title }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading.....</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
      dataReady: false,
    };
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/jobs/' + this.id);
    const result = await res.json();
    this.job = result;
    this.dataReady = true;
  },
  // mounted() {
  //   fetch('http://localhost:3000/jobs/' + this.id)
  //     .then((res) => res.json())
  //     .then((data) => (this.job = data))
  //     .catch((err) => console.log(err.message));
  // },
  updated() {
    console.log('ss', this.job);
  },
};
</script>

<style></style>
