<script setup lang="ts">

const user = ref("")
const repo = ref("")
const path = ref("")

const examples = [
  {
    "user": "nakamura196",
    "repo": "lw-public",
    "path": "test.xml"
  },
  {
    "user": "nakamura196",
    "repo": "lw-private",
    "path": "test.xml"
  },
  {
    "user": "kouigenjimonogatari",
    "repo": "kouigenjimonogatari.github.io",
    "path": "tei/01.xml"
  },
]

const setExample = (index) => {
  const example = examples[index]
  user.value = example.user
  repo.value = example.repo
  path.value = example.path
}

const move = () => {
  const router = useRouter();
  router.push({
    name: "raw",
    query: {
      owner: user.value,
      repo: repo.value,
      filename: path.value
    }
  });
}
</script>

<template>
  <div class="container py-10 mx-auto px-4">
    <h2 class="text-2xl mb-4">データを選ぶ</h2>

    <div class="form-control mt-5">
      <label class="label">
        <span class="label-text">User</span>
      </label>
      <input type="text" v-model="user" placeholder="Type here" class="input input-bordered" />
    </div>

    <div class="form-control mt-5">
      <label class="label">
        <span class="label-text">Repository</span>
      </label>
      <input type="text" v-model="repo" placeholder="Type here" class="input input-bordered" />
    </div>

    <div class="form-control mt-5">
      <label class="label">
        <span class="label-text">Path</span>
      </label>
      <input type="text" v-model="path" placeholder="Type here" class="input input-bordered" />
    </div>

    <div class="mt-10">

      <button class="btn btn-primary mr-4" @click="move()">データを表示</button>
      
      <button class="btn mr-4" @click="setExample(0)">Publicデータの例</button>
      
      <button class="btn mr-4" @click="setExample(1)">Privateデータの例</button>

      <button class="btn mr-4" @click="setExample(2)">校異源氏物語の例</button>
    </div>
  </div>
</template>
