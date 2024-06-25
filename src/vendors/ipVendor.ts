interface IpVendorConfig {
  name: string;
  url: string;
  apiKey: string | undefined;
  rateLimit: number;
}

abstract class IpVendor {
  name: string;
  url: string;
  apiKey: string | undefined;
  rateLimit: number;
  remainingRequests: number;

  constructor(config: IpVendorConfig) {
    this.name = config.name;
    this.url = config.url;
    this.apiKey = config.apiKey;
    this.rateLimit = config.rateLimit;
    this.remainingRequests = config.rateLimit; // set the initial remaining counts using the rate limit
  }

  abstract getCountry(ip: string): Promise<string>;

  decrementRateLimit(): void {
    this.remainingRequests--;
  }
}

export default IpVendor;
