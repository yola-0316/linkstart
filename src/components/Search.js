import './Search.scss';
import React, { useState } from 'react';

export default function Search({ engineList }) {
  const [engine, setEngine] = useState(engineList[0].value);
  const [text, setText] = useState('');

  function handleChange(e) {
    setEngine(e.target.value);
  }

  function handleQuery() {
    if (text) window.open(`${engine}${text}`, '_blank', '');
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
      <input className="search-text" type="text" value={text} onChange={e => setText(e.target.value)} />
      <button className="search-btn" onClick={handleQuery}>
        查询
      </button>
    </div>
  );
}
