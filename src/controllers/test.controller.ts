import express from "express";
import { google } from "googleapis";
// const {google} = require('googleapis');
import axios from "axios";
import { log } from "console";
import e from "express";

// "name": "accounts/118337563691096393357",
// "name": "locations/6104319696632634537"

async function getReviews() {
  const token = await authenticate();
  const accountId = "YOUR ACCOUNT ID";
  const locationId = "YOUR LOCATION ID";
  const url =
    `https://mybusiness.googleapis.com/v4/accounts/` +
    `${accountId}/locations/${locationId}/reviews`;
  const resp = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return resp.data.reviews;
}

async function authenticate() {
  const jwt = new google.auth.JWT({
    email: "key.client_email",
    key: "key.private_key",
    subject: "ADMIN EMAIL",
    scopes: ["https://www.googleapis.com/auth/business.manage"],
  });

  log({ jwt });
  let resp;
  try {
    resp = await jwt.authorize();
  } catch (error) {
    log({ error });
  }

  log({ resp });

  return resp?.access_token?.replace(/\.{2,}/g, "");
}

async function get(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    // res.json(await programmingLanguages.getMultiple(Number(req.query.page)));

    // const reviews = await getReviews();

    const mbbi = google.mybusinessbusinessinformation({
      version: "v1",
      auth: "AIzaSyDOY-bPnyHd9BktJ34jD_HlR43SHNzk7J0",
    });

    google.place;

    res.json({ paco: "gffsssaaaaa" });
  } catch (err: any) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

export default {
  get,
};
