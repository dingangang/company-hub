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
    <!--    <div class="text-center mt-medium">-->
    <!--      <van-image-->
    <!--        :src="require('@/assets/xinjiejia/propaganda3.jpg')"-->
    <!--        alt="home"-->
    <!--        lazy-load-->
    <!--        style="width: 100%"-->
    <!--      />-->
    <!--    </div>-->
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
        即日起至10月1日转发本页面到朋友圈，提交下方信息，前200位顾客，可获取一次欣洁家家电（空调挂机，冰箱，洗衣机三选一）免费清洗服务和一次99元的抽油机清洗服务优惠。
      </p>
      <p class="content-addones">
        注：每个电话号码限一参与一次活动。本公司承诺，用户填写的电话仅为本次活动联系使用。本活动最终解释权由欣洁家（全国）家政有限公司所有。
      </p>
    </div>

    <div class="ct-form-box">
      <van-cell-group>
        <van-field
          v-model="form.name"
          placeholder="请输入姓名"
          required
          clearable
          label="姓名"
        />
        <van-field
          v-model="form.phone"
          placeholder="请输入联系电话"
          required
          clearable
          label="电话"
        />
        <van-cell
          title="性别"
          title-class="short-title"
          required
        >
          <van-radio-group slot="default" v-model="form.sex" class="inline-radio">
            <van-radio :name="1">先生</van-radio>
            <van-radio :name="2">女士</van-radio>
          </van-radio-group>
        </van-cell>
        <hose-hold
          :value="form.type"
          @onConfirm="e => form.type = e"
        />
        <van-field
          v-model="form.location"
          placeholder="请输入地址，如：台北城"
          clearable
          label="地址"
        />
      </van-cell-group>
      <div class="text-center pt-medium">
        <van-button type="primary" @click="handleSubmit">立即预约</van-button>
      </div>
    </div>

    <!--    <div class="steps-box">-->
    <!--      <div class="steps-box__title">步骤1：点击下方按钮，复制文本</div>-->
    <!--      <div class="steps-box__bd van-hairline&#45;&#45;bottom mb-small">-->
    <!--        <p class="content-paragraph">-->
    <!--          <span class="content-queto">“</span>-->
    <!--          {{ content }}-->
    <!--          <span class="content-queto">”</span>-->
    <!--        </p>-->
    <!--        <van-button-->
    <!--          type="primary"-->
    <!--          class="copy-btn"-->
    <!--          data-clipboard-action="copy"-->
    <!--          :data-clipboard-text="content"-->
    <!--          @click="copyLink"-->
    <!--        >点击复制文本</van-button>-->
    <!--      </div>-->
    <!--      <div class="steps-box__title">步骤2：点击浏览器右上角，选择分享到微信朋友圈</div>-->
    <!--      <div class="steps-box__title">步骤3：集满赞后，联系店家凭集赞截图获取免费家电清洗机会</div>-->
    <!--    </div>-->

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
import HoseHold from './components/household'
import { getSDK } from '@/utils/sdk'
import { submitBookInfo } from '@/api/weixin'

export default {
  name: 'XinJieJia',
  components: {
    HoseHold
  },
  data() {
    return {
      content: '欣洁家，家电清洗免费送！！ 集满28个赞，凭图即可获取一次欣洁家家电（空调挂机，冰箱，洗衣机三选一）免费清洗服务和一次99元的抽油机清洗服务优惠',
      form: {
        name: null,
        sex: null,
        location: '',
        phone: '',
        type: null
      }
    }
  },
  created() {
    const data = {
      url: location.href.split('#')[0]
    }
    const updateAppMessageShareData = {
      title: '欣洁家家政庆国庆，家电清洗免费拉！',
      desc: '★国资委指定全国培训基地\n★国家开放大学',
      link: 'https://www.szqiye.club/company-hub/#/xinjiejia',
      imgUrl: 'https://www.szqiye.club/company-hub/xinjiejia.jpg',
      success: function() {
        // 设置成功
      }
    }
    const updateTimelineShareData = {
      title: '欣洁家家政庆国庆，家电清洗免费拉！！', // 分享标题
      link: 'https://www.szqiye.club/company-hub/#/xinjiejia', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.szqiye.club/company-hub/xinjiejia.jpg', // 分享图标
      success: function() {
        // 设置成功
      }
    }
    getSDK(data, updateAppMessageShareData, updateTimelineShareData)
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
    },
    // 提交预定信息
    handleSubmit() {
      console.log(this.form)
      if (this.validForm(this.form)) {
        console.log('校验成功')
        submitBookInfo(this.form)
          .then(res => {
            console.log('res ->', res)
            if (res.code === 200) {
              this.$toast('预约成功，请等待店家联系')
            } else if (res.code === 500) {
              this.$toast('该手机号已经预约了，请联系店家')
            }
          }).catch(e => {
            this.$toast('出错了，请直接联系店家')
            console.log(e)
          })
      } else {
        return
      }
    },
    // 校验表单
    validForm(form) {
      const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
      if (!form.name) {
        this.$toast('名字不能为空')
        return false
      } else if (!form.phone) {
        this.$toast('电话不能为空')
        return false
      } else if (!form.sex) {
        this.$toast('性别不能为空')
        return false
      } else if (!form.type) {
        this.$toast('家电类型不能为空')
        return false
      }

      if (form.name.length > 6) {
        this.$toast('名字限定6字以内')
        return false
      }

      if (!reg.test(form.phone)) {
        this.$toast('请输入正确手机号')
        return false
      }

      return true
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

  .ct-form-box {
    margin: 10px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
  }

  .inline-radio {
    .van-radio {
      float: left;
      margin-right: 20px;
    }
  }

  .short-title {
    flex: 0 0 90px
  }
</style>
