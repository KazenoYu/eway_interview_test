<template>
  <div class="background">
    <header class="header_sea">
      <div class="header_title">
        <h1>There is no one</h1>
        <h2>who loves pain</h2>
      </div>
      <button @click="scrollToForm" class="button_form">FORM</button>
      <div class="header_article">
        <div class="header_boat">
          <img
            src="@/assets/images/icon/boat/boat.svg"
            alt="boat"
            class="boat"
          />
          <img
            src="@/assets/images/icon/boat/rope.svg"
            alt="rope"
            class="rope"
          />
          <img
            src="@/assets/images/icon/boat/paddle.svg"
            alt="paddle"
            class="paddle"
          />
        </div>
        <img
          src="@/assets/images/icon/pop_2.svg"
          alt="bubble_2"
          class="bubble_2"
        />
        <img
          src="@/assets/images/icon/pop_1.svg"
          alt="bubble_1"
          class="bubble_1"
        />
        <div>
          <div class="header_article_title">
            <h3>
              <img
                src="@/assets/images/icon/cactus.svg"
                alt="cactus_title"
              />paragraph
              <img src="@/assets/images/icon/cactus.svg" alt="cactus_title" />
            </h3>
          </div>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
        <div class="header_article_title">
          <h3>
            <img
              src="@/assets/images/icon/cactus.svg"
              alt="cactus_title"
            />paragraph
            <img src="@/assets/images/icon/cactus.svg" alt="cactus_title" />
          </h3>
          <ol>
            <li>
              Quisque sodales leo <strong><u>vitae olputate auctor.</u></strong>
            </li>
            <li>
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
              a pellentesque blandit.
            </li>
            <li>
              Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
            </li>
            <li>
              Donec ultrices sapien
              <strong>vitae leo venenatis ullamcorper.</strong>
            </li>
          </ol>
        </div>
        <img src="@/assets/images/icon/boat2.svg" alt="boat2" class="boat2" />
        <img
          src="@/assets/images/icon/fireworks.svg"
          alt="fireworks"
          class="boat2_fireworks"
        />
      </div>
    </header>
    <div class="sea_wave">
      <div class="wave1"></div>
      <!-- <div class="wave2"></div> -->
    </div>

    <main class="main_sand" id="form">
      <form id="form" @submi.prevent="submitForm" class="main_form">
        <div class="form_title">
          FORM
          <img
            src="@/assets/images/icon/turtle.svg"
            alt="turtle"
            class="turtle"
          />
        </div>

        <div class="form_area">
          <div>
            <label
              >store
              <span>*</span>
            </label>
            <input
              type="text"
              list="storeList"
              v-model="store"
              placeholder="placeholder text"
              @change="validateStore"
              @blur="validateStore"
              :class="{ 'is-invalid': storeErrorMsg }"
            />
            <datalist id="storeList">
              <option
                v-for="(option, index) in storeList"
                :key="index"
                :value="option"
              ></option>
            </datalist>
            <span v-show="storeErrorMsg" class="invalid_feedback">
              {{ storeErrorMsg }}
            </span>
          </div>
          <div>
            <label>name<span>*</span></label>
            <input
              type="text"
              v-model="name"
              placeholder="placeholder text"
              @change="validateName"
              @blur="validateName"
              :class="{ 'is-invalid': nameErrorMsg }"
              required
            />
            <span v-show="nameErrorMsg" class="invalid_feedback">
              {{ nameErrorMsg }}
            </span>
          </div>
          <div>
            <label>phone<span>*</span></label>
            <input
              type="text"
              v-model="phoneNumber"
              placeholder="placeholder text"
              @change="validatePhoneNumber"
              @blur="validatePhoneNumber"
              :class="{ 'is-invalid': phoneErrorMsg }"
              required
            />
            <span v-show="phoneErrorMsg" class="invalid_feedback">
              {{ phoneErrorMsg }}
            </span>
          </div>
          <div>
            <label>Amount of consumption<span>*</span></label>
            <input
              type="text"
              v-model="money"
              placeholder="placeholder text"
              @change="validateAmount"
              @blur="validateAmount"
              :class="{ 'is-invalid': moneyErrorMsg }"
              required
            />
            <span v-show="moneyErrorMsg" class="invalid_feedback">
              {{ moneyErrorMsg }}
            </span>
          </div>
          <div>
            <label>payment<span>*</span></label>
            <input
              type="text"
              list="payment"
              v-model="paymentInput"
              placeholder="placeholder text"
              @change="validatePayment"
              @blur="validatePayment"
              :class="{ 'is-invalid': paymentErrorMsg }"
              required
            />
            <datalist id="payment">
              <option
                v-for="(option, index) in payment"
                :key="index"
                :value="option"
              ></option>
            </datalist>
            <span v-show="paymentErrorMsg" class="invalid_feedback">
              {{ paymentErrorMsg }}
            </span>
          </div>
        </div>
        <button
          v-if="sumbit"
          type="submit"
          :class="submitClass"
          @click.prevent="submitForm"
          :disabled="isDisabled"
        >
          submit
        </button>
        <button v-if="submitSuccess" class="button_submit_success">
          <img src="@/assets/images/button/Vector-1.svg" alt="success" />
          success
        </button>
        <button v-if="submitFail" class="button_submit_failure">
          <img src="@/assets/images/button/Vector.svg" alt="fail" />
          failure
        </button>
        <span v-if="submitFail" class="submit_fail_errorMsg">
          This person does not exist
        </span>
      </form>
      <div class="main_gift">
        <div class="gift_container">
          <div class="card" v-for="(gift, index) in giftList" :key="index + 1">
            <div
              :class="{
                medal_top_prizes:
                  gift.score === 'A' ||
                  gift.score === 'B' ||
                  gift.score === 'C',
                medal_default:
                  (gift.score !== 'A') &
                  (gift.score !== 'B') &
                  (gift.score !== 'C'),
              }"
            >
              <p>{{ gift.score }}</p>
            </div>
            <div
              :class="{
                gift_number_top:
                  gift.score === 'A' ||
                  gift.score === 'B' ||
                  gift.score === 'C',
                gift_number_default:
                  (gift.score !== 'A') &
                  (gift.score !== 'B') &
                  (gift.score !== 'C'),
              }"
            >
              {{ gift.number }}
            </div>
            <p
              :class="{
                gift_name_top:
                  gift.score === 'A' ||
                  gift.score === 'B' ||
                  gift.score === 'C',
                gift_name_default:
                  (gift.score !== 'A') &
                  (gift.score !== 'B') &
                  (gift.score !== 'C'),
              }"
            >
              {{ gift.name }}
            </p>
          </div>
        </div>
      </div>
    </main>
    <div class="lighthouse">
      <div class="lighthouse_text">
        <img
          src="@/assets/images/icon/lighthouse_left_line.svg"
          alt="lighthouse_left_line"
          class="lighthouse_line"
        />
        <p class="lighthouse_number">13.32</p>
        <p>who seeks after it and</p>
        <p>wants to have it</p>
        <img
          src="@/assets/images/icon/lighthouse_right_line.svg"
          alt="lighthouse_right_line"
          class="lighthouse_line"
        />
      </div>

      <img src="@/assets/images/icon/lighthouse.svg" alt="lighthouse" />
    </div>
    <footer class="footer_market">
      <p class="market_slogan">Neque porro quisquam est qui dolorem!</p>
      <img src="@/assets/images/market.svg" alt="market" />
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      store: "",
      storeList: ["store1", "store2", "store3"],
      name: "",
      phoneNumber: "",
      money: "",
      paymentInput: "",
      payment: ["difital payment", "ATM"],
      storeErrorMsg: "",
      nameErrorMsg: "",
      phoneErrorMsg: "",
      moneyErrorMsg: "",
      paymentErrorMsg: "",
      giftList: [
        { score: "A", number: "ONE", name: "dehumidifier" },
        { score: "B", number: "ONE", name: "range hood" },
        { score: "C", number: "ONE", name: "vacuum cleaner" },
        { score: "D", number: "ONE", name: "toaster" },
        { score: "E", number: "ONE", name: "scale" },
        { score: "F", number: "ONE", name: "straightening iron" },
        { score: "G", number: "FIVE", name: "vacuum cleaner" },
        { score: "H", number: "TEN", name: "rice cooker" },
      ],
      sumbit: true,
      submitSuccess: false,
      submitFail: false,
    };
  },
  computed: {
    isDisabled() {
      if (
        !this.store ||
        !this.name ||
        !this.phoneNumber ||
        !this.money ||
        !this.paymentInput
      ) {
        return true;
      } else return false;
    },
    submitClass() {
      if (
        !this.store ||
        !this.name ||
        !this.phoneNumber ||
        !this.money ||
        !this.paymentInput
      ) {
        return "button_submit_disabled";
      } else return "button_submit";
    },
  },
  methods: {
    scrollToForm() {
      const form = document.querySelector("#form");
      form.scrollIntoView({ behavior: "smooth" });
    },
    validateStore() {
      if (!this.store) {
        this.storeErrorMsg = "required";
      } else if (!this.storeList.includes(this.store)) {
        this.storeErrorMsg = "no result";
      } else {
        this.storeErrorMsg = "";
      }
    },
    validateName() {
      const nameReg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
      if (!this.name) {
        this.nameErrorMsg = "required";
      } else if (!nameReg.test(this.name.trim())) {
        this.nameErrorMsg = "wrong format";
      } else {
        this.nameErrorMsg = "";
      }
    },
    validatePhoneNumber() {
      const phoneNumberReg = /^(09)[0-9]{8}$/;
      if (!this.phoneNumber) {
        this.phoneErrorMsg = "required";
      } else if (!phoneNumberReg.test(this.phoneNumber.trim())) {
        this.phoneErrorMsg = "wrong format";
      } else {
        this.phoneErrorMsg = "";
      }
    },
    validateAmount() {
      const amountReg = /^[1-9][0-9]+$/;
      if (!this.money) {
        this.moneyErrorMsg = "required";
      } else if (!amountReg.test(this.money.trim())) {
        this.moneyErrorMsg = "wrong format";
      } else {
        this.moneyErrorMsg = "";
      }
    },
    validatePayment() {
      if (!this.paymentInput) {
        this.paymentErrorMsg = "required";
      } else {
        this.paymentErrorMsg = "";
      }
    },
    submitForm() {
      this.validateStore();
      this.validateName();
      this.validatePhoneNumber();
      this.validateAmount();
      this.validatePayment();
      if (
        !this.storeErrorMsg &&
        !this.nameErrorMsg &&
        !this.phoneErrorMsg &&
        !this.moneyErrorMsg &&
        !this.paymentErrorMsg
      ) {
        this.sumbit = false;
        this.submitSuccess = true;
        this.submitClass = "button_submit_success";
      } else {
        this.sumbit = false;
        this.submitFail = true;
        this.submitClass = "button_submit_failure";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
$large-width: 1400px;
$mid-width: 769px;
$small-width: 414px;
$primary-blue: #204379;
$primary-sandColor: #e2d9d3;
$primary-brown: #b57556;
$form-error: #e06d6d;
$top-prizes: #b3b960;
$general-prizes: #a0bcc8;

@mixin flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background {
  background-color: $primary-sandColor;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-size: 16px;
  max-width: 100vw;
  color: #ffffff;
  scroll-behavior: smooth;
}
.header_sea {
  @include flex-center;
  height: 634px;
  background: url("@/assets/images/background/waveLine.svg");
  background-repeat: no-repeat;
  background-color: $primary-blue;
  @media only screen and (max-width: $mid-width) {
    height: 793px;
  }

  .header_title {
    @include flex-center;
    font-weight: 700;
    margin: 60px 0 32px 0;
    h1 {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.2em;
      text-align: left;
      margin: 0 0 4px 0;
    }
    h2 {
      font-family: Noto Sans TC;
      font-size: 28px;
      line-height: 35px;
      letter-spacing: 0.2em;
      text-align: center;
      margin: 0;
    }
  }
  .button_form {
    height: 57px;
    width: 200px;
    padding: 16px 20px;
    background-color: $primary-brown;
    border: 0;
    border-radius: 50px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.4rem;
    box-shadow: 0px 0px 20px rgba(250, 163, 163, 0.91);
    cursor: pointer;
    a {
      color: inherit;
      text-decoration: none;
    }
    .button_form:before {
      content: "";
      background: #3f3982;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .button_form:after {
      content: "";
      background: linear-gradient(
        124deg,
        #efdbc8,
        #e9c87f,
        #b2e1ea,
        #90cae5,
        #f5caf4,
        #dfc9f9
      );
      background-size: auto;
      background-size: 400%;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      border-radius: 10px;
      filter: blur(5px);
      opacity: 0;
      position: absolute;
      left: -2px;
      top: -2px;
      z-index: -2;
      transition: all 0.3s ease-in-out;
      animation: move 20s linear infinite;
    }
    .button_form:hover:after {
      opacity: 1;
    }
    @keyframes move {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }

  .header_article {
    background-color: #dae4f1;
    color: $primary-blue;
    border: 2px solid $primary-brown;
    border-radius: 20px;
    position: relative;
    width: 808px;
    height: 322px;

    margin: 32px 0 52px 0;

    @media only screen and (max-width: $large-width) {
      width: 720px;
    }
    @media only screen and (max-width: $mid-width) {
      width: 366px;
      height: 489px;
      margin-bottom: 48px;
    }
    .header_article_title {
      margin: 16px 0 24px 0;
    }
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ol > li {
      line-height: 180%;
    }
    .header_boat {
      position: absolute;
      top: -30px;
      right: 10px;

      .rope {
        position: absolute;
        left: 14px;
        bottom: 16px;
      }
      .paddle {
        position: absolute;
        left: 18px;
        top: 10px;
        transform-origin: bottom left; /* 旋轉中心為左下角 */
        animation: rowing 3s ease-in-out;
        animation-delay: 0.5s;
        animation-iteration-count: infinite;
      }
      @keyframes rowing {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(30deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
    .bubble_1 {
      position: absolute;
      right: -16px;
      top: -75px;
      animation: bubble 3s ease-in-out;
      animation-delay: 0.5s;
      animation-iteration-count: infinite; /* 無限循環播放 */
    }
    @keyframes bubble {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .bubble_2 {
      position: absolute;
      right: 0;
      top: -50px;
      animation: bubble 3s ease-in-out;
      animation-iteration-count: infinite; /* 無限循環播放 */

      @keyframes bubble {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
    .boat2 {
      position: absolute;
      bottom: -48px;
      left: 38px;
    }
    .boat2_fireworks {
      position: absolute;
      bottom: -48px;
      left: 20px;
      opacity: 0;
      animation: firework 1.5s ease-in-out;
      animation-iteration-count: infinite; /* 無限循環播放 */
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
}

.sea_wave {
  // display: flex;
  position: relative;

  height: 95px;
  .wave1 {
    height: 110px;
    background: url("@/assets/images/background/wave.svg");
    background-repeat: repeat-x;
    animation: wave 10s linear infinite;
    @keyframes wave {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
    // position: absolute;
    // bottom: 0px;
  }
  // .wave2 {
  //   height: 95px;
  //   background: url("@/assets/images/background/wave.svg");
  //   background-size: 100% 100%;
  //   position: absolute;
  //   top: 0;
  // }
}

.main_sand {
  @include flex-center;
  background-color: #e2d9d3;

  .main_form {
    @include flex-center;
    position: relative;
    .form_title {
      position: absolute;
      top: 56px;
      width: 83px;
      height: 23px;
      background: #ffffff;
      border: 2px solid $primary-brown;
      box-shadow: 0px 1px 10px rgba(73, 72, 72, 0.25);
      border-radius: 50px;
      color: $primary-brown;
      font-weight: 700;
      font-size: 18px;
      line-height: 125%;
      letter-spacing: 0.2em;
      text-align: center;
      padding: 10px 20px;
      .turtle {
        position: absolute;
        z-index: 100;
        top: -13px;
        right: -42px;
      }
    }

    .form_area {
      margin: 80px 0 42px 0;
      padding: 40px 20px;
      width: 808px;
      height: 555px;
      background-color: #ffffff;
      border: 1px solid $primary-brown;
      border-radius: 16px;
      box-shadow: 0px 1px 20px rgba(73, 72, 72, 0.25);

      @media only screen and (max-width: $large-width) {
        width: 720px;
      }
      @media only screen and (max-width: $mid-width) {
        width: 366px;
        height: 575px;
      }

      div {
        padding: 8px 16px;
        margin-bottom: 10px;
      }
      label {
        font-size: 16px;
        color: $primary-blue;
        line-height: 140%;
        span {
          color: $primary-brown;
          margin-left: 4px;
        }
      }
      input {
        border: 1px solid $primary-blue;
        border-radius: 16px;
        margin-top: 4px;
        padding: 8px 16px;
        width: 736px;
        height: 20px;
        @media only screen and (max-width: $large-width) {
          width: 648px;
        }
        @media only screen and (max-width: $mid-width) {
          width: 294px;
          height: 25px;
        }
      }
      input:focus {
        border: 3px solid #93bbf9;
      }

      .is-invalid {
        border: 3px solid $form-error;
      }
      .invalid_feedback {
        color: $form-error;
        font-weight: 400;
        font-size: 12px;
      }
    }
    .button_submit {
      height: 57px;
      width: 200px;
      background-color: $primary-brown;
      padding: 16px 20px;
      margin-bottom: 56px;
      border: 0;
      border-radius: 50px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.4rem;
      box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35),
        0px -4px 10px rgba(255, 255, 255, 0.9);
      cursor: pointer;
      animation: buttonScale 1.5s ease-in-out;
      animation-iteration-count: infinite; /* 無限循環播放 */
      @keyframes buttonScale {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
    }
    .button_submit_disabled {
      height: 57px;
      width: 200px;
      background-color: #d3a995;
      padding: 16px 20px;
      margin-bottom: 56px;
      border: 0;
      border-radius: 50px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.4rem;
      box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35),
        0px -4px 10px rgba(255, 255, 255, 0.9);
      cursor: not-allowed;
    }
    .button_submit_success {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 57px;
      width: 200px;
      background-color: $primary-brown;
      padding: 16px 20px;
      margin-bottom: 56px;
      border: 0;
      border-radius: 50px;
      color: #e6ffb1;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.2em;
      box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35),
        0px -4px 10px rgba(255, 255, 255, 0.9);
      cursor: pointer;
      img {
        margin-right: 16px;
      }
    }
    .button_submit_failure {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 57px;
      width: 200px;
      background-color: $primary-brown;
      padding: 16px 20px;
      margin-bottom: 56px;
      border: 0;
      border-radius: 50px;
      color: #ffe3e3;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.2em;
      box-shadow: 0px 4px 10px rgba(40, 35, 35, 0.35),
        0px -4px 10px rgba(255, 255, 255, 0.9);
      cursor: pointer;
      img {
        margin-right: 16px;
      }
    }
    .submit_fail_errorMsg {
      position: absolute;
      font-weight: 400;
      font-size: 14px;
      bottom: 24px;
      color: $form-error;
    }
  }
  .main_gift {
    width: 100vw;
    height: 531px;
    background: url("@/assets/images/background/sand.svg") center;
    z-index: 100;
    @include flex-center;
    @media only screen and (max-width: $mid-width) {
      height: 684px;
    }
    .gift_container {
      width: 600px;
      height: 451px;
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 42px 0;
      @media only screen and (max-width: $mid-width) {
        width: 400px;
        height: 604px;
        flex-direction: column;
      }
      .card {
        position: relative;
        width: 178px;
        height: 112px;
        left: 0px;
        top: 0px;
        background: #ffffff;
        box-shadow: 0px 8px 0px #edeef0;
        border-radius: 20px;
        margin: 10px;
        @media only screen and (max-width: $mid-width) {
          margin: 15px;
        }
        .medal_top_prizes {
          position: absolute;
          top: -26px;
          left: 58px;
          background: url("@/assets/images/icon/certificateA.svg") no-repeat;
          background-size: 100% 100%;
          width: 66px;
          height: 78px;
          p {
            padding-top: 5px;
            text-align: center;
          }
        }
        .medal_default {
          position: absolute;
          top: -26px;
          left: 58px;
          background: url("@/assets/images/icon/certificateD.svg") no-repeat;
          background-size: 100% 100%;
          width: 66px;
          height: 78px;
          p {
            padding-top: 10px;
            text-align: center;
          }
        }
        .gift_number_top {
          position: absolute;
          width: 25px;
          height: 17px;
          left: 125px;
          top: 18px;
          text-align: center;
          font-size: 12px;
          background-color: #fafafa;
          border: 1px solid $top-prizes;
          border-radius: 50px;
          padding: 3px 10px;
          color: $top-prizes;
        }
        .gift_number_default {
          position: absolute;
          width: 25px;
          height: 17px;
          left: 125px;
          top: 18px;
          text-align: center;
          font-size: 12px;
          background-color: #fafafa;
          border: 1px solid $general-prizes;
          border-radius: 50px;
          padding: 3px 10px;
          color: $general-prizes;
        }
        .gift_name_top {
          font-weight: 700;
          font-size: 18px;
          line-height: 125%;
          text-align: center;
          margin-top: 65px;
          color: $top-prizes;
        }
        .gift_name_default {
          font-weight: 700;
          font-size: 18px;
          line-height: 125%;
          text-align: center;
          margin-top: 65px;
          color: $general-prizes;
        }
      }
    }
  }
}
.lighthouse {
  @include flex-center;
  margin: 40px 0 40px 0;

  .lighthouse_text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 294px;
    height: 84px;
    margin-bottom: 20px;
    p {
      margin: 0;
      color: $primary-blue;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
    }
    .lighthouse_number {
      color: $primary-brown;
    }
    .lighthouse_line {
      margin: 0 8px;
    }
  }
}
.footer_market {
  @include flex-center;
  background-color: $primary-blue;
  height: 677px;
  border-radius: 50px 50px 0px 0px;
  padding-top: 40px;
  .market_slogan {
    color: #ffffff;
    width: 303px;
    height: 80px;
    font-size: 20px;
    line-height: 200%;
    text-align: center;
    letter-spacing: 0.2em;
  }
}
</style>
