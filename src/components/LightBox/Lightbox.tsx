import { useRef, useState, MouseEvent, useEffect } from "react";
import { GalleryImage, images } from "../../mock/images";

import "./styles.css";
import { classNames } from "../../utils/classNames";
import { Heart, X } from "lucide-react";

interface LightBoxProps {
  isOpen: boolean;
  onClose: () => void;
  activeImg: GalleryImage;
  handleSetActiveImg: (activeImg: GalleryImage) => void;
  handleToggleLike: (id: string, e?: MouseEvent) => void;
}

export default function LightBox({
  activeImg,
  handleSetActiveImg,
  isOpen,
  onClose,
  handleToggleLike,
}: LightBoxProps) {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeImgDiv = document.getElementById(activeImg.id);

    activeImgDiv?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }, [activeImg]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!carousel.current) return;

    const slider = carousel.current;

    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !carousel.current) return;
    const slider = carousel.current;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={classNames("lightbox", {
        "--is-open": isOpen,
      })}
    >
      <nav className="menu">
        <Heart
          className={classNames({
            "--liked": activeImg.liked,
          })}
          size={42}
          color="#fff"
          onClick={() => handleToggleLike(activeImg.id)}
        />
        <X onClick={() => onClose()} size={42} color="#fff" />
      </nav>
      <div className="lightbox-inner">
        <img src={`${activeImg.url}&w=1600`} />
      </div>
      <div
        className="all-images"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={carousel}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={classNames({
              "--active": activeImg.id === image.id,
            })}
            onDoubleClick={() => handleSetActiveImg(image)}
            id={image.id}
          >
            <img src={`${image.url}&w=300`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
