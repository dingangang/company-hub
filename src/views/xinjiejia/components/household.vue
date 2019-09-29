<template>
  <div class="cell-container">
    <van-field
      required
      readonly
      clickable
      label="项目"
      :value="value"
      placeholder="选择清洗家电"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'HoseHoldSelect',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showPicker: false,
      columns: ['空调挂机', '冰箱', '洗衣机']
    }
  },
  methods: {
    onConfirm(e) {
      this.showPicker = false
      this.$emit('onConfirm', e)
    }
  },
}
</script>

<style scoped lang="scss">
  .cell-container {
    position: relative;
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 1rem;
      border-bottom: 1px solid #ebedf0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
  }
</style>
