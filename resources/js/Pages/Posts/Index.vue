<template>
    <Head title="Post"/>
    <h1 class="text-3xl mb-6">Post</h1>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ul class="space-y-4">
            <li
                v-for="post in posts"
                :key="post.id"
                class="bg-white p-4 rounded-lg shadow-sm"
            >
                <Link
                    :href="`/posts/${post.id}`"
                    class="text-blue-600 hover:text-blue-800 font-bold mb-2 block underline"
                >
                    {{ post.title }}
                </Link>

                <p class="text-gray-700 mb-2">
                    {{ post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body }}
                </p>

                <p class="text-sm text-gray-500">
                    {{ formattedVotes(post.votes_count) }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup>

 defineProps({
    posts: Object,
});

const formattedVotes = (votesCount) => {
    return `${votesCount} ${votesCount === 1 ? 'vote' : 'votes'}`;
};
</script>
