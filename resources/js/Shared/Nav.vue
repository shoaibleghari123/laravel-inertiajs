<template>
    <nav>
        <ul class="flex space-x-6">
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users/index'">Users</NavLink>
            </li>

            <li>
                <NavLink href="/posts" :active="$page.component === 'Posts/Index'">Posts</NavLink>
            </li>

            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">Settings</NavLink>
            </li>

            <li>
                <NavLink href="/logout" method="post">Log Out</NavLink>
            </li>

        </ul>
    </nav>
</template>

<script>

import NavLink from "./NavLink.vue";

export default {
    components: { NavLink },
}
</script>

<style>

</style>
