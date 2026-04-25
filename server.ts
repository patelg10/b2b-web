import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Proxy Route to handle login
  app.post("/api/login", express.json(), async (req, res) => {
    try {
      const rawBaseUrl = process.env.VITE_API_BASE_URL || 'http://18.133.35.178/api/v1';
      const BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Login proxy error:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });

  // API Proxy Route to handle registration
  app.post("/api/register", express.json(), async (req, res) => {
    try {
      const rawBaseUrl = process.env.VITE_API_BASE_URL || 'http://18.133.35.178/api/v1';
      const BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Register proxy error:", error);
      res.status(500).json({ error: "Registration failed" });
    }
  });

  // API Proxy Route to handle logout
  app.post("/api/logout", express.json(), async (req, res) => {
    try {
      const rawBaseUrl = process.env.VITE_API_BASE_URL || 'http://18.133.35.178/api/v1';
      const BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      const authHeader = req.headers.authorization;
      
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(authHeader ? { "Authorization": authHeader } : {})
        },
        body: JSON.stringify(req.body),
      });
      
      if (response.status === 204 || response.status === 200) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          return res.status(response.status).json(data);
        } else {
          return res.status(response.status).json({ success: true });
        }
      }
      
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        res.status(response.status).json(data);
      } else {
        res.status(response.status).json({ error: "Logout failed with unexpected response format" });
      }
    } catch (error) {
      console.error("Logout proxy error:", error);
      res.status(500).json({ error: "Logout failed" });
    }
  });

  // API Proxy Route to bypass Mixed Content/CORS
  app.get("/api/banners", async (req, res) => {
    try {
      const rawBaseUrl = process.env.VITE_API_BASE_URL || 'http://18.133.35.178/api/v1';
      // Ensure no trailing slash to avoid double slashes
      const BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      
      console.log(`Proxying request to: ${BASE_URL}/banners`);
      
      const response = await fetch(`${BASE_URL}/banners`);
      if (!response.ok) {
        console.error(`Upstream error: ${response.status} ${response.statusText}`);
        return res.status(response.status).json({ error: `Upstream error: ${response.statusText}` });
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Proxy error:", error);
      res.status(500).json({ error: "Failed to fetch from external API" });
    }
  });

  // Health check for deployment monitoring
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      env: process.env.NODE_ENV,
      proxy_target: process.env.VITE_API_BASE_URL || 'http://18.133.35.178/api/v1'
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
