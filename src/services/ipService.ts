import IpVendorIpInfo from "../vendors/ipVendorIpInfo";
import config from "../config/config";
import NodeCache from "node-cache";
import IpVendor from "../vendors/ipVendor";

class IpService {
  private cache: NodeCache;
  private ipVendor: IpVendor;

  constructor() {
    this.cache = new NodeCache({ stdTTL: config.cacheTTL });
    this.ipVendor = new IpVendorIpInfo(config.vendors.ipinfo);
  }

  async getCountryByIp(ip: string): Promise<string> {
    if (this.cache.has(ip)) {
      console.log("Fetching the country from the cache...");
      return this.cache.get(ip)!;
    }

    const country = this.ipVendor.getCountry(ip);
    this.ipVendor.decrementRateLimit();
    console.log(
      `Remaining requests for ${this.ipVendor.name}: ${this.ipVendor.remainingRequests}`
    );
    this.cache.set(ip, country);
    return country;
  }
}

export default IpService;
