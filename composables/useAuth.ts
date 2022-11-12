// const { $config } = useNuxtApp();

export function useAuth() {

  // const user = ref({});
  const user = useState("user", () => null);

  const token = useState("token", () => null);

  const isAuthed = computed(() => !!token.value);

  // ログイン
  async function login() {
    // window.location.href =`https://github.com/login/oauth/authorize?scope=user&client_id=${$config.GITHUB_CLIENT_ID}`
  }

  // ログアウト
  async function logout() {
    token.value = null
    user.value = null
  }

  return { isAuthed, user, login, logout, token };
}
