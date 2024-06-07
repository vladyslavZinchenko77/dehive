import { FC, CSSProperties } from 'react';

import Image from 'next/image';

import ethereumSvg from '../../../../public/svg/ethereum.svg';
import polyGamingSvg from '../../../../public/svg/poly-game.svg';
import polyClusterSvg from '../../../../public/svg/poly-cluster.svg';
import wmaticWthSvg from '../../../../public/svg/wmatic-wth.svg';
import topSvg from '../../../../public/svg/top.svg';
import questionSvg from '../../../../public/svg/question.svg';
import spiralSvg from '../../../../public/svg/spiral.svg';
import helmSvg from '../../../../public/svg/helm.svg';
import scaleSvg from '../../../../public/svg/scale.svg';
import impulseSvg from '../../../../public/svg/impulse.svg';

export type IconType =
  | 'ethereum'
  | 'polyGaming'
  | 'polyCluster'
  | 'wmaticWth'
  | 'top'
  | 'question'
  | 'spiral'
  | 'helm'
  | 'scale'
  | 'impulse';

const SvgIcon: FC<{
  type: IconType;
  height?: number;
  width?: number;
  onClick?: () => void;
  style?: CSSProperties;
}> = ({ type, height, width, onClick, style }) => {
  const source = {
    ethereum: ethereumSvg,
    polyGaming: polyGamingSvg,
    polyCluster: polyClusterSvg,
    wmaticWth: wmaticWthSvg,
    top: topSvg,
    question: questionSvg,
    spiral: spiralSvg,
    helm: helmSvg,
    scale: scaleSvg,
    impulse: impulseSvg,
  }[type];

  return (
    <Image
      loading="lazy"
      src={source}
      height={height}
      width={width}
      alt={type}
      style={style}
    />
  );
};

export default SvgIcon;