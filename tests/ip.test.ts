import request from "supertest";
import express from "express";
import IpService from "../src/services/ipService";
import ipRouter from "../src/routes/ipRoutes";

jest.mock("../src/services/ipService");

const app = express();
app.use("/api", ipRouter);

describe("GET /api/country/:ip", () => {
  it("should return 400 if IP address is not provided", async () => {
    const response = await request(app).get("/api/country/");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("IP address is missing.");
  });

  it("should return 400 for an invalid IP address format", async () => {
    const response = await request(app).get("/api/country/this-is-not-an-ip");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid IP address format.");
  });

  it("should return country name for a valid IP address", async () => {
    (IpService.prototype.getCountryByIp as jest.Mock).mockResolvedValue(
      "United States"
    );
    const response = await request(app).get("/api/country/1.1.1.1");
    expect(response.status).toBe(200);
    expect(response.body.country).toBe("United States");
  });

  it("should return an error if rate limit is exceeded for all vendors", async () => {
    (IpService.prototype.getCountryByIp as jest.Mock).mockRejectedValue(
      new Error("Rate limit exceeded for all vendors.")
    );
    const response = await request(app).get("/api/country/1.1.1.1");
    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Rate limit exceeded for all vendors.");
  });
});
