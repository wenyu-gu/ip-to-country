import config, { IP_VENDOR_NAMES } from "../config/config";
import IpVendor from "../vendors/ipVendor";
import IpVendorIpInfo from "../vendors/ipVendorIpInfo";
import IpVendorIpStack from "../vendors/ipVendorIpStack";

class IpVendorFactory {
  static createIpVendor(ipVendorName: string): IpVendor {
    switch (ipVendorName) {
      case IP_VENDOR_NAMES.IPSTACK:
        return new IpVendorIpStack(config.vendors[IP_VENDOR_NAMES.IPSTACK]);
      case IP_VENDOR_NAMES.IPINFO:
        return new IpVendorIpInfo(config.vendors[IP_VENDOR_NAMES.IPINFO]);
      default:
        throw new Error("Unknown IP vendor name.");
    }
  }

  static createAllIpVendors(): IpVendor[] {
    return config.vendorList.map((ipVendorName) =>
      this.createIpVendor(ipVendorName)
    );
  }
}

export default IpVendorFactory;
