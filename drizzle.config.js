import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url:"postgresql://shotsdb_owner:1F6pBjqrHCgL@ep-lucky-voice-a120cpxy.ap-southeast-1.aws.neon.tech/Ai-short-videos?sslmode=require",
  }
});