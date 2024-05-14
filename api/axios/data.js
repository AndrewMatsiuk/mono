import { api } from '../instance';

export const dataApi = {
  async clientInfo() {
    const response = await api.get('/personal/client-info', {
      headers: {
        'X-Token': '', // yor API key
      },
    });
    return response.data;
  },
};
