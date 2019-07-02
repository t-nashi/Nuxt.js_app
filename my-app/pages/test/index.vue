<template>
  <article class="content" v-html="post"></article>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      // post: require(`~/posts/awesome-cooking.json`)
      post: require(`~/assets/json/data.json`)
    }
  }
}
</script>
