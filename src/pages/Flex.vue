<script setup>
// Note there's a way we can just import these globally so we don't have to do it in every page
import Box from '../components/Box.vue'
import Container from '../components/Container.vue'
import WidthController from '../components/WidthController.vue'

const exampleClasses = 'p-4 rounded-2 text-white flex items-center justify-center'
</script>

<template>
  <h1>Flex initial</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-blue-fg)" bg-color="var(--tw-blue-bg)">
        <div class="w-14 flex-none bg-blue-800" :class="exampleClasses">01</div>
        <div class="w-64 flex-initial bg-blue-500" :class="exampleClasses">02</div>
        <div class="w-32 flex-initial bg-blue-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex">
          <div class="flex-none w-14 h-14">
            01
          </div>
          <div class="flex-initial w-64 ...">
            02
          </div>
          <div class="flex-initial w-32 ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>


  <h1>Flex 1</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-pink-fg)" bg-color="var(--tw-pink-bg)">
        <div class="w-14 flex-none bg-pink-800" :class="exampleClasses">01</div>
        <div class="w-64 flex-1 bg-pink-500" :class="exampleClasses">02</div>
        <div class="w-32 flex-1 bg-pink-500" :class="exampleClasses">03</div>
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
          <div class="flex-1 w-64 ...">
            02
          </div>
          <div class="flex-1 w-32 ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Flex auto</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-violet-fg)" bg-color="var(--tw-violet-bg)">
        <div class="w-14 flex-none bg-violet-800" :class="exampleClasses">01</div>
        <div class="w-64 flex-auto bg-violet-500" :class="exampleClasses">02</div>
        <div class="w-32 flex-auto bg-violet-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex ...">
          <div class="flex-none ...">
            01
          </div>
          <div class="flex-auto w-64 ...">
            02
          </div>
          <div class="flex-auto w-32 ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

  <h1>Flex None</h1>
  <width-controller>
    <container>
      <box striped class="flex gap-4" fg-color="var(--tw-indigo-fg)" bg-color="var(--tw-indigo-bg)">
        <div class="w-14 flex-none bg-indigo-800" :class="exampleClasses">01</div>
        <div class="w-64 flex-none bg-indigo-500" :class="exampleClasses">02</div>
        <div class="w-32 flex-1 bg-indigo-500" :class="exampleClasses">03</div>
      </box>
    </container>
  </width-controller>
  <h2>Code example</h2>
  <container>
    <syntax-highlighter>
      <!--
        <div class="flex ...">
          <div class="flex-none w-14 h-14...">
            01
          </div>
          <div class="flex-none ...">
            02
          </div>
          <div class="flex-1 ...">
            03
          </div>
        </div>
      -->
    </syntax-highlighter>    
  </container>

</template>
