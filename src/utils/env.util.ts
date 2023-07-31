import * as dotenv from "dotenv";

interface IEnv {
  [key: string]: string | undefined;
}

export default class EnvSingleton {
  private static instance: EnvSingleton;
  private readonly envVars: IEnv;

  private constructor() {
    dotenv.config();
    this.envVars = Object.assign({}, process.env);
  }

  public static getInstance(): EnvSingleton {
    if (!EnvSingleton.instance) {
      EnvSingleton.instance = new EnvSingleton();
    }
    return EnvSingleton.instance;
  }

  public get(key: string): string | undefined {
    return this.envVars[key];
  }
}
