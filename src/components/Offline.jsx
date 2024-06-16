import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Offline = () => {
  let onlineStatus = useOnlineStatus();
  return (
    <div className="offline-container">
      <div className="offline-text">
        <h1> {onlineStatus ? "🔴 No Internet !!" : "🟢"} </h1>
        <h4>Check your internet connection and try again.</h4>
      </div>
    </div>
  );
};

export default Offline;
