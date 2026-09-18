import type { WishlistItem } from "../types/wishlist";
import job from "../assets/images/job.jpg";
import mri from "../assets/images/mri.jpg";
import dj from "../assets/images/dj.jpg";
import telegram from "../assets/images/telegram.jpg";
import yandex from "../assets/images/yandex.jpg";
import speakers from "../assets/images/speakers.jpg";
import cosmetologist from "../assets/images/cosmetologist.jpg";
import goldApple from "../assets/images/gold-apple.jpg";

const DONATION_URL = "https://tbank.ru/cf/2JmmFIlUUt5";

export const wishlistItems: WishlistItem[] = [
  {
    id: "job-help",
    title: "помочь мне с поиском работы",
    description: "если знаешь вакансию или можешь помочь — напиши ♡",
    modalText:
      "ищу работу в frontend-разработке. если у тебя есть вакансия или можешь меня порекомендовать друзьям, напиши мне, я буду очень благодарна",
    price: "бесценно",
    tilt: "left",
    action: "modal",
    image: job,
  },
  {
    id: "mri",
    title: "МРТ спины и шеи",
    description: "PLACEHOLDER",
    price: "уточняется",
    action: "link",
    url: DONATION_URL,
    image: mri,
  },
  {
    id: "dj-flx4",
    title: "DJ-контроллер FLX-4",
    description: "чтобы записывать крутые сеты",
    price: "уточняется",
    tilt: "right",
    action: "link",
    url: DONATION_URL,
    image: dj,
  },
  {
    id: "telegram-premium",
    title: "Telegram Premium",
    description: "подписка на год: для эмодзи и функций",
    price: "уточняется",
    action: "link",
    url: DONATION_URL,
    image: telegram,
  },
  {
    id: "yandex-disk",
    title: "Яндекс Диск",
    description: "подписка на год: для хранения фото и видео",
    price: "уточняется",
    tilt: "left",
    action: "link",
    url: DONATION_URL,
    image: yandex,
  },
  {
    id: "speakers",
    title: "колонки для музыки",
    description: "студийные мониторы, чтобы соседям было нескучно",
    price: "уточняется",
    action: "link",
    url: DONATION_URL,
    image: speakers,
  },
  {
    id: "cosmetologist",
    title: "косметолог",
    description: "уход за собой",
    price: "уточняется",
    tilt: "right",
    action: "link",
    url: DONATION_URL,
    image: cosmetologist,
  },
  {
    id: "gold-apple",
    title: "сертификат Золотое Яблоко",
    description: "уходовая косметика нужна всегда",
    price: "уточняется",
    action: "link",
    url: DONATION_URL,
    image: goldApple,
  },
];
