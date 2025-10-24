// scripts/spa-fix.js
import fs from "fs";
import path from "path";

const distPath = path.resolve("dist");
const indexHtml = path.join(distPath, "index.html");
const notFoundHtml = path.join(distPath, "404.html");

try {
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log("✅ SPA 404 redirect fix applied successfully.");
} catch (error) {
  console.error("❌ Failed to apply SPA fix:", error);
}
