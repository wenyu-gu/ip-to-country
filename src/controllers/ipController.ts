import { Request, Response } from "express";
import IpService from "../services/ipService";
import validator from "validator";

class IpController {
  private ipService: IpService;

  constructor() {
    this.ipService = new IpService();
  }

  async getCountry(req: Request, res: Response): Promise<void> {
    const { ip } = req.params;

    if (!ip) {
      res.status(400).json({ error: "IP address is missing." });
      return;
    }

    if (!validator.isIP(ip)) {
      res.status(400).json({ error: "Invalid IP address format." });
      return;
    }

    try {
      const country = await this.ipService.getCountryByIp(ip);
      res.status(200).json({ country });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new IpController();
