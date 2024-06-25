import IpVendorIpInfo from "../vendors/ipVendorIpInfo";
import config from "../config/config";

class IpService {
  async getCountryByIp(ip: string): Promise<string> {
    const ipVendor = new IpVendorIpInfo(config.vendors.ipinfo);
    const country = ipVendor.getCountry(ip);
    ipVendor.decrementRateLimit();
    console.log(
      `Remaining requests for ${ipVendor.name}: ${ipVendor.remainingRequests}`
    );
    return country;
  }
}

export default IpService;
