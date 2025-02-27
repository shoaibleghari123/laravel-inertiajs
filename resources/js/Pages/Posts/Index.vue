<template>
    <Head title="Post" />

    <div class="flex justify-between mb-6">
        <div class="flex item-center">
            <h1 class="text-3xl">Post</h1>
            <Link href="/posts/create" class="text-blue-500 text-sm ml-2 mt-3">New Post</Link>
        </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <ul class="space-y-4">
            <li
                v-for="post in posts.data"
                :key="post.id"
                class="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4"
            >
                <div class="flex justify-between items-start">
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


                    <div class="flex">
                        <Link
                            v-if="post.can.edit"
                            :href="`/posts/${post.id}/edit`"
                            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm ml-4"
                        >
                            Edit
                        </Link>

                        <button
                            v-if="post.can.delete"
                            @click="deletePost(post.id)"
                            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm ml-4"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Comment Show -->
                <div v-if="post.comments.length" class="mt-4 border-t pt-2">
                    <h3 class="font-semibold text-lg mb-2">Comments <span class="text-red-600 text-sm">({{ post.comments_count ?? 0 }})</span></h3>
                    <div
                        v-for="comment in post.comments"
                        :key="comment.id"
                        class="p-3 bg-gray-100 rounded-lg mb-2 flex justify-between items-center"
                    >
                        <div>
                            <span class="font-bold text-gray-800">{{ comment.user.name }}</span>
                            <p class="text-gray-700 mt-1">
                                {{ comment.comment.length > 100 ? comment.comment.substring(0, 100) + '...' : comment.comment }}
                            </p>
                        </div>

                        <!-- Like Button -->
                        <div class="flex items-center space-x-2">
                            <button
                                @click="likeComment(comment.id)"
                                class="text-blue-500 hover:text-blue-700 text-sm"
                            >
                                👍 Like
                            </button>

                            <span
                                @click="showCommentUser(comment.id)"
                                :class="{'cursor-pointer hover:underline': comment.likes_count > 0, 'cursor-default': comment.likes_count === 0}"
                                class="text-gray-600 text-sm">
                                {{ comment.likes_count ?? 0 }}
                            </span>
                            <!-- Add modal component -->
                            <Modal
                                :show="showLikesModal"
                                @close="closeModal"
                                title="Users who liked this comment"
                            >

                            <div v-if="loadingLikes" class="text-center py-4">
                                Loading...
                            </div>
                            <div v-else-if="likeUsers.length === 0" class="text-center py-4">
                                No likes yet
                            </div>
                            <ul v-else class="divide-y divide-gray-200">
                                <li v-for="user in likeUsers" :key="user.id" class="py-3 flex">
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
                                    </div>
                                </li>
                            </ul>
                            </Modal>

                        </div>
                    </div>
                </div>


                <!-- Comment Box -->
                <div class="mt-2 flex">
                    <textarea
                        v-model="comments[post.id]"
                        placeholder="Write a comment..."
                        class="w-full border rounded-md focus:ring focus:ring-blue-300"
                    ></textarea>
                    <button
                        @click="submitComment(post.id)"
                        class="mt-2 ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm"
                    >
                        Comment
                    </button>
                </div>
            </li>
        </ul>
    </div>

    <Pageination :links="posts.links" class="mt-6" />
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";
import Pageination from "../../Shared/Pageination.vue";

import Modal from '../../Components/Modal';
import axios from 'axios';

defineProps({
    posts: Object,
    can: Object
});

const comments = ref({});
// Reactive state
const showLikesModal = ref(false);
const currentCommentId = ref(null);
const likeUsers = ref([]);
const deletePost = (id) => {
    if (confirm("Are you sure you want to delete this post?")) {
        useForm().delete(`/posts/${id}`);
    }
};

const formattedVotes = (votesCount) => {
    return `${votesCount} ${votesCount === 1 ? 'vote' : 'votes'}`;
};

const submitComment = (postId) => {
    if (!comments.value[postId]) return;

    const form = useForm({
        post_id: postId,
        comment: comments.value[postId],
    });

    form.post('/comments', {
        onSuccess: () => {
            comments.value[postId] = "";
        },
        onError: (errors) => {
            console.error('Comment submission errors:', errors);
        }
    });
};

const likeComment = (commentId) => {
    const form = useForm({
        likeable_id: commentId,
        likeable_type: 'comment',
    });

    form.post('like', {
        onSuccess: () => {
            console.log('successfully added');
        },
        onError: (errors) => {
            console.log('like error:', errors);
        }
    })
}

const showCommentUser = (commentId) => {
    currentCommentId.value = commentId;

    axios.get(`/comment/user/${commentId}`)
        .then(response => {
            console.log(response.data);
            likeUsers.value = response.data;
            showLikesModal.value = true;
        })
        .catch(error => {
            console.error('Error fetching likes:', error);
        });
}

const closeModal = () => {
    showLikesModal.value = false;
};
</script>
