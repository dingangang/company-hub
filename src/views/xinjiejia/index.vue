<template>
  <div class="page">
    <div class="text-center">
      <van-image
        :src="require('@/assets/xinjiejia/header.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
      <!--    <div class="text-center">-->
      <!--      <van-image-->
      <!--        :src="require('@/assets/xinjiejia/home1.jpg')"-->
      <!--        alt="home"-->
      <!--        lazy-load-->
      <!--        style="width: 100%"-->
      <!--      />-->
      <!--    </div>-->
      <!--    <div class="text-center mt-medium">-->
      <!--      <van-image-->
      <!--        :src="require('@/assets/xinjiejia/propaganda.jpg')"-->
      <!--        alt="home"-->
      <!--        lazy-load-->
      <!--        style="width: 100%"-->
      <!--      />-->
      <!--    </div>-->
      <!--    <div class="text-center mt-medium">-->
      <!--      <van-image-->
      <!--        :src="require('@/assets/xinjiejia/propaganda4.jpg')"-->
      <!--        alt="home"-->
      <!--        lazy-load-->
      <!--        style="width: 100%"-->
      <!--      />-->
    </div>
    <div class="text-center mt-medium">
      <p class="content-dashed-box">
        原价<span class="content-dashed-box__queto">180</span>元的抽油烟机清冼服务，<br>
        现仅需<span class="content-dashed-box__queto" style="font-size: 42px; vertical-align: -5px">99</span>元
      </p>
    </div>
    <div class="text-center mt-medium">
      <van-image
        :src="require('@/assets/xinjiejia/propaganda3.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
    </div>
    <!--    <div class="text-center mt-medium">-->
    <!--      <van-image-->
    <!--        :src="require('@/assets/xinjiejia/propaganda2.jpg')"-->
    <!--        alt="home"-->
    <!--        lazy-load-->
    <!--        style="width: 100%"-->
    <!--      />-->
    <!--    </div>-->
    <div class="text-center mt-medium">
      <van-image
        :src="require('@/assets/xinjiejia/propaganda1.jpg')"
        alt="home"
        lazy-load
        style="width: 100%"
      />
    </div>

    <div class="text-center mt-medium van-hairline--top pt-medium">
      <h1 style="font-size: 18px">公司简介</h1>
    </div>

    <div class="pb-medium van-hairline--bottom">
      <p class="content-text">
        欣洁家是一家专业化的清洗加盟公司，采用自主研发的专业材料，高科技的先进设备。技术工人都通过培训部门的专业清洁培训，
        有由国资委颁发的专业技能证书，具有专业的质量水准。家电清洗项目有:冰箱，洗衣机，空调，抽油烟机，自来水管，燃气热水器，
        电热水器，大型抽油烟机及大型中央空调的清洗。家政服务有新房的开荒保洁，日常的家居保洁，家具护理等服务。
        欣洁家家政的服务宗旨是:用心，专业，高效，为您提供优质的服务。
      </p>
      <p class="content-text">
        即日起 转发本页面到朋友圈，集满28个赞，凭图即可获取一次欣洁家家电（空调挂机，冰箱，洗衣机三选一）免费清洗服务和一次99元的抽油机清洗服务优惠。
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
import { getSDK } from '@/utils/sdk'

export default {
  name: 'XinJieJia',
  data() {
    return {
      content: '欣洁家，家电清洗免费送！！ 集满28个赞，凭图即可获取一次欣洁家家电（空调挂机，冰箱，洗衣机三选一）免费清洗服务和一次99元的抽油机清洗服务优惠'
    }
  },
  created() {
    const data = {
      url: location.href.split('#')[0]
    }
    getSDK(data)
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
    padding: 10px 10px 0;
    font-size: 14px;
    text-indent: 2em;
    border: 1px solid #eee;
    border-radius: 8px;
    margin: 20px;
    line-height: 48px;
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
  .content-dashed-box {
    margin: 20px;
    padding: 20px 0 20px 20px;
    border: 2px dashed #cd577f;
    border-radius: 8px;
    font-size: 20px;
    text-align: left;
    line-height: 42px;
    font-weight: bolder;

    &__queto {
      color: #cd577f;
    }
  }
</style>
