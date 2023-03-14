import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import s from "./Notification.module.scss";

export default function Notification() {
  const [showNotification, setShowNotification] = useState(true);
  const nodeRef = useRef(null);

  const closeNotificationHandler = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    setShowNotification(true);

    return () => {
      setShowNotification(false);
    };
  }, []);

  return (
    <CSSTransition
      in={showNotification}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
      mountOnEnter
    >
      <div ref={nodeRef} className={s["notification"]}>
        <div className={s["header"]}>
          <button type="button" onClick={closeNotificationHandler}>
            x
          </button>
        </div>

        <p>
          The platform is still under construction. Once we are through with the
          essential features the platform domain will be moved to buklist.com
        </p>
      </div>
    </CSSTransition>
  );
}
