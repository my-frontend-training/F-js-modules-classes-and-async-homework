import fetchMock from "fetch-mock";
import { getPoetry } from "../practice3";

fetchMock.mock("https://v1.jinrishici.com/all.json", {
  content: "天清一雁远，海阔孤帆迟。",
  origin: "送张舍人之江东",
  author: "李白",
  category: "古诗文-抒情-离别",
});

test("properties on kevin and winnie expected", async () => {
  const result = await getPoetry();
  // console.log(result);
  expect(result).toEqual(['送张舍人之江东', '李白', '天清一雁远，海阔孤帆迟。']);
});
