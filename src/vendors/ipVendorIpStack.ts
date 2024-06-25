import axios from "axios";
import IpVendor from "./ipVendor";

class IpVendorIpStack extends IpVendor {
  async getCountry(ip: string): Promise<string> {
    const url = `${this.url}${ip}?access_key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data.country_name;
  }
}

export default IpVendorIpStack;
