import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Loader2, User, Copy, Check, Terminal, Zap, Radio } from 'lucide-react';
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
      content: '>>> NAMASTE! 🙏\n\nWelcome to **BharatGoAi** - Your REVOLUTIONARY AI assistant.\n\nHow may I ASSIST you today? 🇮🇳',
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
    // Logging
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║              BHARATGOAI CHAT SESSION STARTED                  ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('│ Session Start:', new Date().toLocaleString());
    console.log('│ Platform: BharatGoAi - India\'s Advanced AI Platform');
    console.log('╚═══════════════════════════════════════════════════════════════╝');
  }, []);

  const copyToClipboard = (code: string, codeId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(codeId);
      toast.success('CODE COPIED!');
      setTimeout(() => setCopiedCode(null), 2000);
    }).catch(() => {
      toast.error('COPY FAILED');
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
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

    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                    USER INPUT LOG                             ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('│ Timestamp:', userMessage.timestamp.toLocaleString());
    console.log('│ User Input:', userMessage.content);
    console.log('╚═══════════════════════════════════════════════════════════════╝');

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
      console.error('ERROR:', error);
      const friendlyMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: '>>> ERROR_404\n\nSomething went WRONG! 😔\n\nPlease try again. System will RECOVER.\n\nThank you for your PATIENCE! 🙏',
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
    <div className="min-h-screen bg-background flex flex-col pixel-grid scanlines">
      {/* BRUTAL HEADER */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="brutal-border bg-secondary hover:bg-secondary/80 p-2 hover:rotate-brutal-2 hover:scale-110 transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 text-foreground animate-glitch" strokeWidth={3} />
            </Button>
            <div className="brutal-border bg-primary px-4 py-2 rotate-brutal-1">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-foreground animate-pulse-brutal" strokeWidth={3} />
                <div>
                  <h1 className="text-brutal text-base text-foreground">BGAI</h1>
                </div>
                <Radio className="w-4 h-4 text-destructive animate-glitch" />
              </div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="brutal-border bg-accent px-4 py-2 rotate-brutal-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary border-2 border-foreground animate-pixel-drift" />
              <span className="text-retro text-xs text-foreground font-bold">ONLINE</span>
            </div>
          </div>
        </div>
      </header>

      {/* MESSAGES AREA - BRUTAL STYLE */}
      <div className="flex-1 overflow-y-auto pb-4 noise-texture">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-5xl py-4 sm:py-6 lg:py-8">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* BRUTAL AVATAR */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 brutal-border flex items-center justify-center ${
                      message.role === 'user'
                        ? 'bg-quaternary rotate-brutal-2'
                        : 'bg-primary rotate-brutal-1'
                    } hover:rotate-brutal-4 hover:scale-110 transition-all duration-200`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-foreground animate-pulse-brutal" strokeWidth={3} />
                    ) : (
                      <Terminal className="w-5 h-5 text-foreground animate-glitch" strokeWidth={3} />
                    )}
                  </div>
                </div>

                {/* BRUTAL MESSAGE CONTENT */}
                <div
                  className={`flex-1 ${
                    message.role === 'user' ? 'flex justify-end' : ''
                  }`}
                >
                  <div
                    className={`inline-block max-w-full sm:max-w-[85%] brutal-border-thick p-4 ${
                      message.role === 'user'
                        ? 'bg-quaternary rotate-brutal-1'
                        : 'bg-card rotate-brutal-2'
                    } noise-texture relative`}
                  >
                    {/* Decorative corner */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-foreground ${
                      message.role === 'user' ? 'bg-primary' : 'bg-secondary'
                    } animate-pixel-drift`} />

                    <div className="text-retro text-sm sm:text-base leading-relaxed break-words overflow-x-auto text-foreground">
                      {message.role === 'user' ? (
                        <div className="whitespace-pre-wrap font-bold">{message.content}</div>
                      ) : message.content === '' ? (
                        <div className="flex items-center gap-2">
                          <Terminal className="w-5 h-5 animate-glitch text-primary" />
                          <span className="text-brutal">THINKING...</span>
                          <Zap className="w-4 h-4 animate-bounce-brutal text-destructive" />
                        </div>
                      ) : (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[rehypeKatex, rehypeHighlight]}
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-brutal text-xl sm:text-2xl mt-4 mb-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-brutal text-lg sm:text-xl mt-3 mb-2" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-brutal text-base sm:text-lg mt-2 mb-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                            li: ({node, ...props}) => <li className="ml-2" {...props} />,
                            code: ({node, inline, className, children, ...props}: any) => {
                              return inline ? (
                                <code className="brutal-border bg-primary text-foreground px-2 py-1 text-xs font-bold" {...props}>
                                  {children}
                                </code>
                              ) : (
                                <code className={`${className} block brutal-border bg-muted p-3 text-xs overflow-x-auto font-mono`} {...props}>
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
                                  <pre className="brutal-border bg-muted p-3 overflow-x-auto pr-12" {...props}>
                                    {children}
                                  </pre>
                                  <button
                                    onClick={() => copyToClipboard(codeContent, codeId)}
                                    className="absolute top-2 right-2 brutal-border bg-background hover:bg-primary p-2 opacity-100 hover:rotate-brutal-2 hover:scale-110 transition-all duration-200"
                                    title="COPY CODE"
                                  >
                                    {isCopied ? (
                                      <Check className="w-4 h-4 text-primary animate-glitch" strokeWidth={3} />
                                    ) : (
                                      <Copy className="w-4 h-4 text-foreground" strokeWidth={3} />
                                    )}
                                  </button>
                                </div>
                              );
                            },
                            a: ({node, ...props}) => <a className="text-primary hover:text-secondary underline font-bold" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-black text-foreground bg-primary px-1" {...props} />,
                            em: ({node, ...props}) => <em className="italic font-bold" {...props} />,
                            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 my-2 italic font-bold" {...props} />,
                            table: ({node, ...props}) => <div className="overflow-x-auto mb-2"><table className="min-w-full brutal-border" {...props} /></div>,
                            th: ({node, ...props}) => <th className="brutal-border px-4 py-2 bg-primary font-black text-foreground" {...props} />,
                            td: ({node, ...props}) => <td className="brutal-border px-4 py-2" {...props} />,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>

                    {/* BRUTAL TIMESTAMP */}
                    <div className="mt-2 pt-2 border-t-2 border-foreground/20">
                      <span className="text-pixel text-[10px] text-muted-foreground uppercase">
                        [{message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}]
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

      {/* BRUTAL INPUT AREA */}
      <div className="sticky bottom-0 w-full border-t-4 border-foreground bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-5xl py-4">
          <div className="relative flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="TYPE_YOUR_MESSAGE_HERE..."
                rows={1}
                className="w-full resize-none brutal-border-thick bg-card px-4 py-3 pr-14 text-retro text-sm font-bold focus:outline-none focus:bg-primary/20 transition-colors max-h-32 overflow-y-auto placeholder:text-muted-foreground"
                disabled={isLoading}
              />

              {/* BRUTAL SEND BUTTON */}
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 bottom-2 brutal-border bg-accent hover:bg-accent/80 p-2 disabled:opacity-50 hover:rotate-brutal-3 hover:scale-110 transition-all duration-200"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-foreground" strokeWidth={3} />
                ) : (
                  <Send className="w-5 h-5 text-foreground" strokeWidth={3} />
                )}
              </Button>
            </div>
          </div>

          {/* BRUTAL FOOTER TEXT */}
          <div className="flex flex-col items-center gap-2 mt-3">
            <div className="brutal-border bg-primary px-4 py-2 rotate-brutal-1">
              <p className="text-brutal text-[10px] text-foreground text-center">
                BHARATGOAI - INDIA'S AI 🇮🇳
              </p>
            </div>
            <p className="text-pixel text-[10px] text-muted-foreground/60 text-center">
              [WARNING: AI MAY MAKE MISTAKES. VERIFY DATA.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
