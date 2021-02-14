import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import SelectContainer from './SelectContainer';
import Messages from './Messages';
import SideBar from '../_Basic/SideBar';
import ProgressBar from '../_Basic/ProgressBar';
import ResultTemplate from '../Result/ResultTemplate'
import DelayedRender from './DelayedRender';

import noonsongImage from '../../Images/bbosong.jpg';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';

const TestTemplate = ({ isOpened, close, reopen }) => {
  const [numbers, setNumbers] = useState([1]);
  const [selected, setSelected] = useState([]);
  const [nowSelected, setNowSelected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [isResultModalOpened, setIsResultModalOpened] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [reset, setReset] = useState(false);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
    }
  }, [selected])

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => setLoaded(true), 1000);
    }
  }, [loaded]);

  useEffect(async () => {
    let res = await fetch('http://localhost:8000/questions/');
    await res.json().then((data) => {
      setQuestions(data);
      console.log(questions);
    })
  }, [reset])

  const getSelected = useCallback((selectedIndex) => {
    setNowSelected([...nowSelected, selectedIndex]);
    setTimeout(() => setSelected([...selected, selectedIndex]), 1000);
    setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
  });

  const handleLoad = () => {
    setLoaded(!loaded);
  }

  const openResultModal = () => {
    setIsResultModalOpened(true);
  }

  const closeResultModal = () => {
    setIsResultModalOpened(false);
  }

  const getConsole = () => {
    console.log(numbers);
    console.log(selected);
    console.log(nowSelected);
    console.log(loaded);
    console.log(questions);
  }

  const replayHandler = (e) => {
    e.preventDefault(e);
    setReset(!reset);
    setNumbers([1]);
    setSelected([]);
    setNowSelected([]);
    setLoaded(true);
    setQuestions([]);
    close();
    setTimeout(() => getConsole(), 10000);
  }

  return (
    <>
    { isOpened ? (
      <div>
        <TestModal>
          <SideBar close={close}/>
          { numbers.length < 32 ? (
          <ContentWrapper>
            <MBoxWrapper>
              <Messages numbers={numbers} contents={questions} selected={nowSelected} loaded={loaded}/>
            </MBoxWrapper>
            <DelayedRender delay={1000}>
              <SelectContainer 
                index={Math.ceil(numbers.length / 2)} 
                getSelected={getSelected}
                handleLoad={handleLoad}
                contents={questions}>
              </SelectContainer>
            </DelayedRender>
          </ContentWrapper>
          ) : (
            <ContentWrapper>
            { !loaded ? 
              <ProgressBarWrapper disappear={!loaded}>
                <ProgressBar/>
              </ProgressBarWrapper>
              :
              <ResultWrapper>
                <NoonsongType>뽀송뽀송 함박눈송이</NoonsongType>
                <NoonsongImage><img src={noonsongImage} alt="loading..." style={{width: "20rem"}} /></NoonsongImage>
                <NoonsongDescription>
                  주변 사람들을 편안하게 해주는 능력을 갖고 있는, 누구에게나 사랑받는 눈송이에요!<br/>
                  뽀송뽀송한 함박눈송이들 사이에 있으면 제 마음도 뽀송뽀송해지는 기분이랄까요?<br/>
                </NoonsongDescription>
                <ButtonsWrapper>
                  <Replay>
                    <Button 
                      onClick={replayHandler}
                      variant="text"
                      startIcon={<ReplayIcon fontSize="large"/>} >
                      다시하기
                    </Button>
                  </Replay>
                  <KakaoLink>
                    <a id="create-kakao-link-btn" href="javascript:;">
                    <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" width="30rem" />
                    </a>
                  </KakaoLink>
                </ButtonsWrapper>
                {/* 사용하려면 Web 플랫폼 등록해야함 (도메인 있어야 함)
                Kakao.Link.createDefaultButton({
                  container: '#create-kakao-link-btn',
                  objectType: 'feed',
                  content: {
                    title: '눈송이 유형 테스트',
                    description: '나는 어떤 유형의 눈송이일까?',
                    imageUrl:
                      'https://cdn.discordapp.com/attachments/805692710342098944/807269209432129596/IMG_0566.jpg',
                    link: {
                      mobileWebUrl: 'https://developers.kakao.com',
                      webUrl: 'https://developers.kakao.com',
                    },
                  },
                  social: {
                    likeCount: 286,
                    commentCount: 45,
                    sharedCount: 845,
                  },
                  buttons: [
                    {
                      title: '테스트 하기',
                      link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                      },
                    },
                    {
                      title: '결과 보기',
                      link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                      },
                    },
                  ],
                  })
                */}
              </ResultWrapper>
              }
            </ContentWrapper>
          )}
        </TestModal>
      </div>
    ) : null}
  </>
  );
}

export default TestTemplate;

const Background = styled.div`
  position: relative;
`;

const TestModal = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: white;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MBoxWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 auto;
`;

const ProgressBarWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${props =>
  props.disappear &&
  css`
    display: block;
  `}
`;

const NoonsongType = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const NoonsongImage = styled.div`
    margin-bottom: 0.4rem;
`;

const NoonsongDescription = styled.div`
    width: 80%;
    font-size: 1rem;
    text-align: center;
    word-break: keep-all;
    margin-bottom: 1rem;
`;

const Replay = styled.div`
    padding-right: 0.5rem;
`;

const KakaoLink = styled.div`
    padding-left: 0.5rem;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ResultWrapper = styled.div`
    width: calc(100% - 4rem);
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
    padding: 2rem;
    font-family: "Carmen Sans";
    overflow-y: scroll;

    /* scrollbar */
    ::-webkit-scrollbar {
      width: 16px;
    }
    ::-webkit-scrollbar-thumb {
        height: 6px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        background-color: #f1f3f5; // background: #dee2e6;
        -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
`;