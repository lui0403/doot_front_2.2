export const state = () => ({
    list: []
})

let time = new Date().toLocaleDateString();
export const mutations = {
    add(state, text) {
        state.list.push({
            text: text,
            time: time,
            done: false
        })
    }
}