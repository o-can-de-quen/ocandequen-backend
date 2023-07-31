import express from "express";
import programmingLanguages from "@services/programmingLanguages.service";

async function get(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    res.json(await programmingLanguages.getMultiple(Number(req.query.page)));
  } catch (err: any) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function create(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err: any) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err: any) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (err: any) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

export default {
  get,
  create,
  update,
  remove,
};
