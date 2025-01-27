import { useSelector, useDispatch } from "react-redux";

import { openModal, closeModal } from "../store/";
export const useUi = () => {
  const { isModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(openModal());
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return {
    isModalOpen,
    onOpenModal,
    onCloseModal,
  };
};
