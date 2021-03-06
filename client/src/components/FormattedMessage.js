import React, { useState } from "react";
import styled from "styled-components";
import {
  ALERT_BACKGROUND,
  ALERT_TEXT_COLOR,
  BORDER_RADIUS,
  NOTIFY_BACKGROUND,
  NOTIFY_TEXT_COLOR,
  PADDING2_EVEN_LARGE,
  WARN_BACKGROUND,
  WARN_TEXT_COLOR,
} from "../styles";

const getColor = (type) => {
  if (type === "alert") return ALERT_TEXT_COLOR;
  if (type === "warn") return WARN_TEXT_COLOR;
  return NOTIFY_TEXT_COLOR;
};

const getBackgroundColor = (type) => {
  if (type === "alert") return ALERT_BACKGROUND;
  if (type === "warn") return WARN_BACKGROUND;
  return NOTIFY_BACKGROUND;
};

const FormattedMessageContainer = styled.div`
  color: ${(props) => getColor(props.type)};
  background: ${(props) => getBackgroundColor(props.type)};
  border: 2px solid ${(props) => getColor(props.type)};
  padding: ${PADDING2_EVEN_LARGE};
  border-radius: ${BORDER_RADIUS};
`;

const FormattedMessage = (props) => {
  const [hide, setHide] = useState(false);
  if (hide) return null;
  return (
    <FormattedMessageContainer type={props.type}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.children}
        <span onClick={() => setHide(true)}>x</span>
      </div>
    </FormattedMessageContainer>
  );
};

export default FormattedMessage;
