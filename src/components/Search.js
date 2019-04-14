import './Search.scss';
import React, { useState } from 'react';

export default function Search({ engineList }) {
  const [engine, setEngine] = useState(engineList[0].value);
  const [text, setText] = useState('');
  const [composing, setComposing] = useState(false);

  function handleChange(e) {
    setEngine(e.target.value);
  }

  function handleEnter({ keyCode }) {
    if (keyCode !== 13 || composing) return;
    handleQuery();
  }

  function handleQuery() {
    if (text) window.open(`${engine}${text}`, '_blank', '');
  }

  function handleComposition(e) {
    setComposing(!(e.type === 'compositionend'));
  }

  return (
    <div className="search">
      <select className="engine-select" name="engine" id="engine" onChange={handleChange}>
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
        onKeyDown={handleEnter}
        onChange={e => setText(e.target.value)}
      />
      <button className="search-btn" onClick={handleQuery}>
        查询
      </button>
    </div>
  );
}
