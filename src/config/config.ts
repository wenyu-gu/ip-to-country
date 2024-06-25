import dotenv from "dotenv";

dotenv.config();

export default {
  vendors: {
    ipstack: {
      name: "ip-stack",
      url: "http://api.ipstack.com/",
      apiKey: process.env.IPSTACK_API_KEY,
      rateLimit: 2, // per hour
    },
    ipinfo: {
      name: "ip-info",
      url: "https://ipinfo.io/",
      apiKey: process.env.IPINFO_API_KEY,
      rateLimit: 1, // per hour
    },
  },
  vendorList: [
    "ip-info", //I'm putting IP Info on the first since it has more free calls per months
    "ip-stack",
  ],
  cacheTTL: 3600, // in seconds
};
