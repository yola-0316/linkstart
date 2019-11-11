import { useState } from 'react';

export function useSearchEngine(engineList: any[], composing: boolean) {
  const [text, setText] = useState('');
  const [engine, setEngine] = useState(engineList[0].value);

  const handleEngineChange = (e: any) => {
    const engine = e.target.value;
    setEngine(engine);
  };
  const handleTextChange = (e: any) => setText(e.target.value);
  const handleQuery = (e: any) => {
    if (composing || (e.keyCode && e.keyCode !== 13)) return;
    if (!text) return;
    window.open(`${engine}${text}`, '_blank', '');
  };

  return { engine, handleEngineChange, text, handleTextChange, handleQuery };
}
