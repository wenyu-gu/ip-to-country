import dotenv from "dotenv";

dotenv.config();

export default {
  vendors: {
    ipinfo: {
      name: "ip-info",
      url: "https://ipinfo.io/",
      apiKey: process.env.IPINFO_API_KEY,
      rateLimit: 5, // per hour
    },
  },
  vendorListh: ["ipinfo"],
  cacheTTL: 3600, // in seconds
};
