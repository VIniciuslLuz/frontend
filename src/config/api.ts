import { APP_CONFIG } from './index';

// Configuração da API - URLs de produção
export const API_CONFIG = {
  // Backend do Railway (produção)
  BASE_URL: APP_CONFIG.BACKEND_URL,
  
  // Endpoints da API
  ENDPOINTS: {
    ANALISAR_CONTRATO: '/api/analisar-contrato',
    ANALISE_POR_TOKEN: '/api/analise-por-token',
    ANALISE_LIBERADA: '/api/analise-liberada',
    CREATE_CHECKOUT_SESSION: '/api/create-checkout-session',
    RESUMO_CLAUSULAS: '/api/resumo-clausulas'
  }
};

// Função helper para construir URLs completas
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// URLs completas para uso direto
export const API_URLS = {
  ANALISAR_CONTRATO: buildApiUrl(API_CONFIG.ENDPOINTS.ANALISAR_CONTRATO),
  ANALISE_POR_TOKEN: buildApiUrl(API_CONFIG.ENDPOINTS.ANALISE_POR_TOKEN),
  ANALISE_LIBERADA: buildApiUrl(API_CONFIG.ENDPOINTS.ANALISE_LIBERADA),
  CREATE_CHECKOUT_SESSION: buildApiUrl(API_CONFIG.ENDPOINTS.CREATE_CHECKOUT_SESSION),
  RESUMO_CLAUSULAS: buildApiUrl(API_CONFIG.ENDPOINTS.RESUMO_CLAUSULAS)
};

// Configuração de headers padrão
export const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// Configuração de timeout
export const API_TIMEOUT = APP_CONFIG.API_TIMEOUT;
