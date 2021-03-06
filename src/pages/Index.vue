<template>
  <q-page class="q-pb-lg">

    <div class="row">
      <q-parallax src="statics/images/computer-desk.jpeg">
        <img src="statics/logos/logo-vertical-480w.png"
             srcset="statics/logos/logo-vertical-340w.png 340w,
                     statics/logos/logo-vertical-410w.png 410w,
                     statics/logos/logo-vertical-480w.png 480w"
             sizes="(max-width: 599px) 340px,
                    (max-width: 1023px) 410px,
                    480px"
        />
      </q-parallax>
    </div>

    <div class="row">
      <q-space />
      <div class="body col-xs-12 col-sm-8 col-md-6">
        <div class="text-h3 text-center q-pt-xl q-pb-sm">Delivering Expert Solutions</div>
        <p class="q-pa-sm">At Vituary, we understand that primary goal of our customers is to deliver a great experience to their users.  Features need to be delivered quickly, reliably and with high quality.  We embrace the lessons taught to us by the DevOps movement and endeavor to empower our customers to provide a great experience to their users.</p>
        <p class="q-pa-sm">We can work with you independently or as part of a team to ensure you're getting the best value out of your investment.  We believe that to be successful software needs to be delivered early and often.  As a result, we will build capabilities that ensure sustainability into our solutions from day 1, giving our customers confidence that they can continue to deliver a great experience long after we're gone.</p>

        <div class="text-h3 text-center q-pt-xl q-pb-sm">Experienced Consults</div>
        <p class="q-pt-sm q-mb-sm">We have a wealth of experience in all aspects of the software delivery life cycle. We are available for consultation on a variety of topics:</p>
        <ul class="text-left q-mt-none" style="display: inline-block">
          <li>Agile Methodologies</li>
          <li>Architecture</li>
          <li>Continuous Delivery</li>
          <li>DevOps</li>
          <li>Proof of Concepts</li>
          <li>Release Management</li>
        </ul>

        <div class="text-h3 text-center q-pt-xl q-pb-sm">Core Values</div>
        <div class="text-center q-pa-sm value-row">
          <div class="value float-left q-pa-sm">
            <div class="text-h5">Empowerment</div>
            <div>Individuals perform at their best when they are given the latitude to make decisions and experiment.  We believe in empowering teams by giving them trust from leadership and the space to do great things.</div>
          </div>
          <div class="value float-right q-pa-sm">
            <div class="text-h5">Continuous Learning</div>
            <div>Technology today is in a constant state of flux. We cannot afford to rest on the knowledge of yesterday.  For innovation to thrive, we must humbly understand that there will always be much to learn and we must be willing to experiment and fail.</div>
          </div>
        </div>
        <div class="text-center q-pa-sm value-row">
          <div class="col-3 value float-left">
            <div class="text-h5">Integrity</div>
            <div>The foundation of a strong team is trust. The key building blocks of trust are honesty and transparency, even when it is inconvenient. We must continually strive to do what is right, even if it is not in our own self interest.</div>
          </div>
          <div class="col-3 value float-right">
            <div class="text-h5">Sustainability</div>
            <div>After we've built our solutions, we expect them to be active and thriving. Others will need to be able to maintain or enhance these systems when we're long gone. It is important to us to deliver solutions with automated delivery mechanisms and a low barrier to entry.</div>
          </div>
        </div>

        <div class="text-h3 text-center q-pt-xl q-pb-sm">Who We Are</div>
        <div class="resume-link text-center q-pa-sm">
          <router-link to="/jguertin">
            <q-avatar class="headshot" size="120px"><img src="statics/images/jguertin_headshot.jpg" /></q-avatar>
            <div class="text-subtitle1">Justin Guertin</div>
            <div class="text-subtitle2">Solutions Architect, Founder</div>
          </router-link>
        </div>

        <div class="text-h3 text-center q-pt-xl q-pb-sm">Contact Us</div>
        <div class="q-pa-sm">
          <q-form @submit="onSubmit" ref="contactForm" class="q-gutter-md">
            <q-input id="name" v-model="name" label="Your Name"
                     lazy-rules :rules="[ val => val && val.length > 0 || 'This field is required']" />
            <q-input id="company" v-model="company" label="Company Name" lazy-rules :rules="[true]" />
            <q-input id="email" v-model="email" type="email" label="Email"
                     lazy-rules :rules="[ val => val && val.length > 0 || 'This field is required']" />
            <q-input id="message" v-model="message" type="textarea" label="Message"
                     lazy-rules :rules="[ val => val && val.length > 0 || 'This field is required']" />

            <div id="recaptcha" class="g-recaptcha" />

            <q-btn label="Submit" type="submit" color="primary" />
          </q-form>
        </div>
      </div>
      <q-space />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      name: '',
      company: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit () {
      // eslint-disable-next-line no-undef
      const token = grecaptcha.getResponse()
      if (!token) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Submission failed.  reCAPTCHA must be completed to proceed.'
        })
        return
      }

      const formData = {
        name: this.name,
        company: this.company,
        email: this.email,
        message: this.message,
        recaptcha: token
      }

      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).then(response => {
        if (response.ok) {
          this.name = ''
          this.company = ''
          this.email = ''
          this.message = ''

          this.$refs.contactForm.resetValidation()
          // eslint-disable-next-line no-undef
          grecaptcha.reset()

          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Submitted'
          })
        } else {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: 'Submission failed.  Please try emailing us directly at contact@vituary.com.'
          })
        }
      })
    },
    render () {
      // eslint-disable-next-line no-undef
      grecaptcha.render('recaptcha', {
        sitekey: '6LeLj7cUAAAAAGZqCM62YQBSefrgx1Osnc6QdZb_'
      })
    },
    renderWait () {
      const self = this
      setTimeout(() => {
        // eslint-disable-next-line no-undef
        if (typeof grecaptcha !== 'undefined' && grecaptcha.render) self.render()
        else self.renderWait()
      }, 200)
    }
  },
  mounted: function () {
    if (typeof grecaptcha === 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
      script.onload = this.renderWait
      document.head.appendChild(script)
    } else {
      this.render()
    }
  }
}
</script>

<style lang="stylus">
.root-name
  font-size 6rem
  font-weight bold
  line-height 6rem
.postfix-name
  font-size 2rem
  line-height 2rem
.value-row
  overflow hidden
  .value
    width 50%
    display inline
.resume-link a
  text-decoration inherit
  color inherit
</style>
