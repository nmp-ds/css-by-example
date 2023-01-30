<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Grow</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
        <div class="w-14 h-14 flex-none bg-indigo-800" :class="exampleClasses">01</div>
        <div class="grow h-14 bg-indigo-500" :class="exampleClasses">02</div>
        <div class="w-14 h-14 flex-none bg-indigo-800" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex">
          <div class="flex-none ...">
            01
          </div>
          <div class="grow ...">
            02
          </div>
          <div class="flex-none ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>


  <h1>Do not grow</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
        <div class="h-14 grow bg-pink-800" :class="exampleClasses">01</div>
        <div class="h-14 grow-0 flex-1 bg-pink-500" :class="exampleClasses">02</div>
        <div class="h-14 grow bg-pink-800" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex">
          <div class="grow ...">
            01
          </div>
          <div class="grow-0 ...">
            02
          </div>
          <div class="grow ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
