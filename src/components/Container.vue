<script setup>
import { inject, ref, onMounted } from 'vue'

const widthController = inject('widthController')
const el = ref(null)
const registerSelf = () => widthController?.register(el.value)
onMounted(registerSelf)
</script>

<template>
  <section class="py-8 px-4 rounded-4 border border-gray-200 bg-gray-100" ref="el">
    <slot />
  </section>
</template>
