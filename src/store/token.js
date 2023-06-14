import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const receiveToken = atom({
  key: "tokenUser",
  default: "",
});

export default receiveToken;
