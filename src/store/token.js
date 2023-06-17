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

export const cart = atom({
  key: "shop",
  default: {
    userName: "",
    cart: [],
  },
});

/* 
Dùng với useRecoilState()

Code mẫu

import {useRecoilState} from 'recoil';

function Registration () {
  const [{email, phone}, setContactInfo] = useRecoilState(contactInfoState);
  
  return (
    <form>
      <input
        type="text"
        value={email}
        onChange={ev => setContactInfo({email: ev.target.value, phone})}
        placeholder="Email Address"
      />
      <input
        type="text"
        value={phone}
        onChange={ev => setContactInfo({email, phone: ev.target.value})}
        placeholder="Phone Number"
      />
    </form>
  )
}


______________ Cách trên giống của mình _______________________


import {atom, DefaultValue, selector} from 'recoil';

const emailState = atom({
  key: 'email',
  default: '',
});

const phoneState = atom({
  key: 'phone',
  default: '',
});

const contactInfoState = selector({
  key: 'contactInfo',
  get: ({get}) => {
    // get values from individual atoms:
    const email = get(emailState);
    const phone = get(phoneState);
    // then combine into desired shape (object) and return:
    return {email, phone};
  },
  set: ({set}, value) => {
    // in a Reset action, the value will be DefaultValue (read more in selector docs):
    if (value instanceof DefaultValue) {
      set(emailState, value);
      set(phoneState, value);
      return;
    }
    // otherwise, update individual atoms from new object state:
    set(emailState, value.email);
    set(phoneState, value.phone);
  },
});


*/
