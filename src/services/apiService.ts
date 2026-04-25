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

export async function login(credentials: any): Promise<any> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");
  return data;
}

export async function register(userData: any): Promise<any> {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Registration failed");
  return data;
}

export async function logout(token: string): Promise<any> {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({}),
  });
  
  if (response.status === 204) return { success: true };
  
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Logout failed");
  return data;
}

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
