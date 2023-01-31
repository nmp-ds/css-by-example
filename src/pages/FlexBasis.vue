<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Flex basis</h1>
  <width-controller>
    <container>
      <box class="flex gap-4">
        <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">01</div>
        <div class="basis-1/4 bg-fuchsia-500" :class="exampleClasses">02</div>
        <div class="basis-1/2 bg-fuchsia-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-row">
          <div class="basis-1/4">01</div>
          <div class="basis-1/4">02</div>
          <div class="basis-1/2">03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>
</template>
