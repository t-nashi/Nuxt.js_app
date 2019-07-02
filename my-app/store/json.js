// store/json.js
// このファイル名が json.js なので、モジュール名は json になる。

// jsonファイルの読み込み
import jsonData from '~/assets/json/data.json'

// 状態管理
export const state = () => ({
  data: jsonData
})

// getters
export const getters = {
  getAll (state) {
    return state.data
  }
}
