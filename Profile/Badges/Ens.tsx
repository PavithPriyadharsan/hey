import type { ProfileOnchainIdentity } from '@hey/lens';
import type { FC } from 'react';

import { STATIC_IMAGES_URL } from '@hey/data/constants';
import { Tooltip } from '@hey/ui';

interface EnsProps {
  onchainIdentity: ProfileOnchainIdentity;
}

const Ens: FC<EnsProps> = ({ onchainIdentity }) => {
  if (!onchainIdentity?.ens?.name) {
    return null;
  }

  return (
    <Tooltip
      content={
        <span>
          ENS name: <b>{onchainIdentity?.ens?.name}</b>
        </span>
      }
      placement="top"
    >
      <img
        alt="ENS Badge"
        className="drop-shadow-xl"
        height={75}
        src={`${STATIC_IMAGES_URL}/badges/ens.png`}
        width={75}
      />
    </Tooltip>
  );
};

export default Ens;
