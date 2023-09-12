import styled from "styled-components";
import React from "react";

const reportImageNames = Array.from({ length: 11 }, (_, index) => `report${index + 1}.png`);

const Root = styled.div`
  width: 1000px;
  margin-top: 100px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReportBox = styled.img`
  width: 900px;
  border: 1px solid #000000;
  margin: 8px;
`;

export const Proposal = () => {
  return (
    <Root>
      {reportImageNames.map((imageName, index) => (
        <ReportBox
          key={index}
          src={require(`./img/${imageName}`)}
          alt={imageName}
        />
      ))}
    </Root>
  );
};

export default Proposal;