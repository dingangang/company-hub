<template>
  <div class="page">
    <div class="text-center">
      <van-nav-bar
        title="预约的客户"
      />
      <div>
        <van-cell-group>
          <van-field
            v-model="search"
            placeholder="请输入联系电话,查找客户"
            clearable
            right-icon="search"
            @keyup.enter="handleSearch"
            @click-right-icon="handleSearch"
          />
        </van-cell-group>
      </div>
      <div class="p-mini">
        <van-cell-group class="ct-customer-list">
          <van-cell
            v-for="customer in customerList"
            :key="customer.list"
            class="ct-customer-list__item"
          >
            <div style="flex: 1">
              <span>{{customer.name}}{{customer.sex===1?'先生': '女士'}}</span>
              <span>{{customer.phone}}</span>
              <span>{{customer.type}}</span>
              <div v-show="customer.showDetail">
                <div>预约时间：{{$dayjs(customer.updatedAt).format('YYYY-MM-DD HH:mm')}}</div>
                <div>地址： {{customer.location}}</div>
              </div>
            </div>
            <div class="arrow-icon">
              <van-icon name="arrow-down" size="14" @click="$set(customer, 'showDetail', !customer.showDetail)" />
            </div>
          </van-cell>
        </van-cell-group>
      </div>

    </div>
  </div>
</template>

<script>
import { getSDK } from '@/utils/sdk'
import { getBookCustomers,
  getBookCustomer
} from '@/api/weixin'

export default {
  name: 'XinJieJiaDetails',
  data() {
    return {
      customerList: [],
      search: null
    }
  },
  created() {
    console.log(location.href.split('#')[0])
    const data = {
      url: location.href.split('#')[0]
    }
    const updateAppMessageShareData = {
      title: '欣洁家客户预定',
      desc: '欣洁家客户预定',
      link: 'https://www.szqiye.club/company-hub/#/xinjiejia/details',
      imgUrl: 'https://www.szqiye.club/company-hub/xinjiejia.jpg',
      success: function() {
        // 设置成功
      }
    }
    getSDK(data, updateAppMessageShareData)
    // 获取预约的用户
    getBookCustomers().then(res => {
      console.log(res)
      this.customerList = res
    }).catch(e => {
      console.log(e)
      this.$toast('出错了，请联系管理员')
    })
  },
  methods: {
    /**
     * 按电话号码查询客户
     */
    handleSearch() {
      if (!this.search) {
        this.$toast('获取全部预约客户')
        // 获取预约的用户
        getBookCustomers().then(res => {
          console.log(res)
          this.customerList = res
        }).catch(e => {
          console.log(e)
          this.$toast('出错了，请联系管理员')
        })
      } else {
        getBookCustomer(this.search).then(res => {
          console.log('res->', res)
          if (res.code === 200) {
            this.customerList = [res.data]
          }
          if (res.code === 500) {
            this.$toast('该电话找不到预约的客户')
          }
        }).catch(e => {
          console.log('e', e)
          this.$toast('出错了请联系管理员')
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .ct-customer-list {
    &__item {
      .van-cell__value {
        display: flex;
        justify-content: space-between;

        .arrow-icon {
          flex: 0 0 25px;
        }
      }
    }
  }
</style>
