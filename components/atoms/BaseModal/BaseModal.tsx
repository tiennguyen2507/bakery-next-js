import { PropsWithChildren } from "react";
import styles from "./BaseModal.module.css";
import { createPortal } from "react-dom";
import clsx from "clsx";

export type TypeBaseModal = {
  isOpen: boolean;
  title?: string;
  width?: number;
  renderHeader?: JSX.Element;
  onClose?: (isOpen: false) => void;
};

const BaseModal: FunctionComponent<PropsWithChildren<TypeBaseModal>> = ({
  isOpen = false,
  title = "",
  children,
  width = 375,
  renderHeader,
  onClose = () => {},
}) => {
  const ModalWrapper = () => {
    const [isAnimationClose, SetIsAnimationClose] = useState(false);
    const onCloseModal = () => {
      SetIsAnimationClose(true);
      setTimeout(() => {
        onClose(false);
      }, 100);
    };

    const HeaderModal = () => (
      <div className={styles.header}>
        <BaseTypography weight={600} size="20px">
          {title}
        </BaseTypography>
        <BaseIcon
          name="cancel-circle"
          size="20px"
          cursorPointer
          onClick={onCloseModal}
        />
      </div>
    );

    return (
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.container,
            isAnimationClose && styles.closeScale
          )}
          style={{ width: `${width}px` }}
        >
          {renderHeader ? renderHeader : HeaderModal()}
          {children}
        </div>
      </div>
    );
  };
  return isOpen ? createPortal(ModalWrapper(), document.body) : null;
};

export default BaseModal;
