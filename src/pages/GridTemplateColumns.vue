<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Grid template columns</h1>
  <container class="overflow-auto">
    <box striped class="grid grid-cols-4 gap-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
      <div class="bg-pink-500" :class="exampleClasses">01</div>
      <div class="bg-pink-500" :class="exampleClasses">02</div>
      <div class="bg-pink-500" :class="exampleClasses">03</div>
      <div class="bg-pink-500" :class="exampleClasses">04</div>
      <div class="bg-pink-500" :class="exampleClasses">05</div>
      <div class="bg-pink-500" :class="exampleClasses">06</div>
      <div class="bg-pink-500" :class="exampleClasses">07</div>
      <div class="bg-pink-500" :class="exampleClasses">08</div>
      <div class="bg-pink-500" :class="exampleClasses">09</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      
        <div class="grid grid-cols-4 ...">
          <div>01</div>
          <!-- ... -->
          <div>09</div>
        </div>
    
    </syntax-highlighter>    
  </container>

</template>
