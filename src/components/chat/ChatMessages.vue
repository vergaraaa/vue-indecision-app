<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :is-mine="true" :message="'Hellooo'" />
      <ChatBubble
        :is-mine="false"
        :message="'hiii'"
        :image="'https://yesno.wtf/assets/no/28-e19b6f658f621f7c5980a33f8249a65d.gif'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
