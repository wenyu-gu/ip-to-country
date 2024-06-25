import dotenv from "dotenv";

dotenv.config();

export const IP_VENDOR_NAMES = {
  IPSTACK: "ipstack",
  IPINFO: "ipinfo",
};

export default {
  vendorList: [
    IP_VENDOR_NAMES.IPINFO, //I'm putting IP Info on the first since it has more free calls per months
    IP_VENDOR_NAMES.IPSTACK,
  ],
  vendors: {
    [IP_VENDOR_NAMES.IPSTACK]: {
      name: IP_VENDOR_NAMES.IPSTACK,
      url: "http://api.ipstack.com/",
      apiKey: process.env.IPSTACK_API_KEY,
      rateLimit: 1, // per hour
    },
    [IP_VENDOR_NAMES.IPINFO]: {
      name: IP_VENDOR_NAMES.IPINFO,
      url: "https://ipinfo.io/",
      apiKey: process.env.IPINFO_API_KEY,
      rateLimit: 5, // per hour
    },
  },
  cacheTTL: 3600, // in seconds
};
