<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>
<style>
.bg-stripes-white{
  background-image: linear-gradient(135deg,hsla(0,0%,100%,.75) 10%,transparent 0,transparent 50%,hsla(0,0%,100%,.75) 0,hsla(0,0%,100%,.75) 60%,transparent 0,transparent);
  background-size: 7.07px 7.07px;
}
</style>
<template>
  <h1>Basic usage</h1>
  <container>
    <box class="flex flex-wrap items-start justify-center text-white text-sm font-bold leading-6 -mx-5">
      <div class="flex items-start">
        <div class="flex-none px-5">
          <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
            <div striped class="h-6 bg-stripes-white striped rounded-t-lg"></div>
            <div class="p-4">pt-6</div>
          </div>
        </div>
        <div class="flex-none px-5 pt-6">
          <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
            <div class="flex-none p-4">pr-4</div>
            <div class="flex-none w-4 bg-stripes-white"></div>
          </div>
        </div>
      </div>
      <div class="flex items-start">
        <div class="flex-none px-5 pt-6">
          <div class="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">pb-8</div>
            <div class="h-8 bg-stripes-white"></div>
          </div>
        </div>
        <div class="flex-none flex px-5 pt-6">
          <div class="flex bg-purple-500 shadow-lg rounded-lg overflow-hidden">
            <div class="flex-none w-2 bg-stripes-white"></div>
            <div class="flex-none p-4">pl-2</div>
          </div>
        </div>
      </div>
    </box>
  </container>
  <h1>Horizontal Padding</h1>
  <container>
    <box class="relative rounded-xl overflow-auto p-8">
      <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
        <div class="bg-indigo-500 rounded-lg shadow-lg overflow-hidden flex">
          <div class="w-8 bg-stripes-white"></div>
          <div class="p-4">px-8</div>
          <div class="w-8 bg-stripes-white"></div>
        </div>
      </div>
    </box>
  </container>
  <h1>Vertical padding</h1>
  <container>
    <box class="relative rounded-xl overflow-auto p-8">
      <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
        <div class="bg-pink-500 rounded-lg shadow-lg overflow-hidden">
          <div class="h-8 bg-stripes-white"></div>
          <div class="p-4">py-8</div>
          <div class="h-8 bg-stripes-white"></div>
        </div>
      </div>
    </box>
  </container>
  <h1>Padding to all sides</h1>
  <container>
    <box class="relative rounded-xl overflow-auto p-8">
      <div class="flex justify-center font-mono text-white text-sm font-bold leading-6">
        <div class="bg-violet-500 bg-stripes-white rounded-lg shadow-lg p-8">
          <div class="bg-violet-500 p-4">p-8</div>
        </div>
      </div>
    </box>
  </container>
</template>
