export const useEcpKey = () => {
  const socket = ref<WebSocket | null>(null);
  const isConnected = ref(false);

  const connect = () => {
    const protocol = window.location.protocol.toLowerCase() === 'https:' ? 'wss' : 'ws';
    const port = protocol === 'wss' ? 64443 : 64646;
    const URL = `${protocol}://127.0.0.1:${port}/service/cryptapi`;

    try {
      socket.value = new WebSocket(URL);

      socket.value.onopen = () => {
        isConnected.value = true;
        console.log('[E-IMZO] Socket connected');
      };

      socket.value.onerror = (e) => {
        console.error('[E-IMZO] Socket error', e);
      };

      socket.value.onclose = () => {
        isConnected.value = false;
        console.log('[E-IMZO] Socket closed');
      };
    }
    catch (e) {
      console.error('[E-IMZO] Connection failed', e);
    }
  };

  const sendRequest = (key: string, request: string) => {
    if (!socket.value || socket.value.readyState !== WebSocket.OPEN) {
      console.warn('[E-IMZO] Socket not open');
      return;
    }

    socket.value.onmessage = (event) => {
      console.log(`[E-IMZO] Response (${key}):`, event.data);
    };

    console.log(`[E-IMZO] Sending request:`, request);
    socket.value.send(request);
  };

  const disconnect = () => {
    if (socket.value) {
      socket.value.close();
      socket.value = null;
    }
  };

  return {
    connect,
    sendRequest,
    disconnect,
    isConnected,
  };
};
