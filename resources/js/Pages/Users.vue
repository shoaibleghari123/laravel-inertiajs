<template>

    <Head title="Users" />

   <div class="flex justify-between mb-6">
       <h1 class="text-3xl">Users</h1>

       <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg">
   </div>





    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                     name
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users.data" :key="user.id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ user.name }}
                </th>

                <td class="px-6 py-4">
                    <Link :href="`/users/${user.id}/edit`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>

                </td>
            </tr>

            </tbody>
        </table>
    </div>

   <Pageination :links="users.links" class="mt-6"/>
</template>

<script setup>
    import Pageination from "../Shared/Pageination.vue";
    import {ref, watch} from "vue";
    import {Inertia} from "@inertiajs/inertia";

   let props = defineProps({ users: Object, filters: Object });

    let search = ref(props.filters.search);

    watch(search, (value) => {
        Inertia.get('/users', {search: value}, {
            preserveState: true,
            replace: true,
        });
    });
</script>




