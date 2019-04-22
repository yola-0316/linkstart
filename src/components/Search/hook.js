import { useState } from 'react';
import { useLocalStorage } from '../../hooks';

export function useSearchEngine(engineList, composing) {
  const [persistEngine, setPersistEngine] = useLocalStorage('engine', engineList[0].value);
  const [text, setText] = useState('');
  const [engine, setEngine] = useState(persistEngine);

  const handleEngineChange = e => {
    const engine = e.target.value;
    setEngine(engine);
    setPersistEngine(engine);
  };
  const handleTextChange = e => setText(e.target.value);
  const handleQuery = e => {
    if (composing || (e.keyCode && e.keyCode !== 13)) return;
    if (!text) return;
    window.open(`${engine}${text}`, '_blank', '');
  };

  return { engine, handleEngineChange, text, handleTextChange, handleQuery };
}
