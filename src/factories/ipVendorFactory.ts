import config from "../config/config";
import IpVendor from "../vendors/ipVendor";
import IpVendorIpInfo from "../vendors/ipVendorIpInfo";
import IpVendorIpStack from "../vendors/ipVendorIpStack";

class IpVendorFactory {
  static createIpVendor(ipVendorName: string): IpVendor {
    switch (ipVendorName) {
      case "ip-stack":
        return new IpVendorIpStack(config.vendors.ipstack);
      case "ip-info":
        return new IpVendorIpInfo(config.vendors.ipinfo);
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
