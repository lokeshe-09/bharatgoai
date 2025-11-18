import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Loader2, User, Copy, Check, Bot } from 'lucide-react';
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
      content: 'Namaste! 🙏\n\nWelcome to **BharatGoAi** - Your AI assistant for India.\n\nHow may I assist you today? 🇮🇳',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('BharatGoAi Chat Session Started:', new Date().toLocaleString());
  }, []);

  const copyToClipboard = (code: string, codeId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(codeId);
      toast.success('Code copied to clipboard');
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
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    console.log('User Input:', userMessage.content);
    logUserInput(userMessage.id, userMessage.content, messages.length + 1);

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);

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
      console.log('AI Response Time:', responseTime, 'ms');

    } catch (error: any) {
      console.error('Error:', error);
      const friendlyMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: 'I apologize, but something went wrong. Please try again.',
        timestamp: new Date(),
      };

      setMessages(prev =>
        prev.map(msg => msg.id === assistantMessageId ? friendlyMessage : msg)
      );
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 100);
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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h1 className="text-base font-semibold text-foreground">BharatGoAi</h1>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto pb-4">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl py-4 sm:py-6 lg:py-8">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-primary/10'
                        : 'bg-muted'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-primary" />
                    ) : (
                      <Bot className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Message Content */}
                <div
                  className={`flex-1 ${
                    message.role === 'user' ? 'flex justify-end' : ''
                  }`}
                >
                  <div
                    className={`inline-block max-w-full sm:max-w-[85%] rounded-lg p-3.5 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="text-sm leading-relaxed break-words overflow-x-auto">
                      {message.role === 'user' ? (
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      ) : message.content === '' ? (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Thinking...</span>
                        </div>
                      ) : (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeKatex, rehypeHighlight]}
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-lg font-bold mt-4 mb-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-base font-bold mt-3 mb-2" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-sm font-semibold mt-2 mb-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="ml-2" {...props} />,
                            code: ({node, inline, className, children, ...props}: any) => {
                              return inline ? (
                                <code className="bg-background/50 text-foreground px-2 py-0.5 rounded text-xs font-mono" {...props}>
                                  {children}
                                </code>
                              ) : (
                                <code className={`${className} block bg-background/50 p-3 rounded text-xs overflow-x-auto font-mono`} {...props}>
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
                                  <pre className="bg-background/50 rounded p-3 overflow-x-auto pr-12" {...props}>
                                    {children}
                                  </pre>
                                  <button
                                    onClick={() => copyToClipboard(codeContent, codeId)}
                                    className="absolute top-2 right-2 p-2 rounded bg-background/80 hover:bg-background transition-colors"
                                    title="Copy code"
                                  >
                                    {isCopied ? (
                                      <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                      <Copy className="w-4 h-4 text-muted-foreground" />
                                    )}
                                  </button>
                                </div>
                              );
                            },
                            a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                            em: ({node, ...props}) => <em className="italic" {...props} />,
                            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 my-2 italic" {...props} />,
                            table: ({node, ...props}) => <div className="overflow-x-auto mb-2"><table className="min-w-full border border-border rounded" {...props} /></div>,
                            th: ({node, ...props}) => <th className="border border-border px-4 py-2 bg-muted font-semibold" {...props} />,
                            td: ({node, ...props}) => <td className="border border-border px-4 py-2" {...props} />,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>

                    {/* Timestamp */}
                    <div className="mt-2 pt-2 border-t border-border/20">
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 w-full border-t border-border bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl py-4">
          <div className="relative flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message here..."
                rows={1}
                className="w-full resize-none border border-border rounded-lg bg-background px-4 py-2.5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all max-h-32 overflow-y-auto placeholder:text-muted-foreground"
                disabled={isLoading}
              />

              {/* Send Button */}
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="absolute right-2 bottom-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Footer Text */}
          <div className="flex flex-col items-center gap-2 mt-3">
            <p className="text-xs text-muted-foreground text-center">
              BharatGoAi - India's AI Platform 🇮🇳
            </p>
            <p className="text-xs text-muted-foreground/60 text-center">
              AI may make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
