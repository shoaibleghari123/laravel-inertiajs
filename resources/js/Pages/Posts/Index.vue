<template>
    <Head title="Post" />

    <!-- Flash message -->
    <div
        v-if="$page.props.flash.message"
        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
        role="alert"
    >
        {{ $page.props.flash.message }}
    </div>

    <div class="flex justify-between mb-6">
        <div class="flex item-center">
            <h1 class="text-3xl">Post</h1>
            <Link href="/post/create" class="text-blue-500 text-sm ml-2 mt-3">New Post</Link>
        </div>

        <!-- <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg"> -->
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ul class="space-y-4">

            <li
                v-for="post in posts.data"
                :key="post.id"
                class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-start"
            >
                <div class="flex-1">
                    <Link
                        :href="`/posts/${post.id}`"
                        class="text-blue-600 hover:text-blue-800 font-bold mb-2 block underline"
                    >
                        {{ post.title }}
                    </Link>

                    <p class="text-gray-700 mb-2">
                        {{ post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body }}
                    </p>

                    Tags:
                    <span
                        v-for="tag in post.tags"
                        :key="tag.id"
                        class="text-green-600 pl-2 font-bold"
                    >
            {{ tag.name }}
        </span>

                    <p class="text-sm text-gray-500">
                        {{ formattedVotes(post.votes_count) }}
                    </p>
                </div>

                <Link
                    v-if="post.can.edit" :href="`/posts/1/edit`"
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm ml-4"
                >
                    Edit
                </Link>

                <Link
                    v-if="post.can.delete" :href="`/posts/${post.id}/delete`"
                    class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm ml-4"
                >
                    Delete
                </Link>
            </li>



        </ul>
    </div>
</template>

<script setup>

 defineProps({
    posts: Object,
     can: Object
});

const formattedVotes = (votesCount) => {
    return `${votesCount} ${votesCount === 1 ? 'vote' : 'votes'}`;
};
</script>
