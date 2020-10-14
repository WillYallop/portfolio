<template>
    <div class="contactFormComponentContainer">

            <div class="contactFormContainer"> 
                <h4>Send me a<br>Message</h4> 
            
                <!-- Full Name -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Full Name</p> 
                        <input type="text" class="inputStyle" v-model="formData.name" :class="{ 'inputError' : verifyName == false }">
                    </label>
                </div>
                <!-- Email -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Email</p> 
                        <input type="text" class="inputStyle" v-model="formData.email" :class="{ 'inputError' : verifyEmail == false }">
                    </label>
                </div>
                <!-- Subject -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Subject</p> 
                        <select class="inputStyle selectStyle" v-model="formData.subject" :class="{ 'inputError' : verifySubject == false }" >
                            <option>Question</option>
                            <option>Business Inquiry</option>
                            <option>More Information</option>
                            <option>Other</option>
                        </select>
                    </label>
                </div>
                <!-- Message -->
                <div class="inputContainer">
                    <label class="inputLabel">
                        <p>Message</p> 
                        <textarea type="text" class="textAreaInput" v-model="formData.text" :class="{ 'inputError' : verifyText == false }"></textarea>
                    </label>
                </div>
                <!-- Error -->
                <p v-if="error" class="errorMessage">{{error}}</p>
                <p v-if="messageSent" class="messageSentP">Your message has been sent</p>
                <!-- Send Btn -->
                <button v-on:click="sendMessage" class="contactFormBtn"><span v-if="!sending">send</span><span v-if="sending">sending</span> <fa class="fas" :icon="['fas', 'chevron-right']" /></button>
            </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                name: '', 
                email: '', 
                subject: 'Question',
                text: '',
            },
            dataComplete: [false, false, false, false],
            error: false,
            messageSent: false,
            sending: false,
        }
    },
    computed: {
        verifyName() {
            if(this.formData.name.length > 0) {
                var regex = /\d/
                if(!regex.test(this.formData.name)) {
                    this.dataComplete[0] = true
                    return true
                } else {
                    this.dataComplete[0] = false
                    return false
                }
            } else {
                this.dataComplete[0] = false
                return false
            }
        },
        verifyEmail() {
            if(this.formData.email.length > 0) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(regex.test(this.formData.email)) {
                    this.dataComplete[1] = true
                    return true
                } else {
                    this.dataComplete[1] = false
                    return false
                }
            } else {
                this.dataComplete[1] = false
                return false
            }
        },
        verifySubject() {
            if(this.formData.subject.length > 0) {

                if(this.formData.subject == 'Question') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'Business Inquiry') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'More Information') {
                    this.dataComplete[2] = true
                    return true
                } else if (this.formData.subject == 'Other') {
                    this.dataComplete[2] = true
                    return true
                } else {
                    this.dataComplete[2] = false
                    return false                   
                }

            } else {
                this.dataComplete[2] = false
                return false
            }
        },
        verifyText() {
            if(this.formData.text.length > 0) {
                this.dataComplete[3] = true
                return true
            } else {
                this.dataComplete[3] = false
                return false
            }
        },
    },
    methods: {
        verifyData() {
            let checker = arr => arr.every(Boolean);
            if(checker(this.dataComplete)) {
                return true
            } else {
                return false
            }
        },
        sendMessage() {
            if(this.verifyData()) {
                this.sending = true
                // Api call
                let header = {
                    headers: {
                        Authorization: process.env.authHeader,
                    }
                }
                axios.post(process.env.apiBaseUrl + '/email', {
                    name: this.formData.name,
                    email: this.formData.email,
                    subject: this.formData.subject,
                    text: this.formData.text
                }, header)
                .then((res) => {
                    if(res.data.message == 'Success') {
                        this.messageSent = true
                        this.sending = false
                    }
                })
                .catch((err) => {
                    this.error = err
                    this.sending = false
                })

            } else {
                this.error = 'Make sure to complete all text fields.'
            }
        }
    }
}
</script>

<style scoped>
.contactFormComponentContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.contactFormContainer {
    width: 100%;
    background-color: var(--secondary-bg-color);
    border-radius: 20px 0 0 20px;
    padding: 30px;
}
.contactFormContainer h4 {
    font-size: 30px;
    margin-bottom: 30px;
    color: #000000;
}
.inputContainer {
    width: 100%;
    margin-bottom: 20px;
}
.inputLabel p {
    margin-bottom: 5px;
    color: #A5A5A5;
}
.inputStyle {
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 0 10px;
    background-color: #FFF;
    border-radius: 5px;
    height: 45px;
}
.inputStyle:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #32FF4C;
}
.textAreaInput {
    width: 100%;
    min-height: 200px;
    resize: none;
    border-radius: 5px;
    background-color: #FFF;
    border: none;
    padding: 10px;
    font-size: 16px;
}
.textAreaInput:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #32FF4C;
}
.errorMessage {
    padding: 0 0 20px;
    color: #464646;
}
.contactFormBtn {
    padding: 10px 40px;
    border-radius: 20px;
    background-color: #1359FB;
    border: none;
    color: #FFF;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}
.contactFormBtn:hover {
    transform: scale(1.1);
}
.contactFormBtn .fas {
    margin-left: 10px;
    font-size: 10px;
    color: #FFF;
}
.messageSentP {
    padding: 0 0 20px;
    color: #242424;
}

/* Select Styling */
.selectStyle:focus {
    outline: none;
}
.selectStyle {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}


.inputError:focus {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #FF2C4E;
}


@media only screen and (max-width: 1150px) {
    .contactFormContainer {border-radius: 20px;}
}
@media only screen and (max-width: 1024px) {
    .contactFormContainer {padding: 20px; border-radius: 20px 0 0 20px;}
}
@media only screen and (max-width: 750px) {
    .contactFormContainer {border-radius: 20px;}
}

</style>