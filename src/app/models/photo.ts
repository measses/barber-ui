import { Repository } from "./base-model";

export interface Photo extends Repository{
  smallUrl: string | null;
  mediumUrl: string | null;
  largeUrl: string | null;
  isShowSlider: boolean | null;
  isShowGallery: boolean | null;
}