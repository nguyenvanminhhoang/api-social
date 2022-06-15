import { cleanEnv, str } from "envalid";

const validateENV = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    MONGODB_URI: str(),
  });
};

export default validateENV;
