<script setup>
import CETEI from "../CETEIcean/CETEI.js";
const { token } = useAuth();
const content = ref(null);

onMounted(() => {
  getInfo();
});

const isError = ref(true);

const getInfo = async () => {
  isError.value = true;
  const route = useRoute();

  const user = route.query.owner;
  const repo = route.query.repo;
  const filename = route.query.filename;

  const body = {
    path: `/github-api/repos/${user}/${repo}/contents/${filename}`,
  };

  if (token.value) {
    body.access_token = token.value;
  }

  const res = await useAsyncData(
    "contents",
    () => $fetch("/api/proxy", { method: "POST", body: JSON.stringify(body) }),
    {
      initialCache: false,
    }
  ).then(({ data: contents }) => {
    return contents;
  });

  if (!res.value) {
    return;
  }

  isError.value = false;

  const decoded = decodeURIComponent(escape(atob(res.value.content)));

  var CETEIcean = new CETEI();
  CETEIcean.makeHTML5(decoded, function (data) {
    document.getElementById("TEI").appendChild(data);
  });

  content.value = decoded;
};

const edit = () => {
  const url =
    "https://leaf-writer.leaf-vre.org/" +
    window.location.search +
    "&ownertype=user&provider=github";
  window.open(url, "_blank");
};
</script>

<template>
  <div class="container py-10 mx-auto px-4">
    <div v-show="isError"> 表示できません。 </div>
    <div v-show="!isError">
      <button class="btn" @click="edit">Leaf Writerで編集</button>

      <div class="grid grid-cols-3 gap-4 mt-10">
        <div>
          <h2 class="text-2xl mb-4">CETEIcean</h2>
          <div id="TEI"></div>
        </div>
        <div>
          <h2 class="text-2xl mb-4">HTML</h2>
          <div v-html="content"></div>
        </div>
        <div>
          <h2 class="text-2xl mb-4">XML</h2>
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>
