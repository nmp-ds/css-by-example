<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Row</h1>
  <width-controller>
    <container>
      <box class="flex flex-row gap-4">
        <div class="bg-fuchsia-500" :class="exampleClasses">01</div>
        <div class="bg-fuchsia-500" :class="exampleClasses">02</div>
        <div class="bg-fuchsia-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-row ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Row reverse</h1>
  <width-controller>
    <container>
      <box class="flex flex-row-reverse gap-4">
        <div class="bg-blue-500" :class="exampleClasses">01</div>
        <div class="bg-blue-500" :class="exampleClasses">02</div>
        <div class="bg-blue-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
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

  <h1>Column</h1>
  <width-controller>
    <container>
      <box class="flex flex-col gap-4">
        <div class="bg-indigo-500" :class="exampleClasses">01</div>
        <div class="bg-indigo-500" :class="exampleClasses">02</div>
        <div class="bg-indigo-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-col ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Column reverse</h1>
  <width-controller>
    <container>
      <box class="flex flex-col-reverse gap-4">
        <div class="bg-violet-500" :class="exampleClasses">01</div>
        <div class="bg-violet-500" :class="exampleClasses">02</div>
        <div class="bg-violet-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex flex-col-reversed ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
