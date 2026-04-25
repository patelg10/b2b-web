export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  styling: {
    bg_color: string;
    text_color: string;
  };
  ctas: {
    primary: string | null;
    secondary: string | null;
  };
  badge: string | null;
  features: string[];
  sort_order: number;
}

const BASE_URL = '/api';

export async function fetchBanners(): Promise<Banner[]> {
  try {
    const response = await fetch(`${BASE_URL}/banners`);
    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}
