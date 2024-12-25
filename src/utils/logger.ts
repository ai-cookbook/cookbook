type LogLevel = 'info' | 'warn' | 'error';

interface LogData {
  component: string;
  action: string;
  details?: Record<string, any>;
  timestamp?: string;
}

export const logger = {
  log: (level: LogLevel, data: LogData) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${level.toUpperCase()}] ${data.component}: ${data.action}`, {
        ...data.details,
        timestamp: data.timestamp || new Date().toISOString()
      });
    }
  }
}; 