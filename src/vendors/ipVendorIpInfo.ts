import axios from "axios";
import IpVendor from "./ipVendor";

class IpVendorIpInfo extends IpVendor {
  async getCountry(ip: string): Promise<string> {
    const url = `${this.url}${ip}?token=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data.country;
  }
}

export default IpVendorIpInfo;
