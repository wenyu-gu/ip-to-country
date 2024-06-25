class IpService {
  async getCountryByIp(ip: string): Promise<string> {
    return "working!" + ip;
  }
}

export default IpService;
