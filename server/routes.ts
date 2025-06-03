import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form endpoint (for future implementation)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // In a real implementation, you would:
      // 1. Send an email notification
      // 2. Store the message in a database
      // 3. Send confirmation email to the user
      
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
