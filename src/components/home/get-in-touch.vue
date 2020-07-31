<template>
  <div class="pb-10">
    <v-row class="pt-10 pb-10 f-row f-center-x">
      <v-col sm="6" cols="12" class="pl-4 pr-4">
        <div class="contact-form pd-5">
          <h2 class="mb-5">Contact us</h2>
          <v-form v-model="contact.valid" class="form">
            <p>送信内容は個人情報保護のため暗号化処理されますので、安心してお問い合わせいただけます。</p>
            <p><span class="txt-danger">※</span>は必須入力項目です。</p>
            <div class="form-group form-required mt-6">
              <label>お問い合わせの種類</label>
              <v-radio-group class="form-radio" v-model="contact.typeQuestion" :mandatory="false">
                <v-row>
                    <v-col sm="4" cols="12" class="pt-0 pb-0">
                      <v-radio label="案件のご相談" value="案件のご相談"></v-radio>
                      <v-radio label="業務提携のご相談" value="業務提携のご相談"></v-radio>
                    </v-col>
                    <v-col sm="4" cols="12" class="pt-0 pb-0">
                      <v-radio label="サービスに関するご相談" value="サービスに関するご相談"></v-radio>
                      <v-radio label="採用への応募" value="採用への応募"></v-radio>
                    </v-col>
                    <v-col sm="4" cols="12" class="pt-0 pb-0">
                      <v-radio label="その他" value="その他"></v-radio>
                    </v-col>
                </v-row>
              </v-radio-group>
            </div>
            <v-row class="form-group form-required">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.company" :rules="contact.companyRules" label="貴社名" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.department" label="部署名" filled></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.position" label="役職" filled></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group form-required">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.name" :rules="contact.nameRules" label="お名前" rows="4" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.position" label="お名前（ふりがな）" filled></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group form-required">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.email" :rules="contact.emailRules" label="メールアドレス" rows="4" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group form-required">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-text-field v-model="contact.phoneNumber" :rules="contact.phoneNumberRules" label="電話番号" type="number" rows="4" filled required></v-text-field>
              </v-col>
            </v-row>
            <v-row class="form-group form-required">
              <v-col sm="12" cols="12" class="pt-0 pb-0">
                <v-textarea v-model="contact.content" :rules="contact.contentRules" label="メールアドレス" rows="4" filled required></v-textarea>
              </v-col>
            </v-row>
             <v-checkbox v-model="agree" :label="`個人情報の取扱いに同意する `"></v-checkbox>
            <div class="txt-center">
              <button class="btn btn-primary" @click="submit" :disabled="disabledForm || !contact.valid">確認する</button>
            </div>
          </v-form>
        </div>
      </v-col>
      <v-col sm="6" cols="12" class="get-in-touch">
        <div>
          <h3 class="mb-5 txt-center">Get In Touch</h3>
          <div class="contact-info txt-center">
            <div class="contact-phone pd-2 mb-4">
              <span class="material-icons mr-2">call</span>
              <span class="phone-number txt-bold">+81-3-6382-9505</span>
            </div>
            <p class="txt-center">Email: info@treesofgrape.com</p>
            <p class="txt-center">Skypeなどの音声通話打ち合わせも可能です。</p>
            <div class="google-map mt-6">
              <p>
                <span class="material-icons mr-1">location_on</span>
                <span>東京都新宿区西新宿1-26-2新宿野村ビル32階</span>
              </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3521508612844!2d139.6931766150268!3d35.69295088019158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c3b6022d%3A0x2d4d3dd5a50a5b2e!2sSHINJUKU%20NOMURA%20BUILDING%2C%2032%E9%9A%8E%2C%201-ch%C5%8Dme-26-2%20Nishishinjuku%2C%20Shinjuku%20City%2C%20T%C5%8Dky%C5%8D-to%20163-0590%2C%20Japan!5e0!3m2!1sen!2s!4v1589425107332!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">{{ message }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="closeDialog()">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  data() {
    return {
      contact: {
        valid: false,
        typeQuestion: '',
        name: '',
        nameRules: [
          v => !!v || 'お名前を入力してください。',
        ],
        company: '',
        companyRules: [
          v => !!v || '貴社名を入力してください。',
        ],
        department: '',
        position: '',
        phoneNumber: '',
        phoneNumberRules: [
          v => !!v || '電話番号を入力してください。',
        ],
        email: '',
        emailRules: [
          v => !!v || 'メールアドレスを入力してください。',
          v => /.+@.+/.test(v) || '不正な値です。正しい値を入力してください。',
        ],
        content: '',
        contentRules: [
          v => !!v || 'お問い合わせ内容を入力してください。',
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
      ],
      agree: false,
      dialog: false,
      message: '',
      disabledForm: false
    }
  },
  methods: {
    submit () {
      this.dialog = this.disabledForm = true;
      const body = {
        inquire_type: this.contact.typeQuestion,
        company_name: this.contact.company,
        position: this.contact.position,
        name: this.contact.name,
        furigana_name: this.contact.department,
        email: this.contact.email,
        phone: this.contact.phoneNumber,
        content: this.contact.content
      }
      api.post(['contact_us'], body).then(res => {
        this.message = 'フォームを送信しました';
        this.disabledForm = false;
      }, err => {
        this.message = 'エラーが発生しました';
        this.disabledForm = false;
      });
    },
    closeDialog() {
      this.dialog = false;
      document.getElementsByClassName('v-dialog__container')[0].setAttribute('display', 'none');
    }
  }
}
</script>
