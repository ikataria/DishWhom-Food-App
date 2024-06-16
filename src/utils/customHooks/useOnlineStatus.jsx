import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // we used useEffect hook because we only need to check the online status once
  useEffect(() => {
    const handleOnline = () => {
      setOnlineStatus(true);
    };
    const handleOffline = () => {
      setOnlineStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
