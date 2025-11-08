import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Loader2, User, Copy, Check, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Message, sendMessageStream } from '@/lib/gemini';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import 'highlight.js/styles/github-dark.css';
import 'katex/dist/katex.min.css';
import { logSessionStart, logUserInput, logAIResponse, logError } from '@/lib/terminalLogger';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Namaste! 🙏 Welcome to **BharatGoAi**, your intelligent AI assistant.\n\nHow may I assist you today? 🇮🇳',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [chatTheme, setChatTheme] = useState<'light' | 'dark'>('light');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  // Chat-specific theme control
  useEffect(() => {
    // ============================================
    // LOGGING: Chat Session Initialized
    // ============================================
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║              BHARATGOAI CHAT SESSION STARTED                  ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('│ Session Start:', new Date().toLocaleString());
    console.log('│ Platform: BharatGoAi - India\'s Advanced AI Platform');
    console.log('│ User Agent:', navigator.userAgent);
    console.log('│ Screen:', `${window.screen.width}x${window.screen.height}`);
    console.log('│ Viewport:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('╚═══════════════════════════════════════════════════════════════╝');
    console.log('');
    console.log('💡 TIP: All user inputs will be logged to the console AND terminal.');
    console.log('📊 Monitor this console for detailed chat analytics.');
    console.log('🖥️  Check your terminal/command prompt for user input logs.');
    console.log('');

    // Set light mode for chat interface on mount
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    const savedChatTheme = localStorage.getItem('chatTheme') as 'light' | 'dark' | null;
    if (savedChatTheme) {
      setChatTheme(savedChatTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedChatTheme);
    }
  }, []);

  const toggleChatTheme = () => {
    const newTheme = chatTheme === 'light' ? 'dark' : 'light';
    setChatTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('chatTheme', newTheme);
  };

  const copyToClipboard = (code: string, codeId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(codeId);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    }).catch(() => {
      toast.error('Failed to copy code');
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    // ============================================
    // LOGGING: User Input to Console
    // ============================================
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                    USER INPUT LOG                             ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('│ Timestamp:', userMessage.timestamp.toLocaleString());
    console.log('│ Message ID:', userMessage.id);
    console.log('│ Role:', userMessage.role);
    console.log('├───────────────────────────────────────────────────────────────┤');
    console.log('│ User Input:');
    console.log('│', userMessage.content);
    console.log('├───────────────────────────────────────────────────────────────┤');
    console.log('│ Input Length:', userMessage.content.length, 'characters');
    console.log('│ Word Count:', userMessage.content.split(/\s+/).length, 'words');
    console.log('│ Session Messages:', messages.length + 1);
    console.log('╚═══════════════════════════════════════════════════════════════╝');

    // ============================================
    // LOGGING: User Input to TERMINAL (Simple)
    // ============================================
    logUserInput(userMessage.id, userMessage.content, messages.length + 1);

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Create empty assistant message for streaming
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      let fullResponse = '';
      const startTime = Date.now();

      console.log('🤖 Sending request to AI...');

      await sendMessageStream(
        userMessage.content,
        messages,
        (chunk) => {
          fullResponse += chunk;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === assistantMessageId
                ? { ...msg, content: fullResponse }
                : msg
            )
          );
        }
      );

      const responseTime = Date.now() - startTime;

      // ============================================
      // LOGGING: AI Response
      // ============================================
      console.log('╔═══════════════════════════════════════════════════════════════╗');
      console.log('║                   AI RESPONSE LOG                             ║');
      console.log('╠═══════════════════════════════════════════════════════════════╣');
      console.log('│ Timestamp:', new Date().toLocaleString());
      console.log('│ Response ID:', assistantMessageId);
      console.log('│ Response Time:', responseTime, 'ms');
      console.log('├───────────────────────────────────────────────────────────────┤');
      console.log('│ AI Response Preview:');
      console.log('│', fullResponse.substring(0, 150) + (fullResponse.length > 150 ? '...' : ''));
      console.log('├───────────────────────────────────────────────────────────────┤');
      console.log('│ Response Length:', fullResponse.length, 'characters');
      console.log('│ Response Words:', fullResponse.split(/\s+/).length, 'words');
      console.log('│ Lines:', fullResponse.split('\n').length);
      console.log('╚═══════════════════════════════════════════════════════════════╝');

    } catch (error: any) {
      // ============================================
      // LOGGING: Error
      // ============================================
      console.log('╔═══════════════════════════════════════════════════════════════╗');
      console.log('║                      ERROR LOG                                ║');
      console.log('╠═══════════════════════════════════════════════════════════════╣');
      console.log('│ Timestamp:', new Date().toLocaleString());
      console.log('│ Error Type:', error?.name || 'Unknown');
      console.log('│ Error Message:', error?.message || 'Unknown error');
      console.log('├───────────────────────────────────────────────────────────────┤');
      console.log('│ User Input that caused error:');
      console.log('│', userMessage.content);
      console.log('├───────────────────────────────────────────────────────────────┤');
      console.log('│ Full Error Stack:');
      console.error(error);
      console.log('╚═══════════════════════════════════════════════════════════════╝');

      // Show friendly error message
      const friendlyMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble responding right now. 😔\n\nPlease try again in a moment. If the issue persists, feel free to refresh the page.\n\nThank you for your patience! 🙏',
        timestamp: new Date(),
      };

      // Replace empty message with friendly error message
      setMessages(prev =>
        prev.map(msg => msg.id === assistantMessageId ? friendlyMessage : msg)
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="hover:bg-muted rounded-lg h-8 w-8"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-[11px] font-bold text-white">BGAI</span>
              </div>
              <div>
                <h1 className="text-sm font-semibold text-foreground">BharatGoAi</h1>
                <p className="text-xs text-muted-foreground">AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Theme Toggle - Chat Only */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleChatTheme}
            className="h-8 w-8 rounded-lg hover:bg-muted"
            title={chatTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {chatTheme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto pb-4">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-5xl py-4 sm:py-6 lg:py-8">
          <div className="space-y-4 sm:space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-2 animate-fade-in-up ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Minimal Avatar */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-blue-600'
                        : 'bg-primary'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-white" strokeWidth={2} />
                    ) : (
                      <span className="text-[10px] font-bold text-white">BGAI</span>
                    )}
                  </div>
                </div>

                {/* Minimal Message Content */}
                <div
                  className={`flex-1 ${
                    message.role === 'user' ? 'flex justify-end' : ''
                  }`}
                >
                  <div
                    className={`inline-block max-w-full sm:max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-card border border-border/50'
                    }`}
                  >
                    <div className={`text-sm sm:text-base leading-relaxed break-words overflow-x-auto ${
                      message.role === 'user' ? 'markdown-user' : 'markdown-assistant'
                    }`}>
                      {message.role === 'user' ? (
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      ) : message.content === '' ? (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Loader2 className="w-4 h-4 animate-spin text-primary" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      ) : (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeKatex, rehypeHighlight]}
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-xl sm:text-2xl font-bold mt-4 mb-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-lg sm:text-xl font-bold mt-3 mb-2" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-base sm:text-lg font-bold mt-2 mb-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="ml-2" {...props} />,
                            code: ({node, inline, className, children, ...props}: any) => {
                              return inline ? (
                                <code className="bg-muted/50 text-primary px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono" {...props}>
                                  {children}
                                </code>
                              ) : (
                                <code className={`${className} block bg-muted/30 p-2 sm:p-3 rounded-lg text-xs sm:text-sm overflow-x-auto`} {...props}>
                                  {children}
                                </code>
                              );
                            },
                            pre: ({node, children, ...props}) => {
                              const codeContent = String((children as any)?.props?.children || '').trim();
                              const codeId = `code-${Math.random().toString(36).substr(2, 9)}`;
                              const isCopied = copiedCode === codeId;

                              return (
                                <div className="relative group mb-2">
                                  <pre className="bg-muted/30 p-2 sm:p-3 rounded-lg overflow-x-auto pr-12" {...props}>
                                    {children}
                                  </pre>
                                  <button
                                    onClick={() => copyToClipboard(codeContent, codeId)}
                                    className="absolute top-2 right-2 p-1.5 rounded-md bg-background/80 hover:bg-background border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                    title="Copy code"
                                  >
                                    {isCopied ? (
                                      <Check className="w-3.5 h-3.5 text-green-500" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                                    )}
                                  </button>
                                </div>
                              );
                            },
                            a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                            em: ({node, ...props}) => <em className="italic" {...props} />,
                            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2" {...props} />,
                            table: ({node, ...props}) => <div className="overflow-x-auto mb-2"><table className="min-w-full border-collapse" {...props} /></div>,
                            th: ({node, ...props}) => <th className="border border-border px-2 sm:px-4 py-2 bg-muted/30 font-bold text-left" {...props} />,
                            td: ({node, ...props}) => <td className="border border-border px-2 sm:px-4 py-2" {...props} />,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>
                    <div
                      className={`text-xs mt-1.5 ${
                        message.role === 'user'
                          ? 'text-white/60'
                          : 'text-muted-foreground/50'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Minimal Input Area */}
      <div className="sticky bottom-0 w-full border-t border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-5xl py-3">
          <div className="relative flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here..."
                rows={1}
                className="w-full resize-none rounded-2xl bg-card border border-border/50 px-4 py-2.5 pr-11 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors max-h-32 overflow-y-auto"
                disabled={isLoading}
              />

              {/* Minimal Send Button */}
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="absolute right-1.5 bottom-1.5 h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Minimal Helper Text */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <p className="text-xs text-muted-foreground/50 text-center">
              BGAI (BharatGoAi) - India's AI Assistant | Designed for Indians, by Indians 🇮🇳
            </p>
            <p className="text-xs text-muted-foreground/40 text-center">
              BharatGoAi may make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
