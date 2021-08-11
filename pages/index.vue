<template >
<div class="container">
    <div class="side">
        <div class="user active">
            <div class="icon">
                <img src="@/assets/img/a.png" alt="サラリーマン">
            </div>
            <div class="user-info">
                <p id="room" class="username">経営者A</p>
                <p class="last-message" id="last-message">{{}}</p>
            </div>
        </div>
    </div>
    <div class="chat-area" id="chat-area">
      <div v-for="(data, index) in messages" :key="index" class="unify">
        <div v-if="data.who == 'me' ">
          <div class="mine messages">
            <div class="last message">
            {{ data.message }}
            </div>
            <div class="time">
              {{ data.time }}
            </div>
          </div>
        </div>
        <div v-else-if="data.who == 'other'">
          <div class="other messages">
            <div>
              <span>経営者A</span>
            <div class="message">
            {{ data.message }}
            </div>
            <div class="time">
              {{ data.time }}
            </div>
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // partner: '',
      message: '',
      who: '',
      keyDowncode: 0
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages.list
    },
    // partner () {
    //   return this.$store.state.messages.list
    // },
    ...mapGetters({
      partner: 'messages/partner',
      room: 'messages/roomId'
    })
  },
  methods: {
    // ...mapMutations([
    //   'setMessage'
    // ]),
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
      //       this.message = ''
      //   return
      // }

      // this.message = this.message.trim()
      console.log(this.partner);
      this.$store.commit('messages/setMessage', {message: e.target.value, who: "me", partner: this.partner, room: this.room})
      // this.$store.commit('messages/who', 0)
      this.bot(e)
    },
    bot(e){
      this.$store.commit('messages/setMessage', {message: e.target.value, who: "other"})
    }
    // r() {
    //   var room = String(document.getElementById('room').value);
    //   this.$store.commit('messages/room', room)
    // }
    }
}

</script>