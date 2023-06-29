import { FaTicketAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import style from "./notification.module.css";
import HeadersPage from "../../styles/headerspage/HeadersPage";
import { useQuery } from "react-query";
import { GET_NOTIFICATION } from "../../constants/queryKeys";
import { getNotification } from "../../api/api";

const Notification = () => {
  const { data, isLoading } = useQuery([GET_NOTIFICATION], () =>
    getNotification()
  );
  if (isLoading) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div className={style.notification__header}>
      <HeadersPage icon={FaChevronLeft} title={"Thông báo"} />
      <main>
        <div>
          <p>Tất cả thông báo</p>
        </div>
        <div className={style.notification__main}>
          <div className={style.notification__logo}>
            <FaTicketAlt />
          </div>
          <div className={style.notification__text}>
            <p>Bạn đã có 1 book lịch</p>
            <p>Bạn đã book lịch thành công</p>
            <div className={style.notification__time}>
              <FaRegClock />
              <p style={{ color: "gray" }}>22/06/2022 21:17</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notification;
