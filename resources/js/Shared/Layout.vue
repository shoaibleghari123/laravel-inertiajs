<template>

  <section class="p-6 bg-gray-200">
    <header class="flex justify-between">
      <div class="flex items-center">
        <h1 class="font-bold text-lg">My App</h1>

        <p class="text-sm ml-4">
          Welcome Back, {{ $page.props.auth.user.username }}!
        </p>
      </div>
      <Nav></Nav>

    </header>
  </section>

  <section class="p-6">
    <div class="max-w-3xl mx-auto">
      <slot></slot>
    </div>
  </section>


</template>


<script>
import Nav from "./Nav.vue";
import Toastr from "../Plugins/Toastr";
export default {
  components: {Nav},
    props: {flash: Object},
    watch: {
        flash: {
            handler(flash) {
                if (flash && flash.message) {
                    if (flash.type === 'success') {
                        Toastr.success(flash.message);
                    } else if (flash.type === 'error') {
                        Toastr.error(flash.message);
                    } else if (flash.type === 'info') {
                        Toastr.info(flash.message);
                    } else if (flash.type === 'warning') {
                        Toastr.warning(flash.message);
                    }
                }
            },
            immediate: true
        }
    }
}


// export default {
//     props: {
//         flashMessages: Object
//     },
//
// }
</script>

<style>

</style>
