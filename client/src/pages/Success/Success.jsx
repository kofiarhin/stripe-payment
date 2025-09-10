import { useLocation } from "react-router-dom";

const Success = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sessionId = queryParams.get("session_id");

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
};

export default Success;
