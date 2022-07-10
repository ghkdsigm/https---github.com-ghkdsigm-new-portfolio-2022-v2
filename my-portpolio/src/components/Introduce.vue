<template>
  <div class="lg:pr-14 pr-4 self-center mt-80 text-left">
    <h2 class="comment" slot="s_comment">
      Various<br />Work Experiences<br />For your Brand
    </h2>
    <div class="my-14 grid grid-cols-5 justify-items-center">
      <!--기본정보(사진)-->
      <div class="col-span-2">
        <img src="https://mottohportfolio.shop/img/face.b9534ca1.png" alt="황승현의 이미지" />
        <!--기본정보-->
        
      </div>
      <!--기본정보(정보)-->
      <div class="col-span-3">
        <div>
          <h3>황 승 현</h3>
          <p>HWANG SEUNG HYUN</p>
          <ul>
            <li>1990.01.13. Yangcheon-gu, Seoul, Republic of Korea</li>
            <li>ghkdsigm3@naver.com / ghkdsigm3@gmail.com</li>
            <li> 010-9406-3935 /
              <a href="javascript:void(0);" id="resume">
                <img src="" alt="이력서">
                이력서 & 경력기술서.pdf
              </a>
            </li>
          </ul>
        </div>        
      </div>      
    </div>
    <div class="mt-4 block">
      <!--기본정보(이력)-->
      <h4>
          <b>'적자생존은 만고불변의 진리'</b>
          주어진 어떠한 환경과 역할에서도 동료와 함께 더 나은 길을 만들어 나아가는 사람이 되고자 합니다. 
        </h4>
        <div class="career">
          <h5>Educations</h5>
          <ul>
            <li>
              <span>2008.03.</span>
              <span>서울양정고등학교 졸업</span>
            </li>
            <li>
              <span>2016.01.</span>
              <span>경기대학교 경영학과 졸업</span>
            </li>
            <li>
              <span>2016.12.</span>
              <span>NCS 기반 반응형 디지털웹(웹표준&웹접근성) 과정 수료</span>
            </li>
            <li>
              <span>2022.01.</span>
              <span>패스트캠퍼스 프론트엔드 초격차 패키지 온라인 교육 과정 수료</span>
            </li>
          </ul>
        </div>
        <div class="career">
          <h5>Experience / Licenses</h5>
          <ul>
            <li>
              <span>2008.08.</span>
              <span>자동차1종보통면허 취득</span>
            </li>
            <li>
              <span>2012.03.</span>
              <span>텔레마케팅관리사 취득</span>
            </li>
            <li>
              <span>2016.01.</span>
              <span>한국사능력검정 1급 취득</span>
            </li>
            <li>
              <span>2019.08.</span>
              <span>정보처리기사 취득</span>
            </li>
          </ul>
        </div>
        <div class="career">
          <h5>Skills / Tools</h5>
          <ul class="mytools">
            <li>
              <span>Html5 / Css3 / Scss / Tailwind.css / Bootstrap / Mudblazor</span>
            </li>
            <li>
              <span>Javascript / Jquery / Vue2,3 / Nuxt.js / Blazor(Asp.net) / Firebase </span>
            </li>
            <li>
              <span>Git / Github / Gitlab / Svn / Netlify / Heroku </span>
            </li>
            <li>
              <span>Eclipse / VSCode / Powerpoint / Excel / Photoshop / Illustrator / Figma / Zeplin </span>
            </li>
          </ul>
        </div>
    </div>
  </div> 
</template>

<script>

export default {
 
}
</script>

<style lang="scss" scoped>
.comment {
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 0px;
    line-height: 70px;
    -webkit-transition: all 1.7s ease 0.61s;
    transition: all 1.7s ease 0.61s;
    font-family: "Exo", sans-serif;
    &::before {
      content: "";
      transition: left 0.2s cubic-bezier(0.47, 0, 0.745, 0.715),
        width 0.15s cubic-bezier(0.47, 0, 0.745, 0.715),
        opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      height: 1px;
      position: absolute;
      bottom: -20px;
      width: 0;
      height: 0.14em;
      bottom: 0;
      left: 0;
      opacity: 0.5;
    }
  }
  .comment_away {
    color: #000;
  }  
</style>