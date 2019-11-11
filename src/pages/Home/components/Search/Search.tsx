import './Search.scss';
import React, { useState, useCallback } from 'react';
import { DefaultButton, TextField } from 'office-ui-fabric-react';
import { useComposing } from 'hooks/index';
import { useSearchEngine } from './hook';
import { engineList } from 'utils/constants';

export default function Search() {
  const [composing, handleComposition] = useComposing(false);
  const { engine, handleEngineChange, text, handleTextChange, handleQuery } = useSearchEngine(engineList, composing as boolean);

  return (
    <div className="search">
      <TextField
        value={text}
        onChange={handleTextChange}
        styles={{
          prefix: {
            padding: 0,
          },
          suffix: {
            padding: 0,
          },
        }}
        onRenderPrefix={() => (
          <select className="engine-select" value={engine} onChange={handleEngineChange}>
            {engineList.map(engine => (
              <option key={engine.name} value={engine.value}>
                {engine.name}
              </option>
            ))}
          </select>
        )}
        onRenderSuffix={() => (
          <DefaultButton className="search-btn" onClick={handleQuery}>
            查询
          </DefaultButton>
        )}
      ></TextField>
      {/* <input
        className="search-text"
        type="text"
        value={text}
        // onCompositionStart={handleComposition}
        // onCompositionUpdate={handleComposition}
        // onCompositionEnd={handleComposition}
        onKeyDown={handleQuery}
        onChange={handleTextChange}
      /> */}
    </div>
  );
}
