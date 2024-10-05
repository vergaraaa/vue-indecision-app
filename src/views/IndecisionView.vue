<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Chat</span>
    </div>

    <!-- CHAT MESSAGE -->
    <ChatMessages :messages="messages" />

    <!-- MESSAGE BOX -->
    <MessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import { useChat } from '@/composables/useChat';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const { messages, onMessage } = useChat();
</script>
