import { JSON } from "..";
import { bench } from "./lib/bench";

const v1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const v2 = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"';

bench(
  "Serialize Alphabet",
  () => {
    inline.always(JSON.stringify(v1));
  },
  64_000_00,
);

bench(
  "Deserialize Alphabet",
  () => {
    inline.always(JSON.parse<string>(v2));
  },
  64_000_00,
);
