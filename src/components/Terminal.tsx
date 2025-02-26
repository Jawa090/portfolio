
import { useState, useEffect } from 'react';

interface TerminalProps {
  commands: string[];
}

export const Terminal = ({ commands }: TerminalProps) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentCommand >= commands.length) return;

    let currentText = '';
    const command = commands[currentCommand];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < command.length) {
        currentText += command[charIndex];
        setDisplayedText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentCommand(prev => prev + 1);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentCommand, commands]);

  return (
    <div className="card w-full max-w-2xl bg-bat-950/80 backdrop-blur-sm border border-bat-800 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-bat-900 border-b border-bat-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-bat-400 text-sm font-mono">terminal</span>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="text-green-500">
          <span className="text-blue-400">~/portfolio</span> $ {displayedText}
          {showCursor && <span className="animate-blink">▋</span>}
        </div>
      </div>
    </div>
  );
};
