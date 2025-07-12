import React, { useState, useEffect } from 'react';

const FloatingChatbotIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(false);

  const toggleChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  const sendChatMessage = async (inputMessage) => {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage }),
      });
      const data = await res.json();
      return data.reply;
    } catch (err) {
      console.error("Chatbot error:", err);
      return "Error generating response.";
    }
  };

  const sendMessage = async () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      setIsTyping(true);

      const reply = await sendChatMessage(newMessage.text);

      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: reply,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    if (messages.length > 0) {
      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 1500);
    }
  }, [messages]);

  const sx = {
    floatingIconContainer: {
      position: 'fixed',
      bottom: '112px',
      right: '32px',
      zIndex: 3000,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      position: 'relative',
      padding:"9px",
        boxSizing: 'border-box', 
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(252, 248, 15, 0.25) 0%, rgba(255, 165, 0, 0.2) 50%, rgba(255, 69, 0, 0.15) 100%)',
      backdropFilter: 'blur(25px)',
      border: '3px solid rgba(255, 215, 0, 0.5)',
      boxShadow: `
        0 0 25px rgba(255, 215, 0, 0.4),
        0 0 50px rgba(255, 165, 0, 0.3),
        inset 0 2px 15px rgba(255, 255, 255, 0.15)
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      animation: pulseEffect ? 'gamingPulse 1.5s ease-in-out' : 'none',
      overflow: 'hidden',
    },
    saraImage: {
      width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
       objectPosition: 'center 25%',
  opacity: 0.95,
  border: '2px solid rgba(255, 215, 0, 0.8)',
  boxShadow: '0 0 12px rgba(255, 215, 0, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1)',
  filter: 'contrast(105%) brightness(110%)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      position: 'relative',
      zIndex: 10,
    },
    orbsBackground: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      pointerEvents: 'none',
      zIndex: 1,
    },
    chatContainer: {
      position: 'fixed',
      bottom: '205px',
      right: '32px',
      width: '380px',
      maxWidth: '60vw',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.95) 0%, rgba(30, 30, 45, 0.9) 50%, rgba(25, 25, 35, 0.95) 100%)',
      backdropFilter: 'blur(30px)',
      border: '2px solid rgba(255, 215, 0, 0.3)',
      boxShadow: `
        0 0 30px rgba(255, 215, 0, 0.2),
        0 0 60px rgba(255, 165, 0, 0.1),
        inset 0 2px 15px rgba(255, 255, 255, 0.05)
      `,
      zIndex: 3100,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'slideUpGaming 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    chatHeader: {
      padding: '20px 24px',
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.22) 0%, rgba(255, 165, 0, 0.18) 100%)',
      borderBottom: '2px solid rgba(255, 215, 0, 0.35)',
      color: '#fffbe7',
      fontWeight: 800,
      fontFamily: '"Orbitron", "Rajdhani", system-ui, sans-serif',
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: 'blur(15px)',
      textShadow: 'none', // removed glow
      letterSpacing: '1.5px',
      boxShadow: '0 2px 16px #FFD70044',
    },
    closeBtn: {
      background: 'rgba(255, 69, 0, 0.2)',
      border: '1px solid rgba(255, 69, 0, 0.4)',
      color: '#FF6B35',
      fontSize: 20,
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
      boxShadow: '0 0 10px rgba(255, 69, 0, 0.3)',
    },
    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 250,
      maxHeight: 350,
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(255, 215, 0, 0.4) transparent',
      background: 'rgba(0, 0, 0, 0.1)',
    },
    messageBubble: (isUser) => ({
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      background: isUser
        ? 'linear-gradient(135deg, #FFD700 60%, #FFA500 100%)'
        // Brighter, more readable bot background:
        : 'linear-gradient(135deg, #fffbe7 80%, #ffe066 100%)',
      color: isUser ? '#181818' : '#3a2c00', // Darker text for bot
      borderRadius: isUser ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
      padding: '14px 18px',
      fontSize: 16,
      fontFamily: '"Orbitron", "Roboto", "Inter", system-ui, sans-serif',
      fontWeight: isUser ? '700' : '600',
      maxWidth: '80%',
      wordBreak: 'break-word',
      border: isUser 
        ? '2px solid #FFD700' 
        : '2px solid #ffe066', // Lighter border for bot
      backdropFilter: 'blur(15px)',
      animation: 'messageSlideIn 0.4s ease-out',
      boxShadow: isUser 
        ? '0 0 18px #FFD70033'
        : '0 2px 8px #ffe06655', // Subtle shadow for bot
      textShadow: 'none',
      lineHeight: '1.5',
      letterSpacing: '0.2px',
    }),
    inputBar: {
      display: 'flex',
      borderTop: '2px solid rgba(255, 215, 0, 0.2)',
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
      padding: '16px',
      gap: 12,
      backdropFilter: 'blur(20px)',
    },
    input: {
      flex: 1,
      border: '2px solid #FFD700',
      borderRadius: '12px',
      padding: '14px 16px',
      fontSize: 16,
      background: 'rgba(255, 255, 255, 0.18)',
      color: '#FFD700',
      outline: 'none',
      fontFamily: '"Orbitron", "Roboto", system-ui, sans-serif',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      boxShadow: 'inset 0 2px 8px #FFD70022', // reduced glow
      fontWeight: 600,
      textShadow: 'none', // removed glow
      letterSpacing: '0.2px',
    },
    sendBtn: {
      background: 'linear-gradient(135deg, #FFD700 60%, #FFA500 100%)',
      color: '#181818',
      border: '2px solid #FFD700',
      borderRadius: '12px',
      padding: '14px 20px',
      fontSize: 16,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: '"Orbitron", system-ui, sans-serif',
      fontWeight: 700,
      backdropFilter: 'blur(15px)',
      boxShadow: '0 0 10px #FFD70033', // reduced glow
      textShadow: 'none', // removed glow
      letterSpacing: '0.2px',
    },
    typing: {
      alignSelf: 'flex-start',
      background: 'rgba(255, 215, 0, 0.18)',
      color: '#FFD700',
      borderRadius: '12px',
      padding: '10px 16px',
      fontSize: 15,
      fontStyle: 'italic',
      fontFamily: '"Orbitron", "Roboto", system-ui, sans-serif',
      border: '1.5px solid #FFD700',
      backdropFilter: 'blur(15px)',
      animation: 'typingPulse 1.8s infinite',
      boxShadow: '0 0 6px #FFD70033', // reduced glow
      textShadow: 'none', // removed glow
      fontWeight: 600,
    }
  };

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div style={sx.floatingIconContainer} className="smooth-bounce">
        <div
          style={sx.iconWrapper}
          onClick={toggleChat}
          title="Chat with Sara - Your Battle Companion"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
            e.currentTarget.style.boxShadow = `
              0 0 35px rgb(247, 247, 39),
              0 0 70px rgba(255, 255, 0, 0.95),
              inset 0 2px 20px rgba(255, 255, 255, 0.42)
            `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = `
              0 0 25px rgba(255, 215, 0, 0.4),
              0 0 50px rgba(255, 165, 0, 0.3),
              inset 0 2px 15px rgba(255, 255, 255, 0.15)
            `;
          }}
        >
          {/* Enhanced Floating Orbs Background */}
          <svg style={sx.orbsBackground} viewBox="0 0 200 200">
            <defs>
              <radialGradient id="orbGlow1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#FFA500" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.1" />
              </radialGradient>
              <radialGradient id="orbGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#FFA500" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="orbGlow3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#FFA500" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.08" />
              </radialGradient>
            </defs>
            
            {/* Main Central Orb */}
            <circle cx="100" cy="100" r="60" fill="url(#orbGlow1)" opacity="0.3">
              <animate attributeName="r" values="55;70;55" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.15;0.3" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Floating Orb 1 */}
            <circle cx="150" cy="60" r="25" fill="url(#orbGlow2)">
              <animate attributeName="cx" values="150;50;150" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="60;140;60" dur="12s" repeatCount="indefinite"/>
              <animate attributeName="r" values="25;35;25" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.2;0.4" dur="6s" repeatCount="indefinite"/>
            </circle>
            
            {/* Floating Orb 2 */}
            <circle cx="50" cy="140" r="20" fill="url(#orbGlow3)">
              <animate attributeName="cx" values="50;150;50" dur="10s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="140;60;140" dur="10s" repeatCount="indefinite"/>
              <animate attributeName="r" values="20;30;20" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0.25;0.5" dur="5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Floating Orb 3 */}
            <circle cx="120" cy="40" r="15" fill="url(#orbGlow2)">
              <animate attributeName="cx" values="120;80;120" dur="8s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="40;160;40" dur="8s" repeatCount="indefinite"/>
              <animate attributeName="r" values="15;25;15" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite"/>
            </circle>
            
            {/* Floating Orb 4 */}
            <circle cx="40" cy="80" r="18" fill="url(#orbGlow3)">
              <animate attributeName="cx" values="40;160;40" dur="14s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="80;120;80" dur="14s" repeatCount="indefinite"/>
              <animate attributeName="r" values="18;28;18" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.15;0.4" dur="7s" repeatCount="indefinite"/>
            </circle>
            
            {/* Small Floating Particles */}
            <circle cx="170" cy="110" r="8" fill="url(#orbGlow1)">
              <animate attributeName="cx" values="170;30;170" dur="16s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="110;90;110" dur="16s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="30" cy="30" r="10" fill="url(#orbGlow2)">
              <animate attributeName="cx" values="30;170;30" dur="18s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="30;170;30" dur="18s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
          
          {/* Sara's Image - Fixed positioning */}
          <img 
            src="https://e1.pxfuel.com/desktop-wallpaper/496/748/desktop-wallpaper-pubg-girl-golden-dress-ultra-mobile-in-2020-pubg-girls-mobile-thumbnail.jpg" 
            alt="Sara Gaming Assistant" 
            style={sx.saraImage}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          
          {/* Fallback if image fails to load */}
          <div style={{
            display: 'none',
            fontSize: '32px',
            color: '#FFD700',
            textShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
          }}>👩‍💻</div>
        </div>
      </div>

      {/* Enhanced Gaming Chat Popup */}
      {isChatOpen && (
        <div style={sx.chatContainer}>
          <div style={sx.chatHeader}>
            <span>⚡ SARA • BATTLE COMPANION</span>
            <button 
              style={sx.closeBtn} 
              onClick={closeChat}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 69, 0, 0.4)';
                e.target.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 69, 0, 0.2)';
                e.target.style.boxShadow = '0 0 10px rgba(255, 69, 0, 0.3)';
              }}
            >
              ✕
            </button>
          </div>
          <div style={sx.messagesContainer}>
            {messages.map(msg => (
              <div key={msg.id} style={sx.messageBubble(msg.sender === 'user')}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={sx.typing}>Sara is typing...</div>
            )}
          </div>
          <div style={sx.inputBar}>
            <input
              style={sx.input}
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255, 215, 0, 0.6)';
                e.target.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                e.target.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.3)';
              }}
            />
            <button 
              style={sx.sendBtn} 
              onClick={sendMessage}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #FFD700 60%, #FFA500 100%)';
                e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.4)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #FFD700 60%, #FFA500 100%)';
                e.target.style.boxShadow = '0 0 18px #FFD70088';
                e.target.style.transform = 'scale(1)';
              }}
            >
              SEND
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Smooth Animations */}
      <style>{`
        @keyframes slideUpGaming {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes gamingPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 25px rgba(255, 215, 0, 0.4), 0 0 50px rgba(255, 165, 0, 0.3);
          }
          50% { 
            transform: scale(1.12);
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 165, 0, 0.4);
          }
        }
        
        @keyframes messageSlideIn {
          from { 
            opacity: 0; 
            transform: translateY(15px) scale(0.95);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes typingPulse {
          0%, 20% { opacity: 0.5; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
          80%, 100% { opacity: 0.5; transform: scale(0.98); }
        }
        
        /* Smooth Bounce Animation */
        .smooth-bounce {
          animation: smoothBounce 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
        
        @keyframes smoothBounce {
          0%, 100% { 
            transform: translateY(0px);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          25% { 
            transform: translateY(-12px);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          50% { 
            transform: translateY(-6px);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          75% { 
            transform: translateY(-3px);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
        }
        
        /* Enhanced Gaming Scrollbar */
        *::-webkit-scrollbar {
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.7) 0%, rgba(255, 165, 0, 0.5) 100%);
          border-radius: 4px;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.4);
        }
        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 165, 0, 0.7) 100%);
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
        }
      `}</style>
    </>
  );
};

export default FloatingChatbotIcon;