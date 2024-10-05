<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- CHAT MESSAGE -->
    <ChatMessages :messages="messages" />

    <!-- MESSAGE BOX -->
    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Want to grab a coffee?',
    isMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'yes',
    isMine: false,
    image: 'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif',
  },
]);
</script>
