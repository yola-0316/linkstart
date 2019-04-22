import './Search.scss';
import React from 'react';
import { useComposing } from '../../hooks';
import { useSearchEngine } from './hook';
import { engineList } from '../../utils/constants';

export default function Search() {
  const [composing, handleComposition] = useComposing();
  const { engine, handleEngineChange, text, handleTextChange, handleQuery } = useSearchEngine(engineList, composing);

  return (
    <div className="search">
      <select className="engine-select" value={engine} onChange={handleEngineChange}>
        {engineList.map(engine => (
          <option key={engine.name} value={engine.value}>
            {engine.name}
          </option>
        ))}
      </select>
      <input
        className="search-text"
        type="text"
        value={text}
        onCompositionStart={handleComposition}
        onCompositionUpdate={handleComposition}
        onCompositionEnd={handleComposition}
        onKeyDown={handleQuery}
        onChange={handleTextChange}
      />
      <button className="search-btn" onClick={handleQuery}>
        查询
      </button>
    </div>
  );
}
