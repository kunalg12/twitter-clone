import { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useLoginModal";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "../../hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
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

  return <>
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Sign In"
    onClose={loginModal.onClose}
    onSubmit={onSumbit}
    body={bodyContent}
    />
  </>;
};

export default RegisterModal;
