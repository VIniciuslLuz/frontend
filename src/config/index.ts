// Configuração principal da aplicação
export const APP_CONFIG = {
  // Informações da aplicação
  NAME: 'Contrato Claro',
  VERSION: '1.0.0',
  DESCRIPTION: 'Análise inteligente de contratos com IA',
  
  // URLs da aplicação
  FRONTEND_URL: 'https://app.naosefoda.com.br',
  BACKEND_URL: 'https://contrato-claro-backend-production.up.railway.app',
  
  // Configurações de produção
  IS_PRODUCTION: true,
  DEBUG_MODE: false,
  
  // Timeouts e configurações de API
  API_TIMEOUT: 30000, // 30 segundos
  UPLOAD_MAX_SIZE: 10 * 1024 * 1024, // 10MB
  
  // Configurações de pagamento
  PAYMENT_AMOUNT: 4.99,
  CURRENCY: 'BRL',
  
  // Configurações de análise
  MAX_PAGES_PDF: 50,
  SUPPORTED_FORMATS: ['.pdf', '.jpg', '.jpeg', '.png', '.txt']
};

// Configuração de ambiente
export const ENV_CONFIG = {
  NODE_ENV: import.meta.env.MODE || 'production',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || APP_CONFIG.BACKEND_URL,
  DEBUG: import.meta.env.DEV || false
};

// Configuração de features
export const FEATURE_FLAGS = {
  ENABLE_PDF_DOWNLOAD: true,
  ENABLE_ANALYSIS_HISTORY: true,
  ENABLE_USER_PROFILES: true,
  ENABLE_PAYMENT: true
};
