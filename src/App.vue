<script setup>
import Box from './components/Box.vue'
import Container from './components/Container.vue'
import WidthController from './components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Flex initial</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="rgba(2,132,199, 0.5)">
        <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
        <div class="w-64 flex-initial bg-sky-600" :class="exampleClasses">02</div>
        <div class="w-32 flex-initial bg-sky-600" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>

  <h1>Flex 1</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="rgba(2,132,199, 0.5)">
        <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
        <div class="w-64 flex-1 bg-sky-600" :class="exampleClasses">02</div>
        <div class="w-32 flex-1 bg-sky-600" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>

  <h1>Flex auto</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="rgba(2,132,199, 0.5)">
        <div class="w-14 flex-none bg-sky-300" :class="exampleClasses">01</div>
        <div class="w-64 flex-auto bg-sky-600" :class="exampleClasses">02</div>
        <div class="w-32 flex-auto bg-sky-600" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
</template>
