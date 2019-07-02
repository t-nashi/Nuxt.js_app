<template>
  <div class="page-index">
    <pre>{{ post }}{{ aaa }}</pre>
    <div>
      <button @click='inc'>{{value}}</button>
    </div>
    <section class="about">
      <h2 class="section-title">夏目漱石</h2>
      <ArticleBody>
        <img src="~/assets/images/portrait.png" alt="夏目漱石">
        <p>日本の小説家、評論家、英文学者。本名、夏目 金之助（なつめ きんのすけ）。江戸の牛込馬場下横町（現在の東京都新宿区喜久井町）出身。俳号は愚陀仏。詳細は<a href="<https://ja.wikipedia.org/wiki/夏目漱石>" target="_blank">ウィキペディア</a>を。</p>
      </ArticleBody>
    </section>

    <!-- <article class="content" v-html="post"></article> -->

    <section class="works">
      <pre></pre>
      <h2>代表作</h2>
      <ArticleBody>
        <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
        <ul>
          <li>『吾輩は猫である』（1905年）</li>
          <li>『坊っちゃん』（1906年）</li>
          <li>『草枕』（1906年）</li>
          <li>『三四郎』（1908年）</li>
        </ul>
      </ArticleBody>
    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';
  const moduleName = 'counter' // store/counter.js

  export default {

    // name: 'xxxxx',

    // 依存関係
    components: {
      ArticleBody
    },

    // フィルター
    // filters: {
    //   capitalize(value) {
    //     if (!value) return ''
    //     value = value.toString()
    //     return value.charAt(0).toUpperCase() + value.slice(1)
    //   }
    // },

    // オプションをマージ
    // mixins: [myMixin],

    // コンポーネントへのインタフェース
    // props: {
    //   items: {
    //     type: Array,
    //     default: [],
    //     required: true
    //   }
    // },

    // ローカル リアクティブプロパティ
    // data() {
    //   return {
    //     count: 0,
    //     message: 'Hello'
    //   }
    // },

    // 関数として実装、参照時はプロパティとして機能
    computed: {
      value() {
        return this.$store.state[moduleName].count

        // 以下でも同じ
        // return this.$store.state.counter.count
      },
      aaa() {
        // return require(`~/assets/json/data.json`)
        return this.$store.state.json.data
      }
    },

    // // イベント
    // watch: {
    //   '$route' (to, from) {
    //     console.log('route changed')
    //   }
    // },

    // created() {
    //   console.log('created')
    // },

    // mounted() {
    //   console.log('mounted')
    // },

    // リアクティブではないプロパティ
    methods: {
      inc: function () {
        const mutationName = 'increment'  // sotre/counter.jsの中に書いたmutationsの中にある関数名
        this.$store.commit(`${moduleName}/${mutationName}`, 1)

        // 以下でも同じ
        // this.$store.commit(`counter/increment`, 1)
      }
    },











    asyncData({ params }) {
      return {
        // post: require(`~/posts/awesome-cooking.json`)
        post: require(`~/assets/json/data.json`)
        // jsonAll: store.getters['json/getAll']
      }
    }
    // asyncData ({ store }) {
    //   jsonAll: store.getters['json/getAll']
    // }
  }
</script>

<style scoped lang="scss">
  // @nuxtjs/style-resourcesプラグインインストール後にnuxt.config.js|modules・styleResources内に記述したことにより不要になった
  // @import "~assets/scss/variables";

  // h2は_section-title.scssに記述
  // .about,
  // .works {
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