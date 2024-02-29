<template>
  <q-page class="row items-center justify-evenly">
    <my-input ref="myText" label="Text" v-model="text" ></my-input>
    <my-input-password ref="myPassword" label="Password" v-model="password"></my-input-password>
  </q-page>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import type { MyInput, MyInputPassword } from 'lib';

const text = ref('xpto')
const password = ref('xpto')

const myText = ref<MyInput>()
const myPassword = ref<MyInputPassword>()

onMounted(() => {
  console.log({ myText, myPassword })
  myPassword.value?.focus()
})
</script>
