<template>
  <Head title="Edit User" />
  <h1 class="text-3xl">Edit User</h1>

  <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">

    <div class="mb-6">
      <label for="name" class="block mb-2 uppercase font-bold text-xs text-gray-700">Name</label>
      <input v-model="form.name" type="text" class="border border-gray-400 p-2 w-full" id="name" name="name" value="name">
      <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>
    </div>

    <div class="mb-6">
      <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">Email</label>
      <input v-model="form.email" type="email" class="border border-gray-400 p-2 w-full" id="email" name="email" >
      <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1"></div>
    </div>

    <div class="mb-6">
      <button type="submit" class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" :disabled="form.processing">Update</button>
    </div>

  </form>

</template>

<script setup>

  import { useForm } from "@inertiajs/inertia-vue3";

  const props = defineProps({
    user: Object,
  });

  let form = useForm({
    name: props.user.name,
    email: props.user.email,
  });

  let submit = () => {
      form.put(`/users/${props.user.id}`);
  }

</script>

<style scoped>

</style>
