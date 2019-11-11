export function getDegFromCenterOrigin(x: number, y: number) {
  const root = document.documentElement;
  const [originX, originY] = [root.clientWidth / 2, root.clientHeight / 2];
  const [finalX, finalY] = [x - originX, y - originY];

  return (Math.atan2(finalY, finalX) * 180) / Math.PI;
}
