import React from "react";
import "./loading.css";
import logoNextX from "../../images/nextXlogo.png";

const Loading = () => {
  return (
    <>
      {/* <div className="loader loader1">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className="loading__img--logo" src={logoNextX} alt="" />
    </>
  );
};

export default Loading;

/* <div class="loader loader2">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="loader loader3">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="loader loader4">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
