/**
 * store/counter.js
 * このファイル名がcounter.jsなので、モジュール名はcounterになる。
 */
export const state = () => ({
	count: 123
})


export const mutations = {
	increment (state, v) {
		state.count += v
	}
}