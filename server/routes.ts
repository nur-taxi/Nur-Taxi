import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/health", (req, res) => {
    res.json({ message: "Nur Taxi API ishlamoqda", status: "ok" });
  });

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    
    if (username === "admin" && password === "admin123") {
      res.json({ 
        success: true, 
        user: { username: "admin", role: "admin" }
      });
    } else {
      res.status(401).json({ success: false, message: "Noto'g'ri ma'lumotlar" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}