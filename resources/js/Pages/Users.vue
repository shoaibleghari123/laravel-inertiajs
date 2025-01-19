<template>

    <Head>
        <title>User</title>
        <meta type="description" content="User Description" head-key="description">
    </Head>

    <h1 class="text-4xl font-bold">Users</h1>

    <div style="margin-top: 400px">
        <p>The current time is {{ time }}</p>

    </div>

    <div>
        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

<script setup>
    defineProps({ times: String });
</script>




