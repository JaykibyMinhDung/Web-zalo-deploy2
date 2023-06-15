import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const receiveToken = atom(
  {
    key: "tokenUser",
    default: "",
  }
  // {
  //   key: "expires_in",
  //   default: ""
  // }
);

export const receiveKeyCategory = atom({
  key: "CategoryProducts",
  default: "",
});
