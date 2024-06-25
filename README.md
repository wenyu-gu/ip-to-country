# IP to Country

## Intro

This is a simple API gateway server app that allows you to qurey the country associated with a given IP address.

## Setup Instructions

1. Clone the repo to your local

```bash
git clone git@github.com:wenyu-gu/ip-to-country.git
```

2. Go to the directory

```bash
cd ip-to-country
```

3. Install the dependencies

```bash
npm install
```

4. Create a `.env` file inluding the following content for your API keys (replace the text with your API keys)

```
IPSTACK_API_KEY=your_ipstack_api_key
IPINFO_API_KEY=your_ipinfo_api_key
```

5. (Optional) You can specify the port where the server will be running on by adding the following to your `.env` file

```
PORT=1234
```

6. (Optional)If you want to modify the rate limit for each vendor to make rate limit run out faster, you can go `src/config/configs.ts` and modify the following line in the vendor of your choice:

```
rateLimit: 1, // per hour
```

Please note the vendors used in this app have limited amount of free request per month.

7. Spin up the server on local

```bash
npm run dev
```

## Endpoints

### GET /api/country/:ip

#### Request

- `ip`: the IP address that needs to be looked up (required)

#### Response

- `country`: the associated country returned by the vendor

#### Example

- `curl http://localhost:3000/api/country/1.1.1.1`

## Test

You can run the test with

```bash
npm test
```
