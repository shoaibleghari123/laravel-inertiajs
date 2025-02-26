<template>
  <Head title="Update Post" />
  <h1 class="text-3xl">Update Post</h1>

    <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8">

        <div class="mb-8">
            <label for="title" class="block mb-2 uppercase font-bold text-xs text-gray-700">Title</label>
            <input v-model="form.title" type="text" class="border border-gray-400 p-2 w-full" id="title" name="title" >

            <div v-if="form.errors.title" v-text="form.errors.title" class="text-red-500 text-xs mt-1"></div>
        </div>

        <div class="mb-6">
            <label for="body" class="block mb-2 uppercase font-bold text-xs text-gray-700">Description</label>
            <textarea v-model="form.body" class="border border-gray-400 p-2 w-full" id="body" name="body" rows="5"></textarea>
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
            <button type="submit" class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" :disabled="form.processing">Update</button>
        </div>

    </form>

</template>

<script setup>
    import { useForm } from "@inertiajs/inertia-vue3";


    const props = defineProps({
        post: {
            type: Object
        }
    });

    let form = useForm({
        title: props.post.title || "",
        body: props.post.body || "",
        tags: props.post.tags.length ? props.post.tags.map(tag => ({ name: tag.name })) : [{ name: '' }],
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
        form.post(`/posts/${props.post.id}`);

    }

</script>

