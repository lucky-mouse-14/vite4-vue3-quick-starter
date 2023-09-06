<script setup>
const refMouseMask = ref(null)
const mouseState = reactive(useMouseInElement(refMouseMask))
</script>

<template>
  <div class="home-container" flex justify-center items-center relative w-full h-full>
    <div ref="refMouseMask" w-800px max-w-full h-520px overflow-hidden relative shadow-xl rounded-5px>
      <div absolute top-0 left-0 z-1 w-800px>
        <img src="@/assets/images/home/light.png" w-full h-auto pointer-events-none>
      </div>
      <div
        relative left-0 top-0 h-full z-2 overflow-hidden :class="{ 'transition-all': mouseState.isOutside }" :style="{
          width: mouseState.isOutside ? '50%' : `${mouseState.elementX}px`,
        }"
      >
        <div absolute top-0 left-0 w-800px>
          <img src="@/assets/images/home/dark.png" w-full h-auto pointer-events-none>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  height: 100vh;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
