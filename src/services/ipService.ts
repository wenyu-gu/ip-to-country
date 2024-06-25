import config from "../config/config";
import NodeCache from "node-cache";
import IpVendor from "../vendors/ipVendor";
import IpVendorFactory from "../factories/ipVendorFactory";

class IpService {
  private cache: NodeCache;
  private ipVendors: IpVendor[];

  constructor() {
    this.cache = new NodeCache({ stdTTL: config.cacheTTL });
    this.ipVendors = IpVendorFactory.createAllIpVendors();
  }

  async getCountryByIp(ip: string): Promise<string> {
    if (this.cache.has(ip)) {
      console.log("Fetching the country from the cache...");
      return this.cache.get(ip)!;
    }

    for (let ipVendor of this.ipVendors) {
      if (ipVendor.remainingRequests > 0) {
        try {
          const country = await ipVendor.getCountry(ip);
          this.cache.set(ip, country);
          ipVendor.decrementRateLimit();
          console.log(
            `Remaining requests for ${ipVendor.name}: ${ipVendor.remainingRequests}`
          );
          return country;
        } catch (error: any) {
          console.error(`Error with vendor ${ipVendor.name}:`, error.message);
        }
      }
    }

    throw new Error("Rate limit exceeded for all vendors.");
  }
}

export default IpService;
