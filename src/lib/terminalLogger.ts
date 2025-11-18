/**
 * Terminal Logger Utility
 * Sends logs from the browser to the Vite dev server terminal
 */

interface LogData {
  type: 'session' | 'user_input' | 'ai_response' | 'error';
  [key: string]: any;
}

/**
 * Send log data to terminal via Vite server
 */
export const logToTerminal = async (data: LogData): Promise<void> => {
  try {
    await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    // Silently fail if server is not available
    // This prevents errors in production where the endpoint won't exist
    console.debug('Terminal logging unavailable:', error);
  }
};

/**
 * Log session start to terminal
 */
export const logSessionStart = async (): Promise<void> => {
  await logToTerminal({
    type: 'session',
    timestamp: new Date().toLocaleString(),
    userAgent: navigator.userAgent,
    screen: `${window.screen.width}x${window.screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
  });
};

/**
 * Log user input to terminal
 */
export const logUserInput = async (
  messageId: string,
  content: string,
  sessionMessages: number
): Promise<void> => {
  await logToTerminal({
    type: 'user_input',
    timestamp: new Date().toLocaleString(),
    messageId,
    role: 'user',
    content,
    length: content.length,
    wordCount: content.split(/\s+/).length,
    sessionMessages,
  });
};

/**
 * Log AI response to terminal
 */
export const logAIResponse = async (
  responseId: string,
  response: string,
  responseTime: number
): Promise<void> => {
  await logToTerminal({
    type: 'ai_response',
    timestamp: new Date().toLocaleString(),
    responseId,
    responseTime,
    preview: response.substring(0, 150) + (response.length > 150 ? '...' : ''),
    length: response.length,
    wordCount: response.split(/\s+/).length,
    lines: response.split('\n').length,
  });
};

/**
 * Log error to terminal
 */
export const logError = async (
  error: any,
  userInput: string
): Promise<void> => {
  await logToTerminal({
    type: 'error',
    timestamp: new Date().toLocaleString(),
    errorType: error?.name || 'Unknown',
    errorMessage: error?.message || 'Unknown error',
    userInput,
  });
};
