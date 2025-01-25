<template>
    <Head :title="post.title" />

    <div class="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">{{ post.title }}</h1>

        <p class="text-gray-700 mb-6">{{ post.body }}</p>

        <div class="flex justify-between items-center border-t pt-4">
            <span class="text-gray-500"> {{ formattedValue(post.total_votes) }} </span>

            <div class="flex space-x-4 items-center">
                <div class="flex items-center space-x-2">
                    <Link
                        method="post"
                        :href="`/posts/${post.id}/votes`"
                        :data="{ vote: 'up' }"
                        class="flex items-center bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        Upvote
                    </Link>
                    <span class="text-green-600 font-bold">{{ post.up_votes_count }}</span>
                </div>

                <div class="flex items-center space-x-2">
                    <Link
                        method="post"
                        :href="`/posts/${post.id}/votes`"
                        :data="{ vote: 'down' }"
                        class="flex items-center bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        Downvote
                    </Link>
                    <span class="text-red-600 font-bold">{{ post.down_votes_count }}</span>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <Link
                href="/posts"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-flex items-center"
            >
                Back
            </Link>
        </div>

    </div>
</template>

<script setup>
defineProps({
    post: Object
})

const formattedValue = (vote) => {
    return `${vote} ${vote === 1 ? 'vote' : 'votes'}`
}
</script>
