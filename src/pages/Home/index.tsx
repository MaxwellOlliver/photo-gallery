import { MouseEvent, useState } from "react";
import { Heart, Maximize } from "lucide-react";

import { GalleryImage, images } from "../../mock/images";
import { classNames } from "../../utils/classNames";
import LightBox from "../../components/LightBox/Lightbox";

import "./styles.css";

export default function Home() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<GalleryImage>(images[0]);
  const [mockImages, setMockImages] = useState<GalleryImage[]>(images);

  function handleToggleLike(id: string, e?: MouseEvent) {
    e?.stopPropagation();

    if (activeImg.id === id) {
      setActiveImg((state) => ({ ...state, liked: !state.liked }));
    }

    setMockImages(
      mockImages.map((image) => {
        if (image.id === id) {
          return {
            ...image,
            liked: !image.liked,
          };
        }
        return image;
      })
    );
  }

  function handleOpenLightBox(img: GalleryImage) {
    setActiveImg(img);
    setIsLightBoxOpen(true);
  }

  return (
    <div className="container">
      <div className="images-header">
        <h1>My gallery</h1>
      </div>
      <div className="images-container">
        <ul className="images-list">
          {mockImages.map((image) => (
            <li className="image-item" key={image.id}>
              <img src={`${image.url}&w=800`} />
              <div
                className={classNames("overlay", {
                  "--liked": image.liked,
                })}
              >
                <Heart
                  size={64}
                  onClick={(e) => handleToggleLike(image.id, e)}
                />
              </div>
              <div
                className="maximize"
                onClick={() => handleOpenLightBox(image)}
              >
                <Maximize size={20} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <LightBox
        activeImg={activeImg}
        handleSetActiveImg={setActiveImg}
        isOpen={isLightBoxOpen}
        onClose={() => setIsLightBoxOpen(false)}
        handleToggleLike={handleToggleLike}
      />
    </div>
  );
}
