'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  content: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        question: 'O que é o Interrogatio?',
        answer:
          'Interrogatio é uma plataforma que ajuda você a treinar entrevistas profissionais. Ela analisa entrevistas simuladas e fornece feedback sobre postura, clareza na comunicação, domínio técnico e fluência em inglês.',
      },
      {
        question: 'Como o Interrogatio funciona?',
        answer:
          'Você realiza entrevistas simuladas em vídeo e recebe análises automáticas com insights para melhorar seu desempenho antes de entrevistas reais.',
      },
      {
        question: 'Para quem é indicado?',
        answer:
          'Estudantes, profissionais em transição de carreira e qualquer pessoa que deseje melhorar sua performance em entrevistas.',
      },
      {
        question: 'Quais são os principais benefícios?',
        answer:
          'Feedback detalhado e objetivo, ambiente seguro para treinar, e foco nas competências comportamentais e técnicas importantes para o mercado.',
      },
      {
        question: 'Como começo a usar?',
        answer:
          'No site, use o botão “Explorar” para ver exemplos e conhecer as funcionalidades. Em breve, você poderá iniciar suas simulações diretamente pela plataforma.',
      },
      {
        question: 'Quem está por trás do projeto?',
        answer:
          'O projeto é desenvolvido por uma equipe acadêmica (ver seção "Quem Somos"), com foco em inovação e melhoria do processo de entrevistas usando IA.',
      },
      {
        question: 'Onde encontro mais informações?',
        answer:
          'Navegue pelas abas "Quem Somos", "Comunidade", "Extensão" e "Visão" no menu superior para conhecer mais.',
      },
    ],
    []
  );

  const handleAsk = (question: string, answer: string) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'user', content: question },
      { id: crypto.randomUUID(), role: 'bot', content: answer },
    ]);
  };

  const handleToggle = () => setIsOpen((v) => !v);

  // Auto-scroll para a última mensagem quando abrir ou quando novas mensagens chegarem
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Panel */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 bg-[#1B263B] text-white">
            <img src="/robo.png" alt="Chatbot" className="h-8 w-8 rounded-full object-cover border border-white" />
            <div>
              <p className="font-semibold">Interrogatio Assistente</p>
              <p className="text-xs opacity-90">Pergunte algo sobre a plataforma</p>
            </div>
          </div>

          <div ref={messagesContainerRef} className="max-h-72 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div>
                <p className="text-sm text-gray-600 mb-2">Sugestões rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {faqs.map((f) => (
                    <button
                      key={f.question}
                      onClick={() => handleAsk(f.question, f.answer)}
                      className="text-left text-sm bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg"
                    >
                      {f.question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {messages.map((m) => (
                  <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                    <div
                      className={
                        'inline-block max-w-[85%] px-3 py-2 rounded-lg text-sm ' +
                        (m.role === 'user'
                          ? 'bg-[#7890A8] text-white'
                          : 'bg-gray-100 text-gray-800')
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t mt-2">
                  <p className="text-sm text-gray-600 mb-2">Perguntas sugeridas:</p>
                  <div className="flex flex-wrap gap-2">
                    {faqs.map((f) => (
                      <button
                        key={f.question}
                        onClick={() => handleAsk(f.question, f.answer)}
                        className="text-left text-sm bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg"
                      >
                        {f.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500">
            Este chatbot usa respostas prontas.
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={handleToggle}
        className="relative h-14 w-14 rounded-full shadow-lg border border-gray-200 bg-white hover:scale-105 transition-transform"
        aria-label={isOpen ? 'Fechar chatbot' : 'Abrir chatbot'}
      >
        <img src="/robo.png" alt="Abrir chatbot" className="h-full w-full rounded-full object-cover" />
      </button>
    </div>
  );
} 