import type { CertificateInfo } from '@composables/ecp-key/types';

export const useEcpKey = () => {
  const socket = ref<WebSocket | null>(null);
  const isConnected = ref(false);
  const keyList = ref<CertificateInfo[]>([]);

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

  const sendRequest = (key: string, request: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!socket.value || socket.value.readyState !== WebSocket.OPEN) {
        console.warn('[E-IMZO] Socket not open');
        reject('Socket not open');
        return;
      }

      socket.value.onmessage = (event) => {
        console.log(`[E-IMZO] Response (${key}):`, event.data);
        try {
          const data = JSON.parse(event.data);
          resolve(data);
        }
        catch (e) {
          reject(e);
        }
      };

      console.log(`[E-IMZO] Sending request:`, request);
      socket.value.send(request);
    });
  };

  const getKeys = async () => {
    const params = {
      plugin: 'pfx',
      name: 'list_certificates',
      arguments: ['C:\\'],
    };

    try {
      const response = await sendRequest('get-keys', JSON.stringify(params));

      if (response && response.certificates) {
        keyList.value = response.certificates;
      }
    }
    catch (e) {
      console.error('[E-IMZO] Failed to get certificates:', e);
      return [];
    }
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
    getKeys,
    disconnect,
    isConnected,
    keyList,
  };
};
