<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'OtherPage', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading in jobs</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/jobs');
    const result = await res.json();
    this.jobs = result;
  },
};
</script>
