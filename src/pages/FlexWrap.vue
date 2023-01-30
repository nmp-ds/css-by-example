<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Do not wrap</h1>
  <container class="overflow-auto">
    <box class="flex flex-nowrap gap-4">
      <div class="w-2/5 flex-none bg-sky-500" :class="exampleClasses">01</div>
      <div class="w-2/5 flex-none bg-sky-500" :class="exampleClasses">02</div>
      <div class="w-2/5 flex-none bg-sky-500" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-nowrap ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Wrap normally</h1>
  <container>
    <box class="flex flex-wrap gap-4">
      <div class="w-2/5 flex-none bg-indigo-500" :class="exampleClasses">01</div>
      <div class="w-2/5 flex-none bg-indigo-500" :class="exampleClasses">02</div>
      <div class="w-2/5 flex-none bg-indigo-500" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-row-reversed ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Wrap reversed</h1>
  <container>
    <box class="flex flex-wrap-reverse gap-4">
      <div class="w-2/5 flex-none bg-fuchsia-500" :class="exampleClasses">01</div>
      <div class="w-2/5 flex-none bg-fuchsia-500" :class="exampleClasses">02</div>
      <div class="w-2/5 flex-none bg-fuchsia-500" :class="exampleClasses">03</div>
    </box>
  </container>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-row-reversed ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
