const defaultOptions = {
  lock: true,
  text: '加载中...',
  background: 'rgba(0,0,0,0.1)',
}

/**
 * 传入一个防范，在它执行周期内，加上全屏loading
 */
export function useLoading() {
  let loadingInstance = null
  function showLoading(options = {}) {
    loadingInstance = ElLoading.service({
      ...defaultOptions,
      ...options,
    })
  }
  function hideLoading() {
    if (loadingInstance)
      loadingInstance.close()
  }

  return {
    showLoading,
    hideLoading,
  }
}
