import React, { useEffect, useRef } from 'react';

const cerberusUrl = 'https://github.com/HYNSIK08/Cerberus/';

const languages = [
  { name: 'Java', width: 80, color: '#b07219', icon: 'java' },
  { name: 'CSS', width: 10, color: '#663399', icon: 'css3' },
  { name: 'Shell', width: 2, color: '#89e051', icon: 'bash' },
  { name: 'JavaScript', width: 8, color: '#f1e05a', icon: 'javascript' },
];

const toolsUsed = [
  { name: 'Tomcat 10.1', icon: 'tomcat' },
  { name: 'MariaDB 10.11', icon: 'mariadb' },
  { name: 'Maven 3.8+', icon: 'maven' },
  { name: 'Rocky Linux 9', icon: 'rockylinux' },
];

const securityStack = [
  'jBCrypt 0.4',
  'Jakarta Servlet Filter',
  'SecureRandom // JDK',
  'Base64 // JDK',
];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 16 16 4M6 4h10v10" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.57.1.78-.25.78-.55v-2.14c-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.53-.29-5.2-1.27-5.2-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.16 1.17a10.95 10.95 0 0 1 5.75 0c2.2-1.48 3.16-1.17 3.16-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.42-2.67 5.39-5.21 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2.5" y="2.5" width="19" height="19" rx="5.4" /><circle cx="12" cy="12" r="4.2" /><circle className="instagram-dot" cx="17.8" cy="6.4" r="1.15" /></svg>;
}

export default function App() {
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const moveLight = (event) => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      hero.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
    };
    hero.addEventListener('pointermove', moveLight, { passive: true });
    return () => hero.removeEventListener('pointermove', moveLight);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    footer.classList.add('has-reveal');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(footer);

    return () => {
      observer.disconnect();
      footer.classList.remove('has-reveal', 'is-visible');
    };
  }, []);

  return <>
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Labs 맨 위로">Labs</a>
      <nav aria-label="페이지 내 이동">
        <a href="#about">소개</a>
        <a href="#project">프로젝트</a>
        <a className="nav-stack" href="#stack">스택</a>
      </nav>
      <a className="header-link" href={cerberusUrl} target="_blank" rel="noopener noreferrer">GitHub 보기 <ArrowIcon /></a>
    </header>

    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title" ref={heroRef}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-light" aria-hidden="true" />
        <div className="drifting-petals" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> 최현식 // 보안 개발</p>
            <h1 id="hero-title">안유진을 사랑하는<br /><em>다이브 개발자</em></h1>
            <p className="hero-description"><a href="https://namu.wiki/w/%EC%B2%AD%EB%AA%85?from=%EC%B2%AD%EB%AA%85%28%ED%99%94%EC%82%B0%EA%B7%80%ED%99%98%29" target="_blank" rel="noopener noreferrer">청명</a> 같이 활발한 개발자가 되겠습니다.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#project">대표 프로젝트 살펴보기 <ArrowIcon /></a>
              <a className="quiet-link" href="#about">만든 사람 <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/sunflower.jpg" alt="해바라기 일러스트" width="900" height="1080" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-bottom">
          <span>최현식 / 2026</span>
          <span>한세사이버보안고 // 3학년</span>
          <span>아래로 ↓</span>
        </div>
      </section>

      <section className="about section-wrap" id="about" aria-label="소개">
        <div className="section-label"><span>01 / 소개</span><span>한세사이버보안고등학교 // 3학년</span></div>
        <div className="about-layout">
          <div className="about-copy">
            <div className="about-story">
              <p>기억은 잘 나지 않는다. 정신을 차려보니 고등학교 3학년이었다. 분명 엊그제 입학식을 했던 것 같은데, 어느새 졸업을 앞두고 있다. 그동안 뭘 배웠고, 무엇을 이루었는지 돌이켜보려 했지만 딱히 떠오르는 것은 없었다. 그렇게 별생각 없이 하루하루를 보내던 어느 날, 내 앞에 거대한 난관이 하나 나타났다. 취업. 남들은 이미 자격증을 준비하고, 이력서를 쓰고, 면접까지 보러 다니고 있었다. 반면 나는 아직 내가 뭘 잘하는지조차 확신하지 못했다. 어쩌다 이렇게 된 걸까. 그저 평범하게 학교를 다녔을 뿐인데, 정신을 차려보니 내 인생의 진로를 결정해야 하는 순간이 찾아와 있었다. 아무래도 내 인생의 튜토리얼은 이미 끝난 모양이다.</p>
              <p>튜토리얼이 끝났으니 이제 실전 퀘스트를 깨야 하는데, 일단 내 인벤토리에 뭐가 있는지부터 확인해야 했다. 거창한 스펙은 없었지만, 그래도 키보드를 두드리며 고민했던 시간들은 남아 있었다. 평소에 웹 서비스를 쓰면서 '로그인 버튼을 누르면 서버에서는 무슨 일이 일어날까?' 같은 소소한 궁금증이 생기면 직접 코드를 짜서 확인해 보곤 했다. 그렇게 시작한 게 계정 인증과 보안 정책, 접근 로그를 직접 구현해 본 'Cerberus' 프로젝트였다. 눈에 보이지 않는 백엔드의 흐름을 하나씩 뜯어보고, 어떻게 하면 안전하게 권한을 관리할 수 있을지 고민하는 과정은 생각보다 꽤 흥미로웠다. 클라우드 환경이 궁금해서 AWS를 만지작거려 본 일이나, 문제가 생겼을 때 로그를 뒤져가며 원인을 찾아내던 시간들도 마찬가지다.</p>
              <p>여전히 내가 남들보다 뛰어난 실력을 가졌다고 자신 있게 말하기는 어렵다. 하지만 내가 짠 코드가 어떤 과정을 거쳐 실행되는지, 서버와 네트워크가 실제로 어떻게 연결되어 돌아가는지 관찰하고 이해하려는 태도만큼은 내게 꽤 익숙해진 것 같다. 튜토리얼은 끝났지만, 처음부터 맵을 전부 다 외우고 게임을 시작하는 사람은 없다. 조금 느리더라도 내가 만든 서비스의 구조를 제대로 이해하고, 문제가 생겼을 때 로그를 읽으며 침착하게 원인을 찾아가는 사람. 그렇게 하나씩 퀘스트를 깨듯 나아가다 보면, 꽤 단단하게 1인분을 해내는 개발자가 되어 있지 않을까 생각한다.</p>
            </div>
          </div>
          <figure className="portrait">
            <img src="/profile.jpg" alt="정장을 입은 최현식의 프로필 사진" width="354" height="473" loading="lazy" />
            <figcaption><span>최현식 / PROFILE</span><span>2026</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="project" id="project" aria-labelledby="project-title">
        <div className="section-wrap">
          <div className="section-label"><span>02 / 대표 프로젝트</span><a className="section-source" href={cerberusUrl} target="_blank" rel="noopener noreferrer">HYNSIK08 / Cerberus ↗</a></div>
          <div className="project-header">
            <div>
              <p className="project-kicker">JSP 기반 인증 // 세션 관리</p>
              <h2 id="project-title">Cerberus<span className="project-period">.</span></h2>
            </div>
            <div className="project-overview">
              <a className="project-repo-link" href={cerberusUrl} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub에서 코드 보기 <ArrowIcon /></a>
            </div>
          </div>
          <div className="feature-list" aria-label="Cerberus 주요 기능">
            <div className="feature-row"><span className="feature-number">01</span><h3>인증</h3><p>BCrypt 해시, 세션 재발급, CSRF 방어</p></div>
            <div className="feature-row"><span className="feature-number">02</span><h3>정책</h3><p>계정 잠금과 세션 만료 시간을 관리자 화면에서 조정</p></div>
            <div className="feature-row"><span className="feature-number">03</span><h3>기록</h3><p>로그인 이력 저장, 관리자 로그 화면, JSON API</p></div>
          </div>
        </div>
      </section>

      <section className="stack section-wrap" id="stack" aria-labelledby="stack-title">
        <div className="section-label"><span>03 / 스택</span><span>GitHub / Cerberus</span></div>
        <div className="stack-heading">
          <h2 id="stack-title">스택</h2>
          <p>Cerberus에서 사용한 언어</p>
        </div>
        <div className="language-bar" role="img" aria-label="Cerberus 사용 언어: Java, CSS, Shell, JavaScript">
          {languages.map(({ name, width, color }) => <span key={name} style={{ width: `${width}%`, backgroundColor: color }} />)}
        </div>
        <ul className="language-list">
          {languages.map(({ name, color, icon }) => <li key={name} style={{ '--language-color': color }}>
            <img src={`/icons/${icon}.svg`} alt="" width="32" height="32" loading="lazy" />
            <span className="language-name"><i aria-hidden="true" />{name}</span>
          </li>)}
        </ul>
        <div className="stack-tools">
          <h3>실행 환경</h3>
          <ul>{toolsUsed.map(({ name, icon }) => <li key={name}><img src={`/icons/${icon}.svg`} alt="" width="26" height="26" loading="lazy" />{name}</li>)}</ul>
        </div>
        <div className="security-strip">
          <h3>보안 스택</h3>
          <ul>{securityStack.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
    </main>

    <footer className="site-footer" id="links" ref={footerRef}>
      <div className="footer-main section-wrap">
        <div className="footer-bottom">
          <a className="email-link" href="mailto:jazz202kt@naver.com">jazz202kt@naver.com</a>
          <div className="social-links">
            <a href="https://github.com/HYNSIK08/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /><span>GitHub</span></a>
            <a href="https://www.instagram.com/hynsik00/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /><span>Instagram</span></a>
          </div>
          <a className="back-top" href="#top">맨 위로</a>
        </div>
      </div>
    </footer>
  </>;
}
