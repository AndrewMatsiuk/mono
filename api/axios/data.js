import { api } from '../instance';

export const dataApi = {
  async clientInfo() {
    const response = await api.get('/personal/client-info', {
      headers: {
        'X-Token': 'uDJ2D2sDb5BNUW2JRuamQKYPXEgk74zD4LfCONp0qljI',
      },
    });
    return response.data;
  },
};
