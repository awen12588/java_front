<template>
  <!-- 隐私条约 -->
  <HeaderBar :currentName="_t18(`register_private`)"></HeaderBar>
  <div class="itemDetailObj" v-html="currentHtml"></div>
  <Nodata v-if="!currentHtml"></Nodata>
</template>
<script setup>
import { rulesList } from '@/api/common/index'
import { _t18 } from '@/utils/public'
const currentHtml = ref(null)
onMounted(async () => {
  try {
    const res = await rulesList('REGISTRY_PRIVACY')
    if (res.code === 200) {
      currentHtml.value = res.data[0].content
    }
  } catch (error) {}
})
</script>
<style>
.itemDetailObj {
  /* font-size: 12px; */
  padding: 10px 15px;
  color: var(--ex-default-font-color);
  line-height: 24px;
  word-wrap: break-word;
}

.itemDetailObj h1 {
  color: #333;
  font-size: 32px;
  font-weight: 700;
}

.itemDetailObj h2 {
  color: #333;
  font-size: 24px;
  font-weight: 700;
}

.itemDetailObj p {
  line-height: 25.6px;
  color: #666;
}

.itemDetailObj ul {
  list-style-type: disc;
  margin-left: 4em;
}

.itemDetailObj img {
  width: 100%;
}
</style>
