import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Flex } from "rebass";
import useOnScreen from "utils/hooks/use-on-screen";
import Lottie from "react-lottie";
import animationData from "./live-demo-app-design-motion/comp.json";

export default function LiveDesignDemoFrame() {
  const [isStopped, setIsStopped] = useState(true);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setIsStopped(false);
    }
  }, [isVisible]);

  const defaultMotionOptions = {
    loop: false,
    autoplay: false,
    isClickToPauseDisabled: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <DesignFramePreview bg="#F5F5F5" ref={ref}>
      <Lottie
        options={defaultMotionOptions}
        isStopped={isStopped}
        onClick={event => {
          event.preventDefault();
          console.log(isStopped);
          if (isStopped == true) {
            setIsStopped(false);
          }
        }}
      />
    </DesignFramePreview>
  );
}

const DesignFramePreview = styled(Flex)`
  box-shadow: 0px 4px 128px 32px rgba(0, 0, 0, 0.08);
  width: 350px;
  height: 542px;
  top: 15%;
  position: absolute;
  border-radius: 12px;
  left: 40%;
  align-items: center;
  justify-content: center;

  div {
    width: 252px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 400px;
    height: 500px;
    top: 15%;
    left: 45%;
  }

  @media (max-width: 720px) {
    width: 280px;
    height: 350px;
    top: 20%;
    left: -5%;
  }

  @media (max-width: 400px) {
    width: 280px;
    height: 350px;
    top: 20%;
    left: 0% !important;
  }
`;