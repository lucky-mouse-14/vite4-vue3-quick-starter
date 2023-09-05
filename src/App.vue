<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
