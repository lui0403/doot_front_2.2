export const state = () => {
    return {
      list: [
        {
          message: "a",
          time: "2021/6/13 22:35:59",
          name: "経営者A",
          who: "other",
          room: 1
        }
        // {
        //   message: "v",
        //   time: "2021/6/13 22:35:59",
        //   name: "経営者B",
        //   who: "other",
        //   room: 2
        // }
      ]
    };
}

let time = new Date().toLocaleDateString();
export const mutations = {
    setMessage(state, message) {
        state.list.push({ message: message, time: time })
    }
}

// export const getters = {
//     getMessages: (state) => {
//         return state.getMessages
//     }
// }

// export const actions = {

// }