import { useState } from 'react';

export { useEventListener } from './use-event-listener';
export { useLocalStorage } from './use-localstorage';

export function useComposing(initialComposing = false) {
  const [composing, setComposing] = useState(initialComposing);
  const handleComposition = e => setComposing(!(e.type === 'compositionend'));

  return [composing, handleComposition];
}
