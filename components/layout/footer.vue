<script setup>
const { $config } = useNuxtApp();
const footerNavigation = [];
</script>

<template>
  <footer class="footer p-10 bg-base-200 text-base-content" v-if="footerNavigation.length > 0">
    <div v-for="(item, key) in footerNavigation" :key="key">
      <span class="footer-title">{{ item.label }}</span>

      <template v-for="(item2, key2) in item.children">
        <template v-if="item2.to">
          <nuxt-link :to="item2.to" class="link link-hover" :key="key2">{{
            item2.label
          }}</nuxt-link>
        </template>
        <template v-else>
          <a target="_blank" :href="item2.href" class="link link-hover" :key="key2">{{
            item2.label
          }}</a>
        </template>
      </template>
    </div>
  </footer>
  <footer
    class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300"
  >
    <div class="items-center grid-flow-col">
      <p>{{ $config["SITE_NAME"] }}</p>
    </div>
    <div class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
      </div>
    </div>
  </footer>
</template>
