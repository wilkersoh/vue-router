<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: 'Cool 1', details: 'details 01' },
        { id: 2, title: 'Cool 2', details: 'details 02' },
        { id: 3, title: 'Cool 3', details: 'details 03' },
      ],
    };
  },
};
</script>

<style></style>
