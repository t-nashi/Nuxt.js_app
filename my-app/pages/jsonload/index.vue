<template>
  <div class="page-about">
    <section class="about">
      <h2 class="section-title">外部json読み込み</h2>
      <ArticleBody>
        <h3>◆ 全体</h3>
        <pre>{{ jsonData }}</pre>

        <h3>◆ 一部抽出<small>（1行目のid）</small></h3>
        <pre>{{ jsonData[0].id }}</pre>

        <h3>◆ length</h3>
        <pre>{{ jsonData.length }}</pre>

        <h3>◆ v-for</h3>
        <p v-for="item in jsonData">{{ item.id }}{{ item.name }}</p>

      </ArticleBody>

    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
    },
    computed: {
      jsonData() {
        // store/json.jsのdata利用
        return this.$store.state.json.data
      }
    },
  }
</script>
