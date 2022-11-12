<script setup>
const route = useRoute();
const router = useRouter();
const code = route.query.code;
const { token, user } = useAuth();

onMounted(async () => {
  const url = "/api/login";
  const { data: res } = await useFetch(`${url}?code=${code}`);
  token.value = res.value.access_token;

  //トークンが発行されたら

  if(!token.value){
    // router.push("/");
  }

  const body = {
    path: "/github-api/user",
    access_token: token.value,
  }
  const { data: res2 } = await useFetch("/api/proxy", {
    method: "POST",
    body: JSON.stringify(body),
  });
  user.value = res2.value;

  router.push("/");
  
});
</script>

<template>
    <div/>
</template>
