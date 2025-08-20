// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [int, dec] = num.toString().split('.');
  return dec ? `${int}.${dec.padEnd(2, '0')}` : `${int}.00`;
}

// Round number to 2 decimal places

export function round2(value: number | string) {
  if (typeof value === 'number') {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  } else if (typeof value === 'string') {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error('Value is not a number or string');
  }
}
