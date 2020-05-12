<template>
  <div>
    <v-row class="pt-10 pb-10 f-row f-center-x">
      <v-col sm="6" cols="12" class="pl-4 pr-4">
        <div class="contact-form pd-5">
          <h2 class="mb-5">Contact us</h2>
          <v-form v-model="contact.valid">
            <v-row class="form-group">
              <v-col sm="6" cols="12" class="pt-0 pb-0 pr-2">
                <v-text-field v-model="contact.name" :rules="contact.nameRules" label="名前" filled required></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0 pl-2">
                <v-text-field v-model="contact.company" :rules="contact.companyRules" label="会社名" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.phoneNumber" :rules="contact.phoneNumberRules" :type="'number'" label="電話番号" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.email" :rules="contact.emailRules" label="メールアドレス" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-textarea v-model="contact.content" :rules="contact.contentRules" label="お問い合わせ内容" rows="4" filled required></v-textarea>
              </v-col>
            </v-row>
            <div class="txt-center">
              <button class="btn btn-primary" @click="submit">SENT</button>
            </div>
          </v-form>
        </div>
      </v-col>
      <v-col sm="6" cols="12" class="pl-8">
        <div>
          <h3 class="mb-5">Get In Touch</h3>
          <div class="contact-info">
            <div v-for="(contact, index) of contactData" :key="index" class="f-row f-center-x mb-2">
              <span class="material-icons mr-4">{{ contact.icon }}</span>
              <div>
                <h5>{{ contact.title }}</h5>
                <p v-html="contact.description"></p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      contact: {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
        ],
        company: '',
        companyRules: [
          v => !!v || 'Company is required',
        ],
        phoneNumber: '',
        phoneNumberRules: [
          v => !!v || 'Phone numer is required',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        content: '',
        contentRules: [
          v => !!v || 'Phone numer is required',
        ],
      },
      contactData: [
        {
          icon: 'contacts',
          title: 'Come And Meet Us',
          description: `東京都新宿区西新宿1-26-2新宿野村ビル32階`
        },
        {
          icon: 'phone_iphone',
          title: 'Give Us A Call',
          description: `+81-3-6382-9505`
        },
        {
          icon: 'code',
          title: 'Send Us A Message',
          description: `info@treesofgrape.com`
        },
        {
          icon: 'share',
          title: 'Something Else',
          description: `Skypeなどの音声通話打ち合わせも可能です。`
        }
      ]
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>
