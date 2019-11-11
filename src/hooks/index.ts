import { useState, CompositionEvent } from 'react';

export { useEventListener } from './use-event-listener';

export function useComposing(initialComposing = false) {
  const [composing, setComposing] = useState(initialComposing);
  const handleComposition = (e: CompositionEvent<HTMLInputElement>) => setComposing(!(e.type === 'compositionend'));

  return [composing, handleComposition];
}
