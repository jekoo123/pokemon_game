/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ResultPage,
  ResultMessage,
  Item,
  ItemContainer,
  HeadContainer,
  HeadContents,
} from "./styled";

export const Result = () => {
  const [record, setRecord] = useState([]);
  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    let storedArray = JSON.parse(localStorage.getItem("localstoragedata"));
    if (storedArray === null) {
      storedArray = [];
    }

    if (data.id !== null && data.turn !== null) {
      const temp = [...storedArray, [data.id, data.result, data.turn]];
      localStorage.setItem("localstoragedata", JSON.stringify(temp));
      setRecord(temp);
    } else {
      setRecord(storedArray);
    }
  }, []);
  return (
    <ResultPage>
      {record.length > 0 ? (
        <>
          <HeadContainer>
            <HeadContents>Name</HeadContents>
            <HeadContents>결과</HeadContents>
            <HeadContents>턴 수</HeadContents>
          </HeadContainer>
          {record.map((item, index) => {
            return (
              <ItemContainer key={index}>
                <Item>{item[0]}</Item>
                <Item>{item[1]}</Item>
                <Item>{item[2]}</Item>
              </ItemContainer>
            );
          })}
        </>
      ) : (
        <ResultMessage>
          아직 기록이 없습니다. 로그인 상태로 카드게임을 플레이 해보세요.
        </ResultMessage>
      )}
    </ResultPage>
  );
};
