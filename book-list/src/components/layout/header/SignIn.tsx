import "./SignIn.css";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const SignIn = ({ onClose }: Props) => {
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <X className="auth-close" onClick={onClose} />

        {/* Tabs */}
        <div className="auth-tabs">
          <span
            className={activeTab === "signin" ? "active" : ""}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </span>
          <span
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </span>
        </div>

        {activeTab === "signin" && (
          <div className="auth-form">
            <label>Username or email address *</label>
            <input placeholder="Your Username" />

            <label>Password *</label>
            <input type="password" placeholder="Your Password" />

            <div className="auth-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="forgot">Forgot Password</span>
            </div>

            <button className="auth-btn">Login</button>
          </div>
        )}

        {activeTab === "register" && (
          <div className="auth-form">
            <label>Email address *</label>
            <input placeholder="Your Email" />

            <label>Password *</label>
            <input type="password" placeholder="Create Password" />

            <button className="auth-btn">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;