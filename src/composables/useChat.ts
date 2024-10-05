import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no-response.interface';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getReponse = async () => {
    const data: YesNoResponse = await fetch('https://yesno.wtf/api').then((res) => res.json());

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      isMine: true,
    });

    if (!text.endsWith('?')) return;

    const { answer, image } = await getReponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      isMine: false,
      image: image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  };
};
