<template>
  <header class="header">
    <div class="header-inner">
      <h1><n-link to="/">my-portfolio</n-link></h1>
      <p><n-link to="about">自己紹介</n-link></p>
      <p><n-link to="jsonload">json読み込み</n-link></p>
      <p><n-link to="hogehoge">エラー</n-link></p>
    </div>
  </header>
</template>
<style scoped lang="scss">
  // @nuxtjs/style-resourcesプラグインインストール後にnuxt.config.js|modules・styleResources内に記述したことにより不要になった
  // @import "~assets/scss/variables";

  .header {
    background-color: $color-gray;
  }

  .header-inner {
    height: 60px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: inherit;
    }
  }
</style>