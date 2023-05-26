<script lang="ts" setup>

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const showCode = ref(false)
const { copy, copied } = useClipboard({ source: decodeURIComponent(props.rawSource) })

const decodeDescription = computed(() => {
  return decodeURIComponent(props.description || '')
})

const decodeSource = computed(() => {
  return decodeURIComponent(props.source)
})

const formatPathDemos = computed(() => {
  const demos = {}
  Object.keys(props.demos).forEach((key) => {
    // @ts-ignore
    demos[key.replace('../examples/', '').replace('.vue', '')] = props.demos[key].default
  })
  return demos
})

const demo = computed(() => {
  const path = props.path
  if (path) {
    // @ts-ignore
    return formatPathDemos.value[path]
  }
  return null
})
</script>

<template>
  <ClientOnly>
    <p text="sm" v-html="decodeDescription" />
    <div class="border border-solid border-gray-200 rd-sm dark:border-white dark:border-op-7!">
      <div class="p-6">
        <component :is="demo" v-if="demo" v-bind="$attrs" />
      </div>
      <div
        class="block relative w-full border-t border-solid border-gray-200 dark:border-white dark:border-op-7!"
      ></div>
      <div class="flex items-center p-2 c-gray-4 justify-end h-10">
        <button>
          <div class="i-carbon-copy w-4 mx-2 hover:c-gray-9" @click="copy()"></div>
        </button>
        <button>
          <div class="i-carbon-code mx-2 hover:c-gray-9" @click="showCode = !showCode"></div>
        </button>
      </div>
      <div ref="contentRef" v-show="showCode" v-html="decodeSource" class="language-vue extra-class"></div>
    </div>
  </ClientOnly>
</template>
