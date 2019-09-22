<template>
  <div class="van-cell van-field p-0">
    <van-field
      v-bind="$attrs"
      readonly
      clickable
      :value="time"
      @click="showPicker=true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="pickerTime"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'TimeSelect',
  model: {
    prop: 'dateTime',
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: () => {
        return new Date(2017, 1, 1)
      }
    },
    maxDate: {
      type: Date,
      default: () => {
        return new Date()
      }
    },
    dateTime: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showPicker: false,
      time: this.dateTime,
      pickerTime: this.dateTime ? this.dateTime : new Date()
    }
  },
  methods: {
    handleConfirm(value) {
      this.time = this.$dayjs(value).format('YYYY-MM-DD HH:mm:ss')
      this.$emit('change', this.time)
      this.showPicker = false
    },
    handleCancel() {
      this.time = ''
      this.$emit('change', this.time)
      this.showPicker = false
    }
  }
}
</script>

<style scoped>

</style>
