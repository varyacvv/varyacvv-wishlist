export type WishlistItemAction = 'modal' | 'link';

export type WishlistCardAccent = 'lavender' | 'pink' | 'mint' | 'yellow';

export type WishlistCardTilt = 'left' | 'right';

export type WishlistItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  tilt?: WishlistCardTilt;
  action: WishlistItemAction;
  url?: string;
  image?: string;
  modalText?: string;
};