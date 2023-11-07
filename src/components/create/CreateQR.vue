<template>
  <div class="container">
    <!-- QR Code Options -->
    <div class="field is-grouped">
      <div class="field">
        <label for="type" class="label">Type</label>
        <div class="select">
          <select v-model="type" id="type" @blur="makeQRCode">
            <option value="text">Plain Text</option>
            <option value="url">Url</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="tel">Phone</option>
          </select>
        </div>
      </div>

      <!-- Error Correction Level -->
      <div class="error-level field">
        <label for="errorCorrectionLevel" class="label"
          >Error Correction Level</label
        >
        <div class="select">
          <select v-model="errorCorrectionLevel" id="errorCorrectionLevel">
            <option value="L">Low (7%)</option>
            <option value="M">Medium (15%)</option>
            <option value="Q">Quartile (25%)</option>
            <option value="H">High (30%)</option>
          </select>
        </div>
      </div>

      <!-- Scale Option
            <div class="field">
                <label for="scale" class="label">Scale</label>
                    <div class="control">
                    <input id="scale" class="input" min="0" max="16" 
                            v-model="scale" type="number">
                    </div>
                </div>
            </div> -->
    </div>

    <!-- Contacts -->
    <div v-if="!['url', 'text'].includes(type)" class="field">
      <label class="label" for="contacts">
        Contacts (Separated by a comma)
      </label>
      <div class="control">
        <input
          class="input"
          id="contacts"
          v-model="contacts"
          @change="makeQRCode"
          :placeholder="
            type == 'email' ? 'john.doe@mail.co' : '111111,222222,333333'
          "
          type="text"
        />
      </div>
    </div>

    <!-- Email Specific fields -->
    <div v-if="type == 'email'" class="field">
      <div class="field">
        <label for="subject" class="label"> Subject </label>
        <div class="control">
          <input
            id="subject"
            v-model="subject"
            class="input"
            @change="makeQRCode"
            placeholder="Hello World"
            type="text"
          />
        </div>
      </div>

      <div class="field">
        <label for="cc" class="label">CC</label>
        <div class="control">
          <input
            id="cc"
            class="input"
            v-model="cc"
            @change="makeQRCode"
            placeholder="alice@something.com"
            type="email"
          />
        </div>
      </div>
    </div>

    <!-- Message (Body) -->
    <div v-if="!['url', 'tel'].includes(type)" class="field">
      <label for="body" class="label">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="body"
          id=""
          cols="30"
          rows="10"
          @change="makeQRCode"
          maxlength="1024"
        >
        </textarea>
      </div>
      <p v-if="type === 'sms'" class="help has-text-right">{{ smsCounter }}</p>
    </div>

    <!-- URL -->
    <div v-if="type == 'url'" class="field">
      <label for="url" class="label">URL</label>
      <div class="control">
        <input
          id="url"
          v-model="url"
          class="input"
          @change="makeQRCode"
          placeholder="http://mysite.com"
          type="text"
        />
      </div>
    </div>

    <!-- QR Code -->
    <div class="column qr-centered">
      <h2 class="title">QR Code</h2>
      <!-- Vue component for generating QR -->
      <vue-qrcode
        :value="qrcode"
        :errorCorrectionLevel="errorCorrectionLevel"
        :scale="scale"
      />
      <div class="field has-text-centered">
        <div class="control">
          <button @click="makeQRCode" :href="qrcode" class="button">
            Generate QR Code
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueQrcode from 'https://cdn.skypack.dev/vue-qrcode@0.4.0'

export default {
  name: 'GenerateQR',
  components: {
    vueQrcode
  },
  data() {
    return {
      //options
      type: 'sms',
      errorCorrectionLevel: 'L',
      qrcode: 'Start doing things !',
      contacts: '',
      cc: '',
      bcc: '',
      subject: '',
      url: '',
      body: `Hi, Type here the message of the message you wish to send`
    }
  },
  methods: {
    // handleInput(emitEvent, value) {
    //     this.$emit(emitEvent, value)
    // }
    makeQRCode() {
      var qrcode = ''
      // Text
      if (this.type === 'text') {
        this.qrcode = this.body
      }
      // URL
      else if (this.type === 'url') {
        this.qrcode = this.url
      }
      // Email
      else if (this.type === 'email') {
        qrcode = `mailto:${this.contacts}?`

        // CC
        if (this.cc.length > 1) {
          qrcode += `&cc=${this.cc}`
        }

        // Subject
        if (this.subject.length > 1) {
          // this works w/o encodeURI, so I didn't bother
          qrcode += `&subject=${this.subject}`
        }

        // Body
        if (this.body.length > 1) {
          var body = this.body
          body = body
            .split('\n')
            .map((line) => line.trim())
            .join('\n')
          qrcode += `&body=${encodeURI(body)}`
        }

        // Cleanup
        qrcode = qrcode.replace('?&', '?')

        this.qrcode = qrcode
      }
      // SMS
      else if (this.type === 'sms') {
        qrcode = `sms:${this.contacts}`

        // Body
        if (this.body.length > 1) {
          qrcode += `?body=${encodeURI(this.body)}`
        }

        this.qrcode = qrcode
      }
      // Tel
      else if (this.type === 'tel') {
        this.qrcode = `tel:${this.contacts}`
      }
    },
    computed: {
      smsCounter() {
        if (this.type != 'sms') {
          return ''
        }
        const smsMaxSize = 160
        var charCount = this.body.length % smsMaxSize
        var smsCount = Math.ceil(this.body.length / smsMaxSize)

        return `${charCount}/${smsCount}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 100%;
  padding: 10px;
}

.qr-centered {
  display: block;

  img {
    width: 50%;
  }
}
</style>
