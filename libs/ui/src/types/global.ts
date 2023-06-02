export interface Type {
  id: string;
  name: string;
  slug: string;
  // banners: Banner[];
  // promotional_sliders: Attachment[];
  settings: {
    isHome: boolean;
    layoutType: string;
  };
}