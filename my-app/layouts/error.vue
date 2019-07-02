<template>
  <div class="layout-error">
    <section class="error">
      <h2 class="section-title">404</h2>
      <ArticleBody>
        <h3>名前はまだ無い</h3>
        <p>アクセスされたページは存在しないか、すでに削除されています。</p>
      </ArticleBody>
    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
    }
  }
</script>

<style scoped lang="scss">
  // h2は_section-title.scssに記述
  // .error {
  //   h2 {
  //     display: flex;
  //     align-items: center;
  //     margin: 50px 0 30px;
  //     font-size: 30px;

  //     &::after {
  //       content: '';
  //       display: block;
  //       flex: 1;
  //       height: 1px;
  //       margin-left: 10px;
  //       background-color: $color-black;
  //     }
  //   }
  // }
</style>