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
    title: "Помочь мне с поиском работы",
    description: "если знаешь вакансию или можешь помочь, свяжись со мной ♡",
    modalText: [
      "ищу работу в сфере разработки сайтов и веб-приложений.",
      "работаю с HTML, CSS, JavaScript, React и TypeScript. умею превращать идеи в понятные и аккуратные интерфейсы.",
      "если знаешь подходящую вакансию и/или можешь порекомендовать меня своим знакомым, напиши мне в вк или телеграм, буду очень благодарна!",
      "моё резюме можно скачать ниже. также на github можно посмотреть мои pet-проекты.",
      "p.s. в долгу не останусь, обсудим вознаграждение :)",
    ],
    price: "бесценно",
    tilt: "left",
    action: "modal",
    image: job,
  },
  {
    id: "mri",
    title: "Комплексное МРТ",
    description: "давно пора проверить голову, спину и шею",
    price: "15 000 ₽",
    action: "link",
    url: DONATION_URL,
    image: mri,
  },
  {
    id: "dj-flx4",
    title: "DJ-контроллер FLX-4",
    description: "чтобы записывать крутые сеты",
    price: "33 000 ₽",
    tilt: "right",
    action: "link",
    url: DONATION_URL,
    image: dj,
  },
  {
    id: "telegram-premium",
    title: " Подписка Telegram Premium",
    description: "подписка на год: для эмодзи и функций",
    price: "1990 ₽",
    action: "link",
    url: DONATION_URL,
    image: telegram,
  },
  {
    id: "yandex-disk",
    title: "Подписка Яндекс Диск",
    description: "подписка на год: для хранения фото и видео",
    price: "3000 ₽",
    tilt: "left",
    action: "link",
    url: DONATION_URL,
    image: yandex,
  },
  {
    id: "speakers",
    title: "Колонки для музыки",
    description: "студийные мониторы, чтобы соседям было нескучно",
    price: "уточняется",
    action: "link",
    url: DONATION_URL,
    image: speakers,
  },
  {
    id: "cosmetologist",
    title: "Поход к косметологу",
    description: "уход за кожей лица и тела",
    price: "15 000 ₽",
    tilt: "right",
    action: "link",
    url: DONATION_URL,
    image: cosmetologist,
  },
  {
    id: "gold-apple",
    title: "Сертификат Золотое Яблоко",
    description: "уходовая косметика нужна всегда",
    price: "любая сумма",
    action: "link",
    url: DONATION_URL,
    image: goldApple,
  },
];
