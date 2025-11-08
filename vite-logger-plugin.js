/**
 * Vite Plugin for Terminal Logging
 * This plugin creates an endpoint to receive client-side logs and print them to the terminal
 */

export default function viteLoggerPlugin() {
  return {
    name: 'vite-logger-plugin',
    configureServer(server) {
      server.middlewares.use('/api/log', async (req, res) => {
        if (req.method === 'POST') {
          let body = '';

          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            try {
              const logData = JSON.parse(body);

              // Print to terminal with colors
              const colors = {
                reset: '\x1b[0m',
                bright: '\x1b[1m',
                dim: '\x1b[2m',
                green: '\x1b[32m',
                cyan: '\x1b[36m',
                yellow: '\x1b[33m',
                red: '\x1b[31m',
                blue: '\x1b[34m',
                magenta: '\x1b[35m',
              };

              console.log('\n');

              if (logData.type === 'session') {
                console.log(colors.bright + colors.cyan + '╔═══════════════════════════════════════════════════════════════╗' + colors.reset);
                console.log(colors.bright + colors.cyan + '║          BHARATGOAI CHAT SESSION STARTED (TERMINAL)           ║' + colors.reset);
                console.log(colors.bright + colors.cyan + '╠═══════════════════════════════════════════════════════════════╣' + colors.reset);
                console.log(colors.cyan + '│ Session Start:' + colors.reset, logData.timestamp);
                console.log(colors.cyan + '│ Platform:' + colors.reset, 'BharatGoAi - India\'s Advanced AI Platform');
                console.log(colors.cyan + '│ User Agent:' + colors.reset, logData.userAgent);
                console.log(colors.cyan + '│ Screen:' + colors.reset, logData.screen);
                console.log(colors.cyan + '│ Viewport:' + colors.reset, logData.viewport);
                console.log(colors.bright + colors.cyan + '╚═══════════════════════════════════════════════════════════════╝' + colors.reset);
              }

              else if (logData.type === 'user_input') {
                console.log(colors.bright + colors.green + '╔═══════════════════════════════════════════════════════════════╗' + colors.reset);
                console.log(colors.bright + colors.green + '║                    USER INPUT LOG (TERMINAL)                  ║' + colors.reset);
                console.log(colors.bright + colors.green + '╠═══════════════════════════════════════════════════════════════╣' + colors.reset);
                console.log(colors.green + '│ Timestamp:' + colors.reset, logData.timestamp);
                console.log(colors.green + '│ Message ID:' + colors.reset, logData.messageId);
                console.log(colors.green + '│ Role:' + colors.reset, logData.role);
                console.log(colors.bright + colors.green + '├───────────────────────────────────────────────────────────────┤' + colors.reset);
                console.log(colors.green + '│ User Input:' + colors.reset);
                console.log(colors.bright + colors.yellow + '│ ' + logData.content + colors.reset);
                console.log(colors.bright + colors.green + '├───────────────────────────────────────────────────────────────┤' + colors.reset);
                console.log(colors.green + '│ Input Length:' + colors.reset, logData.length, 'characters');
                console.log(colors.green + '│ Word Count:' + colors.reset, logData.wordCount, 'words');
                console.log(colors.green + '│ Session Messages:' + colors.reset, logData.sessionMessages);
                console.log(colors.bright + colors.green + '╚═══════════════════════════════════════════════════════════════╝' + colors.reset);
              }

              else if (logData.type === 'ai_response') {
                console.log(colors.bright + colors.blue + '╔═══════════════════════════════════════════════════════════════╗' + colors.reset);
                console.log(colors.bright + colors.blue + '║                   AI RESPONSE LOG (TERMINAL)                  ║' + colors.reset);
                console.log(colors.bright + colors.blue + '╠═══════════════════════════════════════════════════════════════╣' + colors.reset);
                console.log(colors.blue + '│ Timestamp:' + colors.reset, logData.timestamp);
                console.log(colors.blue + '│ Response ID:' + colors.reset, logData.responseId);
                console.log(colors.blue + '│ Response Time:' + colors.reset, logData.responseTime, 'ms');
                console.log(colors.bright + colors.blue + '├───────────────────────────────────────────────────────────────┤' + colors.reset);
                console.log(colors.blue + '│ AI Response Preview:' + colors.reset);
                console.log(colors.dim + '│ ' + logData.preview + colors.reset);
                console.log(colors.bright + colors.blue + '├───────────────────────────────────────────────────────────────┤' + colors.reset);
                console.log(colors.blue + '│ Response Length:' + colors.reset, logData.length, 'characters');
                console.log(colors.blue + '│ Response Words:' + colors.reset, logData.wordCount, 'words');
                console.log(colors.blue + '│ Lines:' + colors.reset, logData.lines);
                console.log(colors.bright + colors.blue + '╚═══════════════════════════════════════════════════════════════╝' + colors.reset);
              }

              else if (logData.type === 'error') {
                console.log(colors.bright + colors.red + '╔═══════════════════════════════════════════════════════════════╗' + colors.reset);
                console.log(colors.bright + colors.red + '║                      ERROR LOG (TERMINAL)                     ║' + colors.reset);
                console.log(colors.bright + colors.red + '╠═══════════════════════════════════════════════════════════════╣' + colors.reset);
                console.log(colors.red + '│ Timestamp:' + colors.reset, logData.timestamp);
                console.log(colors.red + '│ Error Type:' + colors.reset, logData.errorType);
                console.log(colors.red + '│ Error Message:' + colors.reset, logData.errorMessage);
                console.log(colors.bright + colors.red + '├───────────────────────────────────────────────────────────────┤' + colors.reset);
                console.log(colors.red + '│ User Input that caused error:' + colors.reset);
                console.log(colors.bright + colors.yellow + '│ ' + logData.userInput + colors.reset);
                console.log(colors.bright + colors.red + '╚═══════════════════════════════════════════════════════════════╝' + colors.reset);
              }

              console.log('\n');

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ status: 'logged' }));
            } catch (error) {
              console.error('[Logger Error]', error);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });
    }
  };
}
