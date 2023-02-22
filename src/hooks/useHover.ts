import { useState } from 'react';

export default function useHover() {
  const [isHover, setHover] = useState(false);
  const onMouseOver = () => setHover(true);
  const onMouseOut = () => setHover(false);

  return { isHover, onMouseOver, onMouseOut };
}
