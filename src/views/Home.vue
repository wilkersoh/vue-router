<template>
  <div class="home">
    <h1>Home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, alias?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      mollitia doloribus eligendi autem velit soluta aliquam alias et error
      quod.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeRouteLeave(to, from, next) {
    if (false) {
      next(true);
    } else {
      const response = confirm(
        'You have not ready to paid yet, are you want to leave?'
      );
      console.log('am i here?');
      next(response);
    }
  },
  components: {},
};
</script>
