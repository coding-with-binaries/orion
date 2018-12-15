import React, { memo } from 'react';
import {
  IoIosCheckmarkCircle,
  IoIosClose,
  IoIosInformationCircle,
  IoIosNuclear,
  IoIosWarning
} from 'react-icons/io';
import './Alert.css';

type Props = Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  type: 'info' as 'info' | 'success' | 'warning' | 'error',
  dismissable: true as boolean
};

const Alert: React.SFC<Props> = props => {
  const [dismissed, setDismissed] = React.useState(false);
  const { type, children, dismissable } = props;

  const mapIconWitType = () => {
    switch (type) {
      case 'success':
        return <IoIosCheckmarkCircle size="24" />;
      case 'warning':
        return <IoIosWarning size="24" />;
      case 'error':
        return <IoIosNuclear size="24" />;
      default:
        return <IoIosInformationCircle size="24" />;
    }
  };

  const dismissAlert = () => setDismissed(true);

  return (
    <>
      {!dismissed ? (
        <div className={`orion-alert ${type}`}>
          <span className={`icon-wrapper ${type}`}>{mapIconWitType()}</span>
          <span className="children">{children}</span>
          <span className="dismiss">
            {dismissable ? (
              <IoIosClose cursor="pointer" size="24" onClick={dismissAlert} />
            ) : null}
          </span>
        </div>
      ) : null}
    </>
  );
};

Alert.defaultProps = defaultProps;

export default memo(Alert);
