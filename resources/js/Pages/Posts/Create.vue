<template>
  <Head title="Create User" />
  <h1 class="text-3xl">Create New Post</h1>

    <form @submit.prevent="submitForm" class="">

        <div class="mb-8">
            <label for="title" class="block mb-2 uppercase font-bold text-xs text-gray-700">Title</label>
            <input v-model="form.title" type="text" class="border border-gray-400 p-2 w-full" id="title" name="title" >
            <div v-if="form.errors.title" v-text="form.errors.title" class="text-red-500 text-xs mt-1"></div>
        </div>

        <div class="mb-6">
            <label for="body" class="block mb-2 uppercase font-bold text-xs text-gray-700">Description</label>
            <textarea v-model="form.body" class="border border-gray-400 p-2 w-full" id="body" name="body"></textarea>
            <div v-if="form.errors.body" v-text="form.errors.body" class="text-red-500 text-xs mt-1"></div>
        </div>


        <div class="mb-6">
            <label for="body" class="block mb-2 uppercase font-bold text-xs text-gray-700">Tags</label>
            <div v-for="(item, index) in form.tags" :key="index" class="flex items-center space-x-2 mb-3">

                <div class="w-full">
                    <input
                        v-model="item.name"
                        type="text"
                        name="name"
                        class="p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
                    />
                    <p v-if="form.errors[`tags.${index}.name`]" class="text-red-500 text-xs mt-1">
                        {{ form.errors[`tags.${index}.name`] }}
                    </p>
                </div>


                <button type="button" @click="Remove(index)" class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"> Delete</button>
            </div>

            <div class="flex justify-end space-x-2 mt-2">
                <button type="button" @click="addMore" class="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"> Add More</button>
            </div>
        </div>

        <div class="mb-6">
            <button type="submit" class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" :disabled="form.processing">Submit</button>
        </div>

    </form>

</template>

<script setup>
    import { useForm } from "@inertiajs/inertia-vue3";

    let form = useForm({
        title: "",
        body: "",
        tags: [{ name: ''}],
    });

    const addMore = () => {
        form.tags.push({ name: ''});
    }

    const Remove = (index) => {
        form.tags.splice(index, 1);
        if (form.tags.length === 0) {
            addMore();
        }
    }
    let submitForm = () => {
        form.post("/post/store")
            .then(response => {
                // Success! Clear the form or redirect
                console.log(response.data.message);
                this.form = { title: '', body: '', tags: [{name: ''}] }; // Clear form
                this.errors = {}; // Clear errors
            })
            .catch(error => {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors; // Set errors from Laravel
                    console.log(this.errors);
                } else {
                    // Handle other errors (e.g., network errors)
                    console.error('An error occurred:', error);
                }
            });

    }

    const getErrorForTag = (index) => {
        alert(index);
        return this.form.errors[`tags.${index}.name`] || null;
    }

</script>

