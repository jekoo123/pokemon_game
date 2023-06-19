/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import {
  RanderingPage,
  Banner,
  ZenigameContainer,
  Zenigame,
  Talk,
} from "./styled";
import { MainCardSection } from "../../components/mainCard/cardSection";

export const Randering = () => {
  const functiondata = [
    {
      name: "Card Game",
      discription: "카드게임을 통해 포켓몬을 만나보세요!",
      detail1: "랜덤으로 포켓몬을 뽑아 강한 상대방과 대결!",
      detail2: "약한 포켓몬을 뽑아도 전략만 잘 짜면 이길 수 있어요!",
      src: "https://2.bp.blogspot.com/-YNPdLQywtW4/W8wueuzNkrI/AAAAAAAAAOY/lrahfc22fLs2AMr068cnPvVGYenr-_8XACLcBGAs/s1600/99E493345AE78EF20E.gif",
      route: "/Card_Game",
    },
    {
      name: "Poke MBTI",
      discription: "포켓몬으로 알아보는 MBTI",
      detail1: "MBTI검사로 알아보는 나와 비슷한 포켓몬",
      detail2: "자신에 맞는 선택지를 선택하세요!16개의 문제로 아는 내 MBTI!",
      src: "https://media.tenor.com/8Vo82I74B38AAAAC/cute-pokemon.gif",
      route: "/MBTI",
    },
    {
      name: "Poke Wiki",
      discription: "포켓몬에 대해 알아보세요!",
      detail1: "어떤 강력한 포켓몬을 사용하면 대결에서 이길 수 있을까?",
      detail2: "포켓몬의 기술, 능력치를 포함한 모든 정보를 포켓몬 도감에서 확인하세요!",
      src: "https://i.chzbgr.com/full/8525634816/h561129EB/pokemon-memes-raichu-gif",
      route: "/Pokewiki",
    },
    {
      name: "Poke Game",
      discription: "포켓몬 캐릭터에 대해 알아보세요!",
      detail1: "캐릭터 이름 맞추기 게임!",
      detail2: "모르는 캐릭터도 알아보고 공부해요!",
      src: "https://www.mkgifs.com/wp-content/uploads/2022/09/cool-pokemon-gifs.gif",
      route: "/CharacterGame",
    },
  ];
  const [move, setMove] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {

      setMove(!move);
  }, [message]);

  return (
    <RanderingPage>
      <Banner />
      <ZenigameContainer move={move} >
        {message && <Talk>Help!!</Talk>}
        <Zenigame
          src="https://pokemon.itple.co.kr/public/img/pokemon/7.webp"
          alt="img2"
          onClick={() => {
            if(message === null){
              setMessage("안녕하세요");
            }
            else{
              setMessage(null);
            }
            
          }}
        />
      </ZenigameContainer>
      {/* <p>{message}</p> */}
      {functiondata.map((data, index) => {
        return (
          <MainCardSection
            name={data.name}
            discription={data.discription}
            detail1={data.detail1}
            detail2={data.detail2}
            src={data.src}
            route={data.route}
            id={index}
            key={index}
          />
        );
      })}
    </RanderingPage>
  );
};
