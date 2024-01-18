import { v4 as uuid } from "uuid";

export type GalleryImage = {
  id: string;
  url: string;
  liked: boolean;
};

const imagesUrls = [
  "https://images.pexels.com/photos/18303121/pexels-photo-18303121/free-photo-of-bolsa-sacola-alforje-valise.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/12168000/pexels-photo-12168000.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/17331108/pexels-photo-17331108/free-photo-of-bombom-caixa-bau-arca.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/4330050/pexels-photo-4330050.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/89249/pexels-photo-89249.png?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/18027829/pexels-photo-18027829/free-photo-of-papel-de-parede-4k-wallpaper-4k-baia-doca.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/16641231/pexels-photo-16641231.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/3927697/pexels-photo-3927697.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/18263097/pexels-photo-18263097/free-photo-of-homem-sob-as-estrelas-vestindo-jaqueta-amarela-na-floresta.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/14519899/pexels-photo-14519899.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/8260109/pexels-photo-8260109.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/16131590/pexels-photo-16131590/free-photo-of-heranca-patrimonio-sucessao-livros.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/12530017/pexels-photo-12530017.jpeg?auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/6332076/pexels-photo-6332076.jpeg?auto=compress&cs=tinysrgb",
];

export const images: GalleryImage[] = imagesUrls.map((url) => ({
  id: uuid(),
  url,
  liked: false,
}));
