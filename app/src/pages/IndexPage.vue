<template>
  <q-page class="row items-center justify-evenly">
    <my-input ref="myText" label="Text" v-model="text"></my-input>
    <my-input-password ref="myPassword" label="Password" v-model="password"></my-input-password>
  </q-page>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { MyInput, MyInputPassword } from 'lib';
import type { MyInputType, MyInputPasswordType } from 'lib';

const text = ref('xpto')
const password = ref('xpto')

const myText = ref<MyInputType>()
const myPassword = ref<MyInputPasswordType>()

onMounted(() => {
  console.log({ myText, myPassword })
  myPassword.value?.focus()
})
</script>
