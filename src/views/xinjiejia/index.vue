<template>
  <div class="page">
    <div class="text-center">
      <van-image
        :src="require('@/assets/xinjiejia/home1.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
      <!--      <img src="@/assets/xinjiejia/home1.jpg" alt="home" style="width: 100%">-->
    </div>
    <div class="text-center mt-medium">
      <van-image
        :src="require('@/assets/xinjiejia/propaganda.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
      <!--      <img src="@/assets/xinjiejia/propaganda.jpg" alt="home" style="width: 100%">-->
    </div>
    <div class="text-center mt-medium">
      <van-image
        :src="require('@/assets/xinjiejia/propaganda2.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
      <!--      <img src="@/assets/xinjiejia/propaganda2.jpg" alt="home" style="width: 100%">-->
    </div>
    <div class="text-center mt-medium">
      <van-image
        :src="require('@/assets/xinjiejia/propaganda1.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
      <!--      <img src="@/assets/xinjiejia/propaganda1.jpg" alt="home" style="width: 100%">-->
    </div>

    <div class="text-center mt-medium van-hairline--top pt-medium">
      <h1 style="font-size: 18px">活动：家电清洗服务免费送</h1>
      <div class="mt-small text-secondary text-mini">活动时间：即日至2019年10月7日</div>
    </div>

    <div class="pb-medium van-hairline--bottom">
      <p class="content-text">
        欣洁家是一家真正以专业产品、设备、技术为核心运营的公司，是目前同行业中唯一一家拥有6项药剂发明专利的公司，
        公司清洁剂和清洁设备的研发为基础优势。在家电保洁的基础上，创新发展，以环保的思想发展自己。在家电清洁过程中，
        我们技术人员可以提供大量实操经验，站在消费者的角度看问题，“以人为本”相互友好合作，团结一致。
      </p>
      <p class="content-text" />
      <p class="content-text">
        即日起转发本页面到微信朋友圈，集满38个赞，凭截图即可领取欣洁家家电(冰箱/电视/洗衣机三选一)清洗机会一次。
      </p>
      <p class="content-addones">
        注：每个电话号码限一参与一次活动。本活动最终解释权由欣洁家（全国）家政有限公司所有。
      </p>
    </div>

    <div class="steps-box">
      <div class="steps-box__title">步骤1：点击下方按钮，复制文本</div>
      <div class="steps-box__bd van-hairline--bottom mb-small">
        <p class="content-paragraph">
          <span class="content-queto">“</span>
          {{ content }}
          <span class="content-queto">”</span>
        </p>
        <van-button
          type="primary"
          class="copy-btn"
          data-clipboard-action="copy"
          :data-clipboard-text="content"
          @click="copyLink"
        >点击复制文本</van-button>
      </div>
      <div class="steps-box__title">步骤2：点击浏览器右上角，选择分享到微信朋友圈</div>
      <div class="steps-box__title">步骤3：集满赞后，联系店家凭集赞截图获取免费家电清洗机会</div>
    </div>

    <div class="text-center mt-medium">
      <h2>联系电话：<a ref="phone" href="tel:15673304797" class="text-link" style="font-style: italic;text-decoration: underline">15673304797</a> 姚女士</h2>
      <van-button type="info" class="mt-small" @click="startCall">拨打电话</van-button>
    </div>

    <div class="text-center mt-medium qrCode">
      <h2 class="text-red">长按下面的二维码，添加店家微信 ↓↓↓</h2>
      <img src="@/assets/xinjiejia/xinjiejiaQR.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'XinJieJia',
  data() {
    return {
      content: '欣洁家家电清洗。家电清洗免费送。分享本页到朋友圈，集满38个赞，凭截图，获取免费（电视/冰箱/空调）清洗服务一次。'
    }
  },
  methods: {
    copyLink() {
      const _this = this
      const clipboard = new Clipboard('.copy-btn')
      clipboard.on('success', function() {
        _this.$toast('复制成功')
      })
      clipboard.on('error', function() {
        _this.$toast('复制失败')
      })
    },
    startCall() {
      window.location.href = 'tel://15673304797'
    }
  }
}
</script>

<style scoped lang="scss">
  .qrCode {
    > img {
      width: 70%;
    }
  }

  .content-paragraph {
    padding: 0 10px;
    font-size: 14px;
    text-indent: 2em;
    border: 1px solid #eee;
    border-radius: 8px;
    margin: 20px;
  }

  .content-queto {
    font-size: 48px;
    vertical-align: middle;
  }

  .content-text {
    padding: 0 10px;
    font-size: 14px;
    line-height: 20px;
    text-indent: 2em;
    margin: 10px;
  }

  .content-addones {
    text-indent: 2em;
    font-size: 12px;
    color: $color-text-secondary;
    padding: 0 2em;
  }

  .steps-box {
    margin-top: 20px;

    &__title {
      font-size: 14px;
      color: $color-text-secondary;
      padding: 0 2em;
      line-height: 16px;

      & + & {
        margin-top: 10px;
      }
    }

    &__bd {
      text-align: center;
      padding-bottom: 24px;
    }
  }
</style>
