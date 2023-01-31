<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>
<style>
.grid-flow-row-dense{
  grid-auto-flow: row dense;
}
</style>
<template>
  <h1>Order</h1>
  <container>
    <box striped class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4" fg-color="var(--tw-purple-fg)" bg-color="var(--tw-purple-bg)">
      <div class="bg-purple-800 col-span-2" :class="exampleClasses">01</div>
      <div class="bg-purple-800 col-span-2" :class="exampleClasses">02</div>
      <div class="bg-purple-500" :class="exampleClasses">03</div>
      <div class="bg-purple-800" :class="exampleClasses">04</div>
      <div class="bg-purple-800" :class="exampleClasses">05</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
          <div class="col-span-2">
            01
          </div>
          <div class="col-span-2">
            02
          </div>
          <div>
            03
          </div>
          <div>
            04
          </div>
          <div>
            05
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
