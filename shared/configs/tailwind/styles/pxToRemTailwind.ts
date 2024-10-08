const pxToRem: { [key: string]: string } = {};
for (let i = 0; i <= 2048; i += 1) {
  pxToRem[i.toString() + 'pxr'] = `${(i * 0.0625).toFixed(4)}rem`;
}

export const pxToRemTailwind = {
  spacing: pxToRem,
  maxWidth: pxToRem,
  maxHeight: pxToRem,
  minWidth: pxToRem,
  minHeight: pxToRem,
  fontSize: pxToRem,
  borderRadius: pxToRem,
  borderWidth: pxToRem,
  letterSpacing: pxToRem,
  lineHeight: pxToRem,
  flex: pxToRem,
} as const;
