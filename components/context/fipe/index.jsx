import axios from "axios";
import { create } from "zustand";

const useFipeStore = create((set) => ({
    error: null,
    fetchDataFipe: async (endpoint) => {
        const api = axios.create({
            baseURL: "https://fipe.parallelum.com.br/api/v2/",
            headers: {
                "X-Subscription-Token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4YTA1ZDQ0MC1mMmY2LTQxZmYtOTg1Yi0zMTYxNjU3NGRjNzYiLCJlbWFpbCI6ImRlc2Vudm9sdmltZW50b0BsaW9uc2Nhci5jb20iLCJzdHJpcGVTdWJzY3JpcHRpb25JZCI6InN1Yl8xUUZHSDVDU3ZJczA4dElFSzM5Z1Y0Qk0iLCJpYXQiOjE3MzAyMTE2MTZ9._G9zu9JRzQDNMwh2T129ynRB0J0YmAduB7JVWnAqLKM",
            },
        });

        // Intercepta as respostas com erro
        api.interceptors.response.use(
            (response) => response, // Retorna a resposta normalmente para sucessos
            (error) => {
                if (error.response?.status === 404) {
                    // Retorna uma resposta silenciosa para 404
                    return { data: null }; // Simula uma resposta válida
                }
                // Lança erros diferentes de 404
                return Promise.reject(error);
            }
        );

        try {
            const response = await api.get(endpoint); // Faz a requisição
            set({ error: null }); // Reseta o erro no estado global
            return response.data; // Retorna os dados
        } catch (error) {
            set({ error }); // Atualiza o estado com o erro
            return null; // Retorna null para erros
        }
    },
}));

export default useFipeStore;
