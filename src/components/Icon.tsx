import styled from "@emotion/styled";

import iconImg from "@src/assets/Icon.png";

export const Icon = styled.img({
  width: 50,
  height: 50,
  marginBottom: 10,
});

Icon.defaultProps = {
  src: iconImg,
};
