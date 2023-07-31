import express from "express";
import { Client, Language } from "@googlemaps/google-maps-services-js";
import EnvSingleton from "@utils/env.util";

const client = new Client({});

async function get(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const Env = EnvSingleton.getInstance();
  const googleApiKey = Env.get("GOOGLE_API_KEY");
  const googlePlaceId = Env.get("GOOGLE_PLACE_ID");

  if (!googleApiKey || !googlePlaceId) {
    throw new Error();
  }

  try {
    const reviews = await client.placeDetails({
      params: {
        place_id: googlePlaceId,
        fields: ["reviews"],
        language: Language.es,
        key: googleApiKey,
      },
    });

    res.json(reviews.data.result.reviews);
  } catch (err: any) {
    console.error(err.message);
    next(err);
  }
}

export default {
  get,
};
