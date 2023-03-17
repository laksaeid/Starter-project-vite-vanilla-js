import { E } from '@/library';
const variant = {
  outline: 'border border-blue-500 text-blue-500 px-2 py-1 rounded-md',
  fill: 'bg-blue-500 text-white px-3 py-1 rounded-md',
  icon: '',
};
export const btnMaker = (text, styleVariant,moreStyles='', id = '', type = '') => {
  return E({
    tag: 'button',
    className: `${variant[styleVariant]}${moreStyles}`,
    id,
    type,
    innerHTML: text,
  });
};
