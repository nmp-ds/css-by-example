<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Spanning columns</h1>
  <container>
    <box class="grid grid-cols-3 gap-4">
      <div class="bg-indigo-800" :class="exampleClasses">01</div>
      <div class="bg-indigo-800" :class="exampleClasses">02</div>
      <div class="bg-indigo-800" :class="exampleClasses">03</div>
      <div class="bg-indigo-500 col-span-2" :class="exampleClasses">04</div>
      <div class="bg-indigo-800" :class="exampleClasses">05</div>
      <div class="bg-indigo-800" :class="exampleClasses">06</div>
      <div class="bg-indigo-500 col-span-2" :class="exampleClasses">07</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="grid grid-cols-3 ...">
          <div class="...">01</div>
          <div class="...">02</div>
          <div class="...">03</div>
          <div class="col-span-2 ...">04</div>
          <div class="...">05</div>
          <div class="...">06</div>
          <div class="col-span-2 ...">07</div> 
        </div>
      -->
    </syntax-highlighter>    
  </container>


  <h1>Starting and ending lines</h1>
  <container>
    <div class="grid grid-cols-6 gap-4">
      <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
      <div class="bg-blue-500 col-start-2 col-span-4" :class="exampleClasses">01</div>
      <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
      <div class="bg-blue-500 col-start-1 col-end-3" :class="exampleClasses">02</div>
      <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
      <box striped :class="exampleClasses" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)"></box>
      <div class="bg-blue-500 col-end-7 col-span-2" :class="exampleClasses">02</div>
      <div class="bg-blue-500 col-start-1 col-end-7" :class="exampleClasses">02</div>
    </div>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="grid grid-cols-6 ...">
          <div class="col-start-2 col-span-4 ...">01</div>
          <div class="col-start-1 col-end-3 ...">02</div>
          <div class="col-end-7 col-span-2 ...">03</div>
          <div class="col-start-1 col-end-7 ...">04</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
