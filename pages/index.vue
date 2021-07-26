<template >
<div class="container">
    <div class="side">
        <div class="user active">
            <div class="icon">
                <img src="@/assets/img/a.png" alt="サラリーマン">
            </div>
            <div class="user-info">
                <p class="username">経営者A</p>
                <p class="last-message" id="last-message">{{}}</p>
            </div>
        </div>
    </div>
    <div class="chat-area" id="chat-area">
      <div v-for="data in msg" :key="data" class="unify">
          <div class="mine messages">
            <div class="last message">
            {{ data.text }}
            </div>
            <div class="time">
              {{ data.time }}
            </div>
          </div>
          <div class="other messages">
            <div>
              <span>経営者A</span>
            <div class="message">
            {{ data.text }}
            </div>
            <div class="time">
              {{ data.time }}
            </div>
            </div>
          </div>
      </div>
        <div class="message-area">
            <div class="message-area-text">
                <input type="text" id="message" placeholder="ENTERキーで送信(上限100文字)" maxlength="100" v-model="message" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter" @keydown.enter.shift="keyEnterShift">
            </div>
            <div class="message-area-button">
                <button id="send" @click="submit">送信</button>
            </div>
        </div>
    </div>
</div>
</template>

<script >
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      message: '',
      messages: [],
      keyDowncode: 0
    }
  },
  computed: {
    msg () {
      return this.$store.state.messages.list
    }
  },
  methods: {
    keyDownEnter(e){
        // console.log(e.keyCode)
      this.keyDownCode = e.keyCode
      e.preventDefault()
    },
    keyUpEnter(e){
        if (this.keyDownCode === 229){
            return
      }
      e.preventDefault()
      console.log(e.keyCode)
      this.submit(e)
    },
    keyEnterShift(){
      // document.getElementById("message").value='\n'
      console.log('shift,enter')
    },
    submit: function(e) {
      // console.log(message)
      // console.log(time)
      // if (!this.message || this.message.match(/\S/g)){
        //     this.message = ''
      //   return
      // }

      // this.message = this.message.trim()

      this.$store.commit('messages/add', e.target.value)
    },
    scroll() {
      document.getElementById("chat-area").style.top = "100px";
    }
    }
}

</script>