import type { WishlistItem } from '../types/wishlist';

const DONATION_URL = 'https://tbank.ru/cf/2JmmFIlUUt5';

export const wishlistItems: WishlistItem[] = [
  {
    id: 'job-help',
    title: 'помочь мне с поиском работы',
    description: 'если знаешь вакансию или можешь помочь — напиши ♡',
    modalText: 'ищу работу в frontend-разработке. если у тебя есть вакансия или можешь меня порекомендовать друзьям — напиши мне, я буду очень благодарна',
    price: 'бесценно',
    tilt: 'left',
    action: 'modal',
  },
  {
    id: 'mri',
    title: 'МРТ спины и шеи',
    description: 'PLACEHOLDER',
    price: 'уточняется',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'dj-flx4',
    title: 'DJ-контроллер FLX-4',
    description: 'чтобы записывать крутые сеты',
    price: 'уточняется',
    tilt: 'right',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'telegram-premium',
    title: 'Telegram Premium',
    description: 'подписка на год: для эмодзи и функций',
    price: 'уточняется',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'yandex-disk',
    title: 'Яндекс Диск',
    description: 'подписка на год: для хранения фото и видео',
    price: 'уточняется',
    tilt: 'left',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'speakers',
    title: 'колонки для музыки',
    description: 'студийные мониторы, чтобы соседям было нескучно',
    price: 'уточняется',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'cosmetologist',
    title: 'косметолог',
    description: 'уход за собой',
    price: 'уточняется',
    tilt: 'right',
    action: 'link',
    url: DONATION_URL,
  },
  {
    id: 'gold-apple',
    title: 'сертификат Золотое Яблоко',
    description: 'уходовая косметика нужна всегда',
    price: 'уточняется',
    action: 'link',
    url: DONATION_URL,
  },
];