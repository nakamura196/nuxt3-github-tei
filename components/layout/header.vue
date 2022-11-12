<script setup>
const { user, logout } = useAuth();
const { $config } = useNuxtApp();
const userLogin = async () => {
  window.location.href = `https://github.com/login/oauth/authorize?scope=repo,user&client_id=${$config.GITHUB_CLIENT_ID}`;
};

const userLogout = async () => {
  await logout();
};
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">{{
        $config["SITE_NAME"]
      }}</nuxt-link>
    </div>
    <div class="flex-none gap-2">
      <template v-if="user">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img :src="user.avatar_url" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a @click="userLogout">Logout</a></li>
          </ul>
        </div>
      </template>
      <template v-else>
        <button @click="userLogin" class="btn btn-ghost">Login</button>
      </template>
    </div>
  </div>
</template>
