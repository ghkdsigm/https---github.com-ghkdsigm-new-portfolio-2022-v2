<template>
  <div class="self-center mt-80 text-left">
    <h2 class="comment text-6xl font-extrabold leading-tight dark:text-secondary text-secondary-dark">
      Various<br />Work Experiences<br />For your Brand
    </h2>
    <div class="my-14 grid grid-cols-5 justify-items-center">
      <!--기본정보(사진)-->
      <div class="col-span-2">
        <img src="https://mottohportfolio.shop/img/face.b9534ca1.png" alt="황승현의 이미지" />
        <!--기본정보-->
        
      </div>
      <!--기본정보(정보)-->
      <div class="col-span-3 flex items-center dark:text-secondary text-secondary-dark">
        <div>
          <h3 class="text-4xl dark:text-secondary font-bold">황 승 현</h3>
          <p class="text-2xl py-2 text-third dark:text-third-dark">HWANG SEUNG HYUN</p>
          <ul class="font-light text-lg">
            <li class="py-1">1990.01.13. Yangcheon-gu, Seoul, Republic of Korea</li>
            <li class="py-1">ghkdsigm3@naver.com / ghkdsigm3@gmail.com</li>
            <li class="py-1 flex"> 010-9406-3935 /
              <a href="javascript:void(0);" id="resume" class="flex">
                <img src="" alt="이력서">
                이력서 & 경력기술서.pdf
              </a>
            </li>
          </ul>
        </div>        
      </div>      
    </div>
    <div class="mt-4 block dark:text-secondary text-secondary-dark">
      <!--기본정보(이력)-->
      <h4 class="text-2xl mb-10 font-light">
        <b class="text-4xl block font-extrabold mb-2">'적자생존은 만고불변의 진리'</b>
        주어진 어떠한 환경과 역할에서도<br /> 동료와 함께 더 나은 길을 만들어 나아가는 사람이 되고자 합니다. 
      </h4>
      <div class="career mb-6">
        <h5 class="font-bold text-3xl">Educations</h5>
        <ul>
          <li class="py-1">
            <span class="font-medium">2008.03.</span>
            <span class="pl-4">서울양정고등학교 졸업</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2016.01.</span>
            <span class="pl-4">경기대학교 경영학과 졸업</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2016.12.</span>
            <span class="pl-4">NCS 기반 반응형 디지털웹(웹표준&웹접근성) 과정 수료</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2022.01.</span>
            <span class="pl-4">패스트캠퍼스 프론트엔드 초격차 패키지 온라인 교육 과정 수료</span>
          </li>
        </ul>
      </div>
      <div class="career mb-6">
        <h5 class="font-bold text-3xl">Experience / Licenses</h5>
        <ul>
          <li class="py-1">
            <span class="font-medium">2008.08.</span>
            <span class="pl-4">자동차1종보통면허 취득</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2012.03.</span>
            <span class="pl-4">텔레마케팅관리사 취득</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2016.01.</span>
            <span class="pl-4">한국사능력검정 1급 취득</span>
          </li>
          <li class="py-1">
            <span class="font-medium">2019.08.</span>
            <span class="pl-4">정보처리기사 취득</span>
          </li>
        </ul>
      </div>
      <div class="career mb-6">
        <h5 class="font-bold text-3xl">Skills / Tools</h5>
        <ul class="mytools">
          <li class="py-1">
            <span class="font-medium">Html5 / Css3 / Scss / Tailwind.css / Bootstrap / Mudblazor</span>
          </li>
          <li class="py-1">
            <span class="font-medium">Javascript / Jquery / Vue2,3 / Nuxt.js / Blazor(Asp.net) / Firebase </span>
          </li>
          <li class="py-1">
            <span class="font-medium">Git / Github / Gitlab / Svn / Netlify / Heroku </span>
          </li>
          <li class="py-1">
            <span class="font-medium">Eclipse / VSCode / Powerpoint / Excel / Photoshop / Illustrator / Figma / Zeplin </span>
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
    letter-spacing: 0px;
    -webkit-transition: all 0.3s ease 0.31s;
    transition: all 0.3s ease 0.31s;
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