import axios from 'axios';
import { Topic } from '../pages/TopicsPage';
import { Vote } from '../pages/TopicsPage';

const API_BASE_URL = 'https://portal-rails.onrender.com'; 

class Api {
  static apiInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  // Método para buscar tópicos
  static async fetchTopics() {
    const response = await this.apiInstance.get('/topics');
    return response.data;
  }

  // Método para buscar votos
  static async fetchVotes() {
    const response = await this.apiInstance.get('/votes');
    return response.data;
  }

  static async addTopic(topic: Topic) {
    try {
      const response = await this.apiInstance.post('/topics', topic);
      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao adicionar o voto, verifique sua conexão com a internet e tente novamente');
    }
  }

  static async addVote(vote: Vote) {
    try {
      const response = await this.apiInstance.post('/votes', vote);
      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro ao adicionar o voto, verifique sua conexão com a internet e tente novamente');
    }
  }
}

export default Api;
