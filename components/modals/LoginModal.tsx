import { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useLoginModal";
import Input from "../Input";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSumbit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TO DO LOGIN

      loginModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input placeholder="Email" 
      onChange={(e) => setEmail(e.target.value)}
      value="email"
      disabled={isLoading}
      />
      <Input placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)}
      value="password"
      disabled={isLoading}
      />
    </div>
  );

  return <div></div>;
};

export default LoginModal;
