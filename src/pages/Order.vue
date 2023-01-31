<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Order</h1>
  <container>
    <box class="flex justify-between gap-4">
      <div class="bg-indigo-500 order-last" :class="exampleClasses">01</div>
      <div class="bg-indigo-500" :class="exampleClasses">02</div>
      <div class="bg-indigo-500" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex justify-between">
          <div class="order-last">
            01
          </div>
          <div>
            02
          </div>
          <div>
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
