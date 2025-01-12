<template>
    <h1>Users</h1>

    <Navbar></Navbar>

    <div style="margin-top: 400px">
        <p>The current time is {{ time }}</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script>

import Navbar from "../Shared/nav.vue";
import { Link } from '@inertiajs/inertia-vue3';
export default {
    components: { Navbar, Link },

    props: { time: String }
}
</script>


