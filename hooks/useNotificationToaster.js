import { toast } from "react-toastify";

const useToaster = (config) => {
  const { id, message, position } = config;

  if (!toast.isActive(id)) {
    toast.info(message, {
      id,
      autoClose: false,
      position: position || "top-right",
    });
  }
};
export default useToaster;
