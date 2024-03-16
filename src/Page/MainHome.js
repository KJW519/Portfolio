import React from "react";
import styled from "styled-components";
import HomeFirst from "../Components/Web/Home_Components/Web_HomeFirst"
import HomeFirstMob from "../Components/Mobile/Mob_Home/Mob_HomeFirst"
import { useMediaQuery } from "react-responsive";


const HomePageComponent_Mob = styled.div`
      /* background-color: red; */
    `;

const MainHome = () => {
    const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.
  
    return (
        <>
          {isDesktopOrMobile !== true ? (
            <div>
              <HomeFirst />
            </div>
          ) : (
            <HomePageComponent_Mob>
              <HomeFirstMob />
            </HomePageComponent_Mob>
          )}
        </>
    );
};

export default MainHome;