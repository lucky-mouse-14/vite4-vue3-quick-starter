/**
 * @descriptions 封装环境变量hooks，方便日后修改名字
 */
export function useEnv() {
  const { MODE, PROD, DEV, BASE_URL, VITE_APP_TITLE, VIATE_BASE_PATH, VITE_API_URL } = import.meta.env

  return {
    MODE, PROD, DEV, BASE_URL, VITE_APP_TITLE, VIATE_BASE_PATH, VITE_API_URL,
  }
}
