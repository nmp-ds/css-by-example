<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Spanning rows</h1>
  <container>
    <box striped class="grid grid-rows-3 grid-flow-col gap-4" fg-color="var(--tw-fuchsia-fg)" bg-color="var(--tw-fuchsia-bg)">
      <div class="bg-fuchsia-500 row-span-3" :class="exampleClasses">01</div>
      <div class="bg-fuchsia-800 col-span-2" :class="exampleClasses">02</div>
      <div class="bg-fuchsia-500 col-span-2 row-span-2" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="grid grid-rows-3 grid-flow-col ...">
          <div class="row-span-3 ...">01</div>
          <div class="col-span-2 ...">02</div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>


  <h1>Starting and ending lines</h1>
  <container>
    <box striped class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="bg-blue-500 row-start-2 row-span-2 ..." :class="exampleClasses">01</div>
      <div class="bg-blue-500 row-end-3 row-span-2 ..." :class="exampleClasses">02</div>
      <div class="bg-blue-500 row-start-1 row-end-4" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="grid grid-rows-3 grid-flow-col ...">
          <div class="row-start-2 row-span-2 ...">01</div>
          <div class="row-end-3 row-span-2 ...">02</div>
          <div class="row-start-1 row-end-4 ...">03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
