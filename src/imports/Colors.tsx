import svgPaths from "./svg-ki668ph1q9";

function SectionTitleAndPageTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Section title and page title">
      <div className="flex flex-col font-['Cabin:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d27] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Foundations</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6667 13.6667">
              <path d={svgPaths.p20c4bd80} id="Icon" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Cabin:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d27] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Colors</p>
      </div>
    </div>
  );
}

function LogoAndPageTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Logo and page title">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Logomark">
        <div className="h-[36px] relative shrink-0 w-[31.5px]" data-name="nib-dark">
          <div className="absolute inset-[0_0.14%_0.01%_0]" data-name="logo mark">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4555 36.4195">
              <g id="logo mark">
                <path d={svgPaths.p34b08100} fill="var(--fill-0, #181D27)" />
                <path d={svgPaths.p11868200} fill="var(--fill-0, #181D27)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <SectionTitleAndPageTitle />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <LogoAndPageTitle />
      <a className="block font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" href="https://www.untitledui.com" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[30px] text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          www.untitledui.com
        </p>
      </a>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Heading and supporting text">
      <p className="font-['Lustria:Semibold',sans-serif] leading-[72px] max-w-[1024px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] w-full">Colors</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] max-w-[1024px] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[30px] text-[20px]">{`Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added `}</span>
        <a className="cursor-pointer decoration-solid leading-[30px] text-[20px] underline" href="https://www.w3.org/TR/WCAG22/" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
          <span className="decoration-solid underline" href="https://www.w3.org/TR/WCAG22/" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            WCAG 2.2
          </span>
        </a>
        <span className="leading-[30px] text-[20px]">{` contrast ratios to our color system so you can make sure you're designing with accessibility in mind.`}</span>
      </p>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Icon wrap">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute bottom-0 left-[16.67%] right-1/2 top-[66.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8.00006">
            <path d={svgPaths.p9147ac0} fill="var(--fill-0, #24CB71)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[33.33%] left-[16.67%] right-1/2 top-[33.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 7.99997">
            <path d={svgPaths.p34d56b80} fill="var(--fill-0, #874FFF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[66.67%] left-[16.67%] right-1/2 top-0" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 7.99997">
            <path d={svgPaths.p2ea58e80} fill="var(--fill-0, #FF3737)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[66.67%] left-1/2 right-[16.67%] top-0" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 7.99997">
            <path d={svgPaths.p196b1500} fill="var(--fill-0, #FF7237)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[33.33%] left-1/2 right-[16.67%] top-[33.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00012 8.00007">
            <path d={svgPaths.p1012eb00} fill="var(--fill-0, #00B6FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconAndResourceLink() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Icon and resource link">
      <IconWrap />
      <a className="block font-['Cabin:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#414651] text-[0px] whitespace-nowrap" href="https://help.figma.com/hc/en-us/articles/360038746534-Create-color-text-effect-and-layout-grid-styles" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">{`Create color, text, effect and layout grid styles ->`}</p>
      </a>
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Icon wrap">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute inset-[14.77%_-0.1%_14.77%_0.1%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16.9091">
            <path clipRule="evenodd" d={svgPaths.p8a3cb00} fill="var(--fill-0, #FF0302)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconAndResourceLink1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Icon and resource link">
      <IconWrap1 />
      <a className="block font-['Cabin:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#414651] text-[0px] whitespace-nowrap" href="https://www.youtube.com/watch?v=gtQ_A3imzsg" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">{`Figma Tutorial: Creating Styles ->`}</p>
      </a>
    </div>
  );
}

function ResourceLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Resource links">
      <IconAndResourceLink />
      <IconAndResourceLink1 />
    </div>
  );
}

function Resources() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Resources">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Resources</p>
      <ResourceLinks />
    </div>
  );
}

function HeadingAndResources() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Heading and resources">
      <HeadingAndSupportingText />
      <Resources />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fafafa] relative rounded-[20px] shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[128px] items-start pb-[64px] pt-[48px] px-[48px] relative w-full">
          <Header />
          <HeadingAndResources />
        </div>
      </div>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Primary colors</p>
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Base</p>
    </div>
  );
}

function Swatch() {
  return (
    <div className="absolute bg-white h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-black text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 21.1
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          White
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFFFFF
        </p>
      </div>
    </div>
  );
}

function Swatch1() {
  return (
    <div className="absolute bg-black h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 21:1
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Black
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #000000
        </p>
      </div>
    </div>
  );
}

function Swatch2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Transparent
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFFFFF 0%
        </p>
      </div>
    </div>
  );
}

function Swatches() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch />
        <Content3 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch1 />
        <Content4 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch2 />
        <Content5 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge1 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          These are base black and white color styles to quickly swap out if you need to.
        </p>
      </div>
      <Swatches />
    </div>
  );
}

function TextAndBadge2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Gray (light mode)</p>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="absolute bg-[#fdfdfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#535862] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.02
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDFDFD
        </p>
      </div>
    </div>
  );
}

function Swatch4() {
  return (
    <div className="absolute bg-[#fafafa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#535862] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.84
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFAFA
        </p>
      </div>
    </div>
  );
}

function Swatch5() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#535862] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.55
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F5F5
        </p>
      </div>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="absolute bg-[#e9eaeb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#535862] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.92
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E9EAEB
        </p>
      </div>
    </div>
  );
}

function Swatch7() {
  return (
    <div className="absolute bg-[#d5d7da] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#535862] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.95
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D5D7DA
        </p>
      </div>
    </div>
  );
}

function Swatch8() {
  return (
    <div className="absolute bg-[#a4a7ae] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.40
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A4A7AE
        </p>
      </div>
    </div>
  );
}

function Swatch9() {
  return (
    <div className="absolute bg-[#717680] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.56
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #717680
        </p>
      </div>
    </div>
  );
}

function Swatch10() {
  return (
    <div className="absolute bg-[#535862] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.14
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #535862
        </p>
      </div>
    </div>
  );
}

function Swatch11() {
  return (
    <div className="absolute bg-[#414651] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.46
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #414651
        </p>
      </div>
    </div>
  );
}

function Swatch12() {
  return (
    <div className="absolute bg-[#252b37] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.19
      </p>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #252B37
        </p>
      </div>
    </div>
  );
}

function Swatch13() {
  return (
    <div className="absolute bg-[#181d27] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 16.88
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #181D27
        </p>
      </div>
    </div>
  );
}

function Swatch14() {
  return (
    <div className="absolute bg-[#0a0d12] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 19.45
      </p>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0A0D12
        </p>
      </div>
    </div>
  );
}

function Swatches1() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch3 />
        <Content6 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch4 />
        <Content7 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch5 />
        <Content8 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch6 />
        <Content9 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch7 />
        <Content10 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch8 />
        <Content11 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch9 />
        <Content12 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch10 />
        <Content13 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch11 />
        <Content14 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch12 />
        <Content15 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch13 />
        <Content16 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch14 />
        <Content17 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge2 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gray is a neutral color and is the foundation of the color system. Almost everything in UI design—text, form fields, backgrounds, dividers—are usually gray.
        </p>
      </div>
      <Swatches1 />
    </div>
  );
}

function TextAndBadge3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Gray (dark mode)</p>
    </div>
  );
}

function Swatch15() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#61656c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.66
      </p>
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFAFA
        </p>
      </div>
    </div>
  );
}

function Swatch16() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#61656c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.37
      </p>
    </div>
  );
}

function Content19() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F7F7F7
        </p>
      </div>
    </div>
  );
}

function Swatch17() {
  return (
    <div className="absolute bg-[#f0f0f1] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#61656c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.14
      </p>
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F0F0F1
        </p>
      </div>
    </div>
  );
}

function Swatch18() {
  return (
    <div className="absolute bg-[#ececed] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#61656c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.95
      </p>
    </div>
  );
}

function Content21() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ECECED
        </p>
      </div>
    </div>
  );
}

function Swatch19() {
  return (
    <div className="absolute bg-[#cecfd2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#61656c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.75
      </p>
    </div>
  );
}

function Content22() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CECFD2
        </p>
      </div>
    </div>
  );
}

function Swatch20() {
  return (
    <div className="absolute bg-[#94979c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.94
      </p>
    </div>
  );
}

function Content23() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #94979C
        </p>
      </div>
    </div>
  );
}

function Swatch21() {
  return (
    <div className="absolute bg-[#85888e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.55
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #85888E
        </p>
      </div>
    </div>
  );
}

function Swatch22() {
  return (
    <div className="absolute bg-[#61656c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 5.85
      </p>
    </div>
  );
}

function Content25() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #61656C
        </p>
      </div>
    </div>
  );
}

function Swatch23() {
  return (
    <div className="absolute bg-[#373a41] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.38
      </p>
    </div>
  );
}

function Content26() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #373A41
        </p>
      </div>
    </div>
  );
}

function Swatch24() {
  return (
    <div className="absolute bg-[#22262f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.14
      </p>
    </div>
  );
}

function Content27() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #22262F
        </p>
      </div>
    </div>
  );
}

function Swatch25() {
  return (
    <div className="absolute bg-[#13161b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.13
      </p>
    </div>
  );
}

function Content28() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #13161B
        </p>
      </div>
    </div>
  );
}

function Swatch26() {
  return (
    <div className="absolute bg-[#0c0e12] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 19.31
      </p>
    </div>
  );
}

function Content29() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0C0E12
        </p>
      </div>
    </div>
  );
}

function Swatches2() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch15 />
        <Content18 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch16 />
        <Content19 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch17 />
        <Content20 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch18 />
        <Content21 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch19 />
        <Content22 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch20 />
        <Content23 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch21 />
        <Content24 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch22 />
        <Content25 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch23 />
        <Content26 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch24 />
        <Content27 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch25 />
        <Content28 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch26 />
        <Content29 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge3 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          This is a separate gray color palette used specifically for dark mode. This gray has been desaturated and optimised to work well within dark mode variables.
        </p>
      </div>
      <Swatches2 />
    </div>
  );
}

function TextAndBadge4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Brand</p>
    </div>
  );
}

function Swatch27() {
  return (
    <div className="absolute bg-[#f6fefc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 5.43
      </p>
    </div>
  );
}

function Content30() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F6FEFC
        </p>
      </div>
    </div>
  );
}

function Swatch28() {
  return (
    <div className="absolute bg-[#f0fdf9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.33
      </p>
    </div>
  );
}

function Content31() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F0FDF9
        </p>
      </div>
    </div>
  );
}

function Swatch29() {
  return (
    <div className="absolute bg-[#ccfbef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.93
      </p>
    </div>
  );
}

function Content32() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CCFBEF
        </p>
      </div>
    </div>
  );
}

function Swatch30() {
  return (
    <div className="absolute bg-[#99f6e0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.40
      </p>
    </div>
  );
}

function Content33() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #99F6E0
        </p>
      </div>
    </div>
  );
}

function Swatch31() {
  return (
    <div className="absolute bg-[#5fe9d0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.72
      </p>
    </div>
  );
}

function Content34() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #5FE9D0
        </p>
      </div>
    </div>
  );
}

function Swatch32() {
  return (
    <div className="absolute bg-[#2ed3b7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.88
      </p>
    </div>
  );
}

function Content35() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2ED3B7
        </p>
      </div>
    </div>
  );
}

function Swatch33() {
  return (
    <div className="absolute bg-[#15b79e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.53
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #15B79E
        </p>
      </div>
    </div>
  );
}

function Swatch34() {
  return (
    <div className="absolute bg-[#0e9384] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.80
      </p>
    </div>
  );
}

function Content37() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0E9384
        </p>
      </div>
    </div>
  );
}

function Swatch35() {
  return (
    <div className="absolute bg-[#107569] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.56
      </p>
    </div>
  );
}

function Content38() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #107569
        </p>
      </div>
    </div>
  );
}

function Swatch36() {
  return (
    <div className="absolute bg-[#125d56] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.70
      </p>
    </div>
  );
}

function Content39() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #125D56
        </p>
      </div>
    </div>
  );
}

function Swatch37() {
  return (
    <div className="absolute bg-[#134e48] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.49
      </p>
    </div>
  );
}

function Content40() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #134E48
        </p>
      </div>
    </div>
  );
}

function Swatch38() {
  return (
    <div className="absolute bg-[#0a2926] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.46
      </p>
    </div>
  );
}

function Content41() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0A2926
        </p>
      </div>
    </div>
  );
}

function Swatches3() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch27 />
        <Content30 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch28 />
        <Content31 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch29 />
        <Content32 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch30 />
        <Content33 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch31 />
        <Content34 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch32 />
        <Content35 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch33 />
        <Content36 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch34 />
        <Content37 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch35 />
        <Content38 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch36 />
        <Content39 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch37 />
        <Content40 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch38 />
        <Content41 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge4 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`The brand color is your "primary" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.`}</p>
      </div>
      <Swatches3 />
    </div>
  );
}

function TextAndBadge5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Error</p>
    </div>
  );
}

function Swatch39() {
  return (
    <div className="absolute bg-[#fffbfa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b42318] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.39
      </p>
    </div>
  );
}

function Content42() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFFBFA
        </p>
      </div>
    </div>
  );
}

function Swatch40() {
  return (
    <div className="absolute bg-[#fef3f2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b42318] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.04
      </p>
    </div>
  );
}

function Content43() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEF3F2
        </p>
      </div>
    </div>
  );
}

function Swatch41() {
  return (
    <div className="absolute bg-[#fee4e2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b42318] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.45
      </p>
    </div>
  );
}

function Content44() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEE4E2
        </p>
      </div>
    </div>
  );
}

function Swatch42() {
  return (
    <div className="absolute bg-[#fecdca] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b42318] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.63
      </p>
    </div>
  );
}

function Content45() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FECDCA
        </p>
      </div>
    </div>
  );
}

function Swatch43() {
  return (
    <div className="absolute bg-[#fda29b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b42318] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.38
      </p>
    </div>
  );
}

function Content46() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDA29B
        </p>
      </div>
    </div>
  );
}

function Swatch44() {
  return (
    <div className="absolute bg-[#f97066] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.78
      </p>
    </div>
  );
}

function Content47() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F97066
        </p>
      </div>
    </div>
  );
}

function Swatch45() {
  return (
    <div className="absolute bg-[#f04438] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.75
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content48() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F04438
        </p>
      </div>
    </div>
  );
}

function Swatch46() {
  return (
    <div className="absolute bg-[#d92d20] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.83
      </p>
    </div>
  );
}

function Content49() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D92D20
        </p>
      </div>
    </div>
  );
}

function Swatch47() {
  return (
    <div className="absolute bg-[#b42318] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.57
      </p>
    </div>
  );
}

function Content50() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B42318
        </p>
      </div>
    </div>
  );
}

function Swatch48() {
  return (
    <div className="absolute bg-[#912018] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.66
      </p>
    </div>
  );
}

function Content51() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #912018
        </p>
      </div>
    </div>
  );
}

function Swatch49() {
  return (
    <div className="absolute bg-[#7a271a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.84
      </p>
    </div>
  );
}

function Content52() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7A271A
        </p>
      </div>
    </div>
  );
}

function Swatch50() {
  return (
    <div className="absolute bg-[#55160c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 13.94
      </p>
    </div>
  );
}

function Content53() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #55160C
        </p>
      </div>
    </div>
  );
}

function Swatches4() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch39 />
        <Content42 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch40 />
        <Content43 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch41 />
        <Content44 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch42 />
        <Content45 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch43 />
        <Content46 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch44 />
        <Content47 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch45 />
        <Content48 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch46 />
        <Content49 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch47 />
        <Content50 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch48 />
        <Content51 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch49 />
        <Content52 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch50 />
        <Content53 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge5 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.`}</p>
      </div>
      <Swatches4 />
    </div>
  );
}

function TextAndBadge6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Warning</p>
    </div>
  );
}

function Swatch51() {
  return (
    <div className="absolute bg-[#fffcf5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b54708] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.29
      </p>
    </div>
  );
}

function Content54() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFFCF5
        </p>
      </div>
    </div>
  );
}

function Swatch52() {
  return (
    <div className="absolute bg-[#fffaeb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b54708] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.20
      </p>
    </div>
  );
}

function Content55() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFFAEB
        </p>
      </div>
    </div>
  );
}

function Swatch53() {
  return (
    <div className="absolute bg-[#fef0c7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b54708] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.78
      </p>
    </div>
  );
}

function Content56() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEF0C7
        </p>
      </div>
    </div>
  );
}

function Swatch54() {
  return (
    <div className="absolute bg-[#fedf89] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b54708] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.16
      </p>
    </div>
  );
}

function Content57() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEDF89
        </p>
      </div>
    </div>
  );
}

function Swatch55() {
  return (
    <div className="absolute bg-[#fec84b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b54708] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.50
      </p>
    </div>
  );
}

function Content58() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEC84B
        </p>
      </div>
    </div>
  );
}

function Swatch56() {
  return (
    <div className="absolute bg-[#fdb022] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.84
      </p>
    </div>
  );
}

function Content59() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDB022
        </p>
      </div>
    </div>
  );
}

function Swatch57() {
  return (
    <div className="absolute bg-[#f79009] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.34
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content60() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F79009
        </p>
      </div>
    </div>
  );
}

function Swatch58() {
  return (
    <div className="absolute bg-[#dc6803] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 3.48
      </p>
    </div>
  );
}

function Content61() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #DC6803
        </p>
      </div>
    </div>
  );
}

function Swatch59() {
  return (
    <div className="absolute bg-[#b54708] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.42
      </p>
    </div>
  );
}

function Content62() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B54708
        </p>
      </div>
    </div>
  );
}

function Swatch60() {
  return (
    <div className="absolute bg-[#93370d] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.51
      </p>
    </div>
  );
}

function Content63() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #93370D
        </p>
      </div>
    </div>
  );
}

function Swatch61() {
  return (
    <div className="absolute bg-[#7a2e0e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.43
      </p>
    </div>
  );
}

function Content64() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7A2E0E
        </p>
      </div>
    </div>
  );
}

function Swatch62() {
  return (
    <div className="absolute bg-[#4e1d09] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 13.96
      </p>
    </div>
  );
}

function Content65() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4E1D09
        </p>
      </div>
    </div>
  );
}

function Swatches5() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch51 />
        <Content54 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch52 />
        <Content55 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch53 />
        <Content56 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch54 />
        <Content57 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch55 />
        <Content58 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch56 />
        <Content59 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch57 />
        <Content60 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch58 />
        <Content61 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch59 />
        <Content62 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch60 />
        <Content63 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch61 />
        <Content64 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch62 />
        <Content65 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge6 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users' attention.`}</p>
      </div>
      <Swatches5 />
    </div>
  );
}

function TextAndBadge7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Success</p>
    </div>
  );
}

function Swatch63() {
  return (
    <div className="absolute bg-[#f6fef9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#067647] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.54
      </p>
    </div>
  );
}

function Content66() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F6FEF9
        </p>
      </div>
    </div>
  );
}

function Swatch64() {
  return (
    <div className="absolute bg-[#ecfdf3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#067647] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.39
      </p>
    </div>
  );
}

function Content67() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ECFDF3
        </p>
      </div>
    </div>
  );
}

function Swatch65() {
  return (
    <div className="absolute bg-[#dcfae6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#067647] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.11
      </p>
    </div>
  );
}

function Content68() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #DCFAE6
        </p>
      </div>
    </div>
  );
}

function Swatch66() {
  return (
    <div className="absolute bg-[#a9efc5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#067647] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.29
      </p>
    </div>
  );
}

function Content69() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ABEFC6
        </p>
      </div>
    </div>
  );
}

function Swatch67() {
  return (
    <div className="absolute bg-[#75e0a7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#067647] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.51
      </p>
    </div>
  );
}

function Content70() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #75E0A7
        </p>
      </div>
    </div>
  );
}

function Swatch68() {
  return (
    <div className="absolute bg-[#47cd89] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.02
      </p>
    </div>
  );
}

function Content71() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #47CD89
        </p>
      </div>
    </div>
  );
}

function Swatch69() {
  return (
    <div className="absolute bg-[#17b26a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.75
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content72() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #17B26A
        </p>
      </div>
    </div>
  );
}

function Swatch70() {
  return (
    <div className="absolute bg-[#079455] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.90
      </p>
    </div>
  );
}

function Content73() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #079455
        </p>
      </div>
    </div>
  );
}

function Swatch71() {
  return (
    <div className="absolute bg-[#067647] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.69
      </p>
    </div>
  );
}

function Content74() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #067647
        </p>
      </div>
    </div>
  );
}

function Swatch72() {
  return (
    <div className="absolute bg-[#085d3a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.96
      </p>
    </div>
  );
}

function Content75() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #085D3A
        </p>
      </div>
    </div>
  );
}

function Swatch73() {
  return (
    <div className="absolute bg-[#074d31] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.92
      </p>
    </div>
  );
}

function Content76() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #074D31
        </p>
      </div>
    </div>
  );
}

function Swatch74() {
  return (
    <div className="absolute bg-[#053321] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 13.98
      </p>
    </div>
  );
}

function Content77() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #053321
        </p>
      </div>
    </div>
  );
}

function Swatches6() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch63 />
        <Content66 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch64 />
        <Content67 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch65 />
        <Content68 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch66 />
        <Content69 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch67 />
        <Content70 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch68 />
        <Content71 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch69 />
        <Content72 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch70 />
        <Content73 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch71 />
        <Content74 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch72 />
        <Content75 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch73 />
        <Content76 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch74 />
        <Content77 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge7 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.`}</p>
      </div>
      <Swatches6 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          These are the main neutral, brand and semantic colors that make up the majority of the colors used in the design system and components.
        </p>
      </div>
      <Content2 />
    </div>
  );
}

function TextAndBadge8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Secondary colors</p>
    </div>
  );
}

function TextAndBadge9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Gray blue</p>
    </div>
  );
}

function Swatch75() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3e4784] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.39
      </p>
    </div>
  );
}

function Content80() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFD
        </p>
      </div>
    </div>
  );
}

function Swatch76() {
  return (
    <div className="absolute bg-[#f8f9fc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3e4784] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.17
      </p>
    </div>
  );
}

function Content81() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F8F9FC
        </p>
      </div>
    </div>
  );
}

function Swatch77() {
  return (
    <div className="absolute bg-[#eaecf5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3e4784] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.30
      </p>
    </div>
  );
}

function Content82() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EAECF5
        </p>
      </div>
    </div>
  );
}

function Swatch78() {
  return (
    <div className="absolute bg-[#d5d9eb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3e4784] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.13
      </p>
    </div>
  );
}

function Content83() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D5D9EB
        </p>
      </div>
    </div>
  );
}

function Swatch79() {
  return (
    <div className="absolute bg-[#b3b8db] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3e4784] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.42
      </p>
    </div>
  );
}

function Content84() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B3B8DB
        </p>
      </div>
    </div>
  );
}

function Swatch80() {
  return (
    <div className="absolute bg-[#717bbc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.99
      </p>
    </div>
  );
}

function Content85() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #717BBC
        </p>
      </div>
    </div>
  );
}

function Swatch81() {
  return (
    <div className="absolute bg-[#4e5ba6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.22
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content86() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4E5BA6
        </p>
      </div>
    </div>
  );
}

function Swatch82() {
  return (
    <div className="absolute bg-[#3e4784] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.60
      </p>
    </div>
  );
}

function Content87() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3E4784
        </p>
      </div>
    </div>
  );
}

function Swatch83() {
  return (
    <div className="absolute bg-[#363f72] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.94
      </p>
    </div>
  );
}

function Content88() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #363F72
        </p>
      </div>
    </div>
  );
}

function Swatch84() {
  return (
    <div className="absolute bg-[#293056] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 12.71
      </p>
    </div>
  );
}

function Content89() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #293056
        </p>
      </div>
    </div>
  );
}

function Swatch85() {
  return (
    <div className="absolute bg-[#101323] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.42
      </p>
    </div>
  );
}

function Content90() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #101323
        </p>
      </div>
    </div>
  );
}

function Swatch86() {
  return (
    <div className="absolute bg-[#0d0f1c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 19.05
      </p>
    </div>
  );
}

function Content91() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0D0F1C
        </p>
      </div>
    </div>
  );
}

function Swatches7() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch75 />
        <Content80 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch76 />
        <Content81 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch77 />
        <Content82 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch78 />
        <Content83 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch79 />
        <Content84 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch80 />
        <Content85 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch81 />
        <Content86 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch82 />
        <Content87 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch83 />
        <Content88 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch84 />
        <Content89 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch85 />
        <Content90 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch86 />
        <Content91 />
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge9 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default gray color.
        </p>
      </div>
      <Swatches7 />
    </div>
  );
}

function TextAndBadge10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Gray cool</p>
    </div>
  );
}

function Swatch87() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4a5578] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.15
      </p>
    </div>
  );
}

function Content92() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFD
        </p>
      </div>
    </div>
  );
}

function Swatch88() {
  return (
    <div className="absolute bg-[#f9f9fb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4a5578] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.97
      </p>
    </div>
  );
}

function Content93() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F9F9FB
        </p>
      </div>
    </div>
  );
}

function Swatch89() {
  return (
    <div className="absolute bg-[#eff1f5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4a5578] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.48
      </p>
    </div>
  );
}

function Content94() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EFF1F5
        </p>
      </div>
    </div>
  );
}

function Swatch90() {
  return (
    <div className="absolute bg-[#dcdfea] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4a5578] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.51
      </p>
    </div>
  );
}

function Content95() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #DCDFEA
        </p>
      </div>
    </div>
  );
}

function Swatch91() {
  return (
    <div className="absolute bg-[#b9c0d4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4a5578] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.03
      </p>
    </div>
  );
}

function Content96() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B9C0D4
        </p>
      </div>
    </div>
  );
}

function Swatch92() {
  return (
    <div className="absolute bg-[#7d89b0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.45
      </p>
    </div>
  );
}

function Content97() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7D89B0
        </p>
      </div>
    </div>
  );
}

function Swatch93() {
  return (
    <div className="absolute bg-[#5d6b98] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.22
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content98() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #5D6B98
        </p>
      </div>
    </div>
  );
}

function Swatch94() {
  return (
    <div className="absolute bg-[#4a5578] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.33
      </p>
    </div>
  );
}

function Content99() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4A5578
        </p>
      </div>
    </div>
  );
}

function Swatch95() {
  return (
    <div className="absolute bg-[#404968] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.85
      </p>
    </div>
  );
}

function Content100() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #404968
        </p>
      </div>
    </div>
  );
}

function Swatch96() {
  return (
    <div className="absolute bg-[#30374f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.76
      </p>
    </div>
  );
}

function Content101() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #30374F
        </p>
      </div>
    </div>
  );
}

function Swatch97() {
  return (
    <div className="absolute bg-[#111322] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.41
      </p>
    </div>
  );
}

function Content102() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #111322
        </p>
      </div>
    </div>
  );
}

function Swatch98() {
  return (
    <div className="absolute bg-[#0e101b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.94
      </p>
    </div>
  );
}

function Content103() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0E101B
        </p>
      </div>
    </div>
  );
}

function Swatches8() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch87 />
        <Content92 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch88 />
        <Content93 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch89 />
        <Content94 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch90 />
        <Content95 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch91 />
        <Content96 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch92 />
        <Content97 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch93 />
        <Content98 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch94 />
        <Content99 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch95 />
        <Content100 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch96 />
        <Content101 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch97 />
        <Content102 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch98 />
        <Content103 />
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge10 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default gray color.
        </p>
      </div>
      <Swatches8 />
    </div>
  );
}

function TextAndBadge11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">{`Gray modern `}</p>
    </div>
  );
}

function Swatch99() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4b5565] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.35
      </p>
    </div>
  );
}

function Content104() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFD
        </p>
      </div>
    </div>
  );
}

function Swatch100() {
  return (
    <div className="absolute bg-[#f8fafc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4b5565] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.20
      </p>
    </div>
  );
}

function Content105() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F8FAFC
        </p>
      </div>
    </div>
  );
}

function Swatch101() {
  return (
    <div className="absolute bg-[#eef2f6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4b5565] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.69
      </p>
    </div>
  );
}

function Content106() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EEF2F6
        </p>
      </div>
    </div>
  );
}

function Swatch102() {
  return (
    <div className="absolute bg-[#e3e8ef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4b5565] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.12
      </p>
    </div>
  );
}

function Content107() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E3E8EF
        </p>
      </div>
    </div>
  );
}

function Swatch103() {
  return (
    <div className="absolute bg-[#cdd5df] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4b5565] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.08
      </p>
    </div>
  );
}

function Content108() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CDD5DF
        </p>
      </div>
    </div>
  );
}

function Swatch104() {
  return (
    <div className="absolute bg-[#9aa4b2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.52
      </p>
    </div>
  );
}

function Content109() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #9AA4B2
        </p>
      </div>
    </div>
  );
}

function Swatch105() {
  return (
    <div className="absolute bg-[#697586] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.67
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content110() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #697586
        </p>
      </div>
    </div>
  );
}

function Swatch106() {
  return (
    <div className="absolute bg-[#4b5565] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.53
      </p>
    </div>
  );
}

function Content111() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4B5565
        </p>
      </div>
    </div>
  );
}

function Swatch107() {
  return (
    <div className="absolute bg-[#364152] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.32
      </p>
    </div>
  );
}

function Content112() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #364152
        </p>
      </div>
    </div>
  );
}

function Swatch108() {
  return (
    <div className="absolute bg-[#202939] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.60
      </p>
    </div>
  );
}

function Content113() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #202939
        </p>
      </div>
    </div>
  );
}

function Swatch109() {
  return (
    <div className="absolute bg-[#121926] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 17.60
      </p>
    </div>
  );
}

function Content114() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #121926
        </p>
      </div>
    </div>
  );
}

function Swatch110() {
  return (
    <div className="absolute bg-[#0d121c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.74
      </p>
    </div>
  );
}

function Content115() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0D121C
        </p>
      </div>
    </div>
  );
}

function Swatches9() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch99 />
        <Content104 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch100 />
        <Content105 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch101 />
        <Content106 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch102 />
        <Content107 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch103 />
        <Content108 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch104 />
        <Content109 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch105 />
        <Content110 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch106 />
        <Content111 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch107 />
        <Content112 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch108 />
        <Content113 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch109 />
        <Content114 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch110 />
        <Content115 />
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge11 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default gray color.
        </p>
      </div>
      <Swatches9 />
    </div>
  );
}

function TextAndBadge12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">{`Gray neutral `}</p>
    </div>
  );
}

function Swatch111() {
  return (
    <div className="absolute bg-[#fcfcfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4d5761] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.18
      </p>
    </div>
  );
}

function Content116() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFD
        </p>
      </div>
    </div>
  );
}

function Swatch112() {
  return (
    <div className="absolute bg-[#f9fafb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4d5761] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.04
      </p>
    </div>
  );
}

function Content117() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F9FAFB
        </p>
      </div>
    </div>
  );
}

function Swatch113() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4d5761] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.69
      </p>
    </div>
  );
}

function Content118() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F3F4F6
        </p>
      </div>
    </div>
  );
}

function Swatch114() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4d5761] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.94
      </p>
    </div>
  );
}

function Content119() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E5E7EB
        </p>
      </div>
    </div>
  );
}

function Swatch115() {
  return (
    <div className="absolute bg-[#d2d6db] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#4d5761] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.04
      </p>
    </div>
  );
}

function Content120() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D2D6DB
        </p>
      </div>
    </div>
  );
}

function Swatch116() {
  return (
    <div className="absolute bg-[#9da4ae] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.51
      </p>
    </div>
  );
}

function Content121() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #9DA4AE
        </p>
      </div>
    </div>
  );
}

function Swatch117() {
  return (
    <div className="absolute bg-[#6c737f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.77
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content122() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #6C737F
        </p>
      </div>
    </div>
  );
}

function Swatch118() {
  return (
    <div className="absolute bg-[#4d5761] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.36
      </p>
    </div>
  );
}

function Content123() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4D5761
        </p>
      </div>
    </div>
  );
}

function Swatch119() {
  return (
    <div className="absolute bg-[#384250] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.17
      </p>
    </div>
  );
}

function Content124() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #384250
        </p>
      </div>
    </div>
  );
}

function Swatch120() {
  return (
    <div className="absolute bg-[#1f2a37] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.53
      </p>
    </div>
  );
}

function Content125() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1F2A37
        </p>
      </div>
    </div>
  );
}

function Swatch121() {
  return (
    <div className="absolute bg-[#111927] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 17.61
      </p>
    </div>
  );
}

function Content126() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #111927
        </p>
      </div>
    </div>
  );
}

function Swatch122() {
  return (
    <div className="absolute bg-[#0d121c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.74
      </p>
    </div>
  );
}

function Content127() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0D121C
        </p>
      </div>
    </div>
  );
}

function Swatches10() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch111 />
        <Content116 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch112 />
        <Content117 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch113 />
        <Content118 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch114 />
        <Content119 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch115 />
        <Content120 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch116 />
        <Content121 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch117 />
        <Content122 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch118 />
        <Content123 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch119 />
        <Content124 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch120 />
        <Content125 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch121 />
        <Content126 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch122 />
        <Content127 />
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge12 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default neutral color.
        </p>
      </div>
      <Swatches10 />
    </div>
  );
}

function TextAndBadge13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">{`Gray iron `}</p>
    </div>
  );
}

function Swatch123() {
  return (
    <div className="absolute bg-[#fcfcfc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#51525c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.54
      </p>
    </div>
  );
}

function Content128() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFC
        </p>
      </div>
    </div>
  );
}

function Swatch124() {
  return (
    <div className="absolute bg-[#fafafa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#51525c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.42
      </p>
    </div>
  );
}

function Content129() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFAFA
        </p>
      </div>
    </div>
  );
}

function Swatch125() {
  return (
    <div className="absolute bg-[#f4f4f5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#51525c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.04
      </p>
    </div>
  );
}

function Content130() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F4F4F5
        </p>
      </div>
    </div>
  );
}

function Swatch126() {
  return (
    <div className="absolute bg-[#e4e4e7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#51525c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.10
      </p>
    </div>
  );
}

function Content131() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E4E4E7
        </p>
      </div>
    </div>
  );
}

function Swatch127() {
  return (
    <div className="absolute bg-[#d1d1d6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#51525c] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.09
      </p>
    </div>
  );
}

function Content132() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D1D1D6
        </p>
      </div>
    </div>
  );
}

function Swatch128() {
  return (
    <div className="absolute bg-[#a0a0ab] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.58
      </p>
    </div>
  );
}

function Content133() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A0A0AB
        </p>
      </div>
    </div>
  );
}

function Swatch129() {
  return (
    <div className="absolute bg-[#70707b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.89
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content134() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #70707B
        </p>
      </div>
    </div>
  );
}

function Swatch130() {
  return (
    <div className="absolute bg-[#51525c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.74
      </p>
    </div>
  );
}

function Content135() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #51525C
        </p>
      </div>
    </div>
  );
}

function Swatch131() {
  return (
    <div className="absolute bg-[#3f3f46] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.44
      </p>
    </div>
  );
}

function Content136() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3F3F46
        </p>
      </div>
    </div>
  );
}

function Swatch132() {
  return (
    <div className="absolute bg-[#26272b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.92
      </p>
    </div>
  );
}

function Content137() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #26272B
        </p>
      </div>
    </div>
  );
}

function Swatch133() {
  return (
    <div className="absolute bg-[#1a1a1e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 17.34
      </p>
    </div>
  );
}

function Content138() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1A1A1E
        </p>
      </div>
    </div>
  );
}

function Swatch134() {
  return (
    <div className="absolute bg-[#131316] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.54
      </p>
    </div>
  );
}

function Content139() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #131316
        </p>
      </div>
    </div>
  );
}

function Swatches11() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch123 />
        <Content128 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch124 />
        <Content129 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch125 />
        <Content130 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch126 />
        <Content131 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch127 />
        <Content132 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch128 />
        <Content133 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch129 />
        <Content134 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch130 />
        <Content135 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch131 />
        <Content136 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch132 />
        <Content137 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch133 />
        <Content138 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch134 />
        <Content139 />
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge13 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default neutral color.
        </p>
      </div>
      <Swatches11 />
    </div>
  );
}

function TextAndBadge14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Gray true</p>
    </div>
  );
}

function Swatch135() {
  return (
    <div className="absolute bg-[#fcfcfc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#525252] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.61
      </p>
    </div>
  );
}

function Content140() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCFCFC
        </p>
      </div>
    </div>
  );
}

function Swatch136() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#525252] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.29
      </p>
    </div>
  );
}

function Content141() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F7F7F7
        </p>
      </div>
    </div>
  );
}

function Swatch137() {
  return (
    <div className="absolute bg-[#f5f5f5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#525252] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.16
      </p>
    </div>
  );
}

function Content142() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F5F5
        </p>
      </div>
    </div>
  );
}

function Swatch138() {
  return (
    <div className="absolute bg-[#e5e5e5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#525252] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.20
      </p>
    </div>
  );
}

function Content143() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E5E5E5
        </p>
      </div>
    </div>
  );
}

function Swatch139() {
  return (
    <div className="absolute bg-[#d6d6d6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#525252] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.37
      </p>
    </div>
  );
}

function Content144() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D6D6D6
        </p>
      </div>
    </div>
  );
}

function Swatch140() {
  return (
    <div className="absolute bg-[#a3a3a3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.52
      </p>
    </div>
  );
}

function Content145() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A3A3A3
        </p>
      </div>
    </div>
  );
}

function Swatch141() {
  return (
    <div className="absolute bg-[#737373] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.74
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content146() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #737373
        </p>
      </div>
    </div>
  );
}

function Swatch142() {
  return (
    <div className="absolute bg-[#525252] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.81
      </p>
    </div>
  );
}

function Content147() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #525252
        </p>
      </div>
    </div>
  );
}

function Swatch143() {
  return (
    <div className="absolute bg-[#424242] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.04
      </p>
    </div>
  );
}

function Content148() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #424242
        </p>
      </div>
    </div>
  );
}

function Swatch144() {
  return (
    <div className="absolute bg-[#292929] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.54
      </p>
    </div>
  );
}

function Content149() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #292929
        </p>
      </div>
    </div>
  );
}

function Swatch145() {
  return (
    <div className="absolute bg-[#141414] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.42
      </p>
    </div>
  );
}

function Content150() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #141414
        </p>
      </div>
    </div>
  );
}

function Swatch146() {
  return (
    <div className="absolute bg-[#0f0f0f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 19.16
      </p>
    </div>
  );
}

function Content151() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0F0F0F
        </p>
      </div>
    </div>
  );
}

function Swatches12() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch135 />
        <Content140 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch136 />
        <Content141 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch137 />
        <Content142 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch138 />
        <Content143 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch139 />
        <Content144 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch140 />
        <Content145 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch141 />
        <Content146 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch142 />
        <Content147 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch143 />
        <Content148 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch144 />
        <Content149 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch145 />
        <Content150 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch146 />
        <Content151 />
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge14 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default neutral color.
        </p>
      </div>
      <Swatches12 />
    </div>
  );
}

function TextAndBadge15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">{`Gray warm `}</p>
    </div>
  );
}

function Swatch147() {
  return (
    <div className="absolute bg-[#fdfdfc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#57534e] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.49
      </p>
    </div>
  );
}

function Content152() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDFDFC
        </p>
      </div>
    </div>
  );
}

function Swatch148() {
  return (
    <div className="absolute bg-[#fafaf9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#57534e] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.30
      </p>
    </div>
  );
}

function Content153() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFAF9
        </p>
      </div>
    </div>
  );
}

function Swatch149() {
  return (
    <div className="absolute bg-[#f5f5f4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#57534e] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.99
      </p>
    </div>
  );
}

function Content154() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F5F4
        </p>
      </div>
    </div>
  );
}

function Swatch150() {
  return (
    <div className="absolute bg-[#e7e5e4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#57534e] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.088
      </p>
    </div>
  );
}

function Content155() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E7E5E4
        </p>
      </div>
    </div>
  );
}

function Swatch151() {
  return (
    <div className="absolute bg-[#d7d3d0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#57534e] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.12
      </p>
    </div>
  );
}

function Content156() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D7D3D0
        </p>
      </div>
    </div>
  );
}

function Swatch152() {
  return (
    <div className="absolute bg-[#a9a29d] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.51
      </p>
    </div>
  );
}

function Content157() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A9A29D
        </p>
      </div>
    </div>
  );
}

function Swatch153() {
  return (
    <div className="absolute bg-[#79716b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.78
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content158() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #79716B
        </p>
      </div>
    </div>
  );
}

function Swatch154() {
  return (
    <div className="absolute bg-[#57534e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.62
      </p>
    </div>
  );
}

function Content159() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #57534E
        </p>
      </div>
    </div>
  );
}

function Swatch155() {
  return (
    <div className="absolute bg-[#44403c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.27
      </p>
    </div>
  );
}

function Content160() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #44403C
        </p>
      </div>
    </div>
  );
}

function Swatch156() {
  return (
    <div className="absolute bg-[#292524] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.16
      </p>
    </div>
  );
}

function Content161() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #292524
        </p>
      </div>
    </div>
  );
}

function Swatch157() {
  return (
    <div className="absolute bg-[#1c1917] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 17.48
      </p>
    </div>
  );
}

function Content162() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1C1917
        </p>
      </div>
    </div>
  );
}

function Swatch158() {
  return (
    <div className="absolute bg-[#171412] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 18.33
      </p>
    </div>
  );
}

function Content163() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #171412
        </p>
      </div>
    </div>
  );
}

function Swatches13() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch147 />
        <Content152 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch148 />
        <Content153 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch149 />
        <Content154 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch150 />
        <Content155 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch151 />
        <Content156 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch152 />
        <Content157 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch153 />
        <Content158 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch154 />
        <Content159 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch155 />
        <Content160 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch156 />
        <Content161 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch157 />
        <Content162 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch158 />
        <Content163 />
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge15 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default neutral color.
        </p>
      </div>
      <Swatches13 />
    </div>
  );
}

function TextAndBadge16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Moss</p>
    </div>
  );
}

function Swatch159() {
  return (
    <div className="absolute bg-[#fafdf7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3f621a] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.88
      </p>
    </div>
  );
}

function Content164() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFDF7
        </p>
      </div>
    </div>
  );
}

function Swatch160() {
  return (
    <div className="absolute bg-[#f5fbee] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3f621a] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.69
      </p>
    </div>
  );
}

function Content165() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5FBEE
        </p>
      </div>
    </div>
  );
}

function Swatch161() {
  return (
    <div className="absolute bg-[#e6f4d7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3f621a] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.15
      </p>
    </div>
  );
}

function Content166() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E6F4D7
        </p>
      </div>
    </div>
  );
}

function Swatch162() {
  return (
    <div className="absolute bg-[#ceeab0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3f621a] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.38
      </p>
    </div>
  );
}

function Content167() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CEEAB0
        </p>
      </div>
    </div>
  );
}

function Swatch163() {
  return (
    <div className="absolute bg-[#acdc79] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3f621a] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.46
      </p>
    </div>
  );
}

function Content168() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ACDC79
        </p>
      </div>
    </div>
  );
}

function Swatch164() {
  return (
    <div className="absolute bg-[#86cb3c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.97
      </p>
    </div>
  );
}

function Content169() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #86CB3C
        </p>
      </div>
    </div>
  );
}

function Swatch165() {
  return (
    <div className="absolute bg-[#669f2a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.20
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content170() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #669F2A
        </p>
      </div>
    </div>
  );
}

function Swatch166() {
  return (
    <div className="absolute bg-[#4f7a21] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.05
      </p>
    </div>
  );
}

function Content171() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4F7A21
        </p>
      </div>
    </div>
  );
}

function Swatch167() {
  return (
    <div className="absolute bg-[#3f621a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.06
      </p>
    </div>
  );
}

function Content172() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3F621A
        </p>
      </div>
    </div>
  );
}

function Swatch168() {
  return (
    <div className="absolute bg-[#335015] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.13
      </p>
    </div>
  );
}

function Content173() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #335015
        </p>
      </div>
    </div>
  );
}

function Swatch169() {
  return (
    <div className="absolute bg-[#2b4212] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.10
      </p>
    </div>
  );
}

function Content174() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2B4212
        </p>
      </div>
    </div>
  );
}

function Swatch170() {
  return (
    <div className="absolute bg-[#1a280b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.52
      </p>
    </div>
  );
}

function Content175() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1A280B
        </p>
      </div>
    </div>
  );
}

function Swatches14() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch159 />
        <Content164 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch160 />
        <Content165 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch161 />
        <Content166 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch162 />
        <Content167 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch163 />
        <Content168 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch164 />
        <Content169 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch165 />
        <Content170 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch166 />
        <Content171 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch167 />
        <Content172 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch168 />
        <Content173 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch169 />
        <Content174 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch170 />
        <Content175 />
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge16 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default success color.
        </p>
      </div>
      <Swatches14 />
    </div>
  );
}

function TextAndBadge17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">{`Green light `}</p>
    </div>
  );
}

function Swatch171() {
  return (
    <div className="absolute bg-[#fafef5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3b7c0f] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.04
      </p>
    </div>
  );
}

function Content176() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFEF5
        </p>
      </div>
    </div>
  );
}

function Swatch172() {
  return (
    <div className="absolute bg-[#f3fee7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3b7c0f] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.94
      </p>
    </div>
  );
}

function Content177() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F3FEE7
        </p>
      </div>
    </div>
  );
}

function Swatch173() {
  return (
    <div className="absolute bg-[#e3fbcc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3b7c0f] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.64
      </p>
    </div>
  );
}

function Content178() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E4FBCC
        </p>
      </div>
    </div>
  );
}

function Swatch174() {
  return (
    <div className="absolute bg-[#d0f8ab] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3b7c0f] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.34
      </p>
    </div>
  );
}

function Content179() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D0F8AB
        </p>
      </div>
    </div>
  );
}

function Swatch175() {
  return (
    <div className="absolute bg-[#a6ef67] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3b7c0f] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.72
      </p>
    </div>
  );
}

function Content180() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A6EF67
        </p>
      </div>
    </div>
  );
}

function Swatch176() {
  return (
    <div className="absolute bg-[#85e13a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.63
      </p>
    </div>
  );
}

function Content181() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #85E13A
        </p>
      </div>
    </div>
  );
}

function Swatch177() {
  return (
    <div className="absolute bg-[#66c61c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.18
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content182() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #66C61C
        </p>
      </div>
    </div>
  );
}

function Swatch178() {
  return (
    <div className="absolute bg-[#4ca30d] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.20
      </p>
    </div>
  );
}

function Content183() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4CA30D
        </p>
      </div>
    </div>
  );
}

function Swatch179() {
  return (
    <div className="absolute bg-[#3b7c0f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.15
      </p>
    </div>
  );
}

function Content184() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3B7C0F
        </p>
      </div>
    </div>
  );
}

function Swatch180() {
  return (
    <div className="absolute bg-[#326212] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.26
      </p>
    </div>
  );
}

function Content185() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #326212
        </p>
      </div>
    </div>
  );
}

function Swatch181() {
  return (
    <div className="absolute bg-[#2b5314] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.93
      </p>
    </div>
  );
}

function Content186() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2B5314
        </p>
      </div>
    </div>
  );
}

function Swatch182() {
  return (
    <div className="absolute bg-[#15290a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.51
      </p>
    </div>
  );
}

function Content187() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #15290A
        </p>
      </div>
    </div>
  );
}

function Swatches15() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch171 />
        <Content176 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch172 />
        <Content177 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch173 />
        <Content178 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch174 />
        <Content179 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch175 />
        <Content180 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch176 />
        <Content181 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch177 />
        <Content182 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch178 />
        <Content183 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch179 />
        <Content184 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch180 />
        <Content185 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch181 />
        <Content186 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch182 />
        <Content187 />
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge17 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default success color.
        </p>
      </div>
      <Swatches15 />
    </div>
  );
}

function TextAndBadge18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Green</p>
    </div>
  );
}

function Swatch183() {
  return (
    <div className="absolute bg-[#f6fef9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#087443] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 5.70
      </p>
    </div>
  );
}

function Content188() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F6FEF9
        </p>
      </div>
    </div>
  );
}

function Swatch184() {
  return (
    <div className="absolute bg-[#edfcf2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#087443] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.51
      </p>
    </div>
  );
}

function Content189() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EDFCF2
        </p>
      </div>
    </div>
  );
}

function Swatch185() {
  return (
    <div className="absolute bg-[#d3f8df] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#087443] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.08
      </p>
    </div>
  );
}

function Content190() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D3F8DF
        </p>
      </div>
    </div>
  );
}

function Swatch186() {
  return (
    <div className="absolute bg-[#aaf0c4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#087443] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.44
      </p>
    </div>
  );
}

function Content191() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #AAF0C4
        </p>
      </div>
    </div>
  );
}

function Swatch187() {
  return (
    <div className="absolute bg-[#73e2a3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#087443] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.65
      </p>
    </div>
  );
}

function Content192() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #73E2A3
        </p>
      </div>
    </div>
  );
}

function Swatch188() {
  return (
    <div className="absolute bg-[#3ccb7f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.09
      </p>
    </div>
  );
}

function Content193() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3CCB7F
        </p>
      </div>
    </div>
  );
}

function Swatch189() {
  return (
    <div className="absolute bg-[#16b364] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.73
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content194() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #16B364
        </p>
      </div>
    </div>
  );
}

function Swatch190() {
  return (
    <div className="absolute bg-[#099250] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.00
      </p>
    </div>
  );
}

function Content195() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #099250
        </p>
      </div>
    </div>
  );
}

function Swatch191() {
  return (
    <div className="absolute bg-[#087443] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.85
      </p>
    </div>
  );
}

function Content196() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #087443
        </p>
      </div>
    </div>
  );
}

function Swatch192() {
  return (
    <div className="absolute bg-[#095c37] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.08
      </p>
    </div>
  );
}

function Content197() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #095C37
        </p>
      </div>
    </div>
  );
}

function Swatch193() {
  return (
    <div className="absolute bg-[#084c2e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.07
      </p>
    </div>
  );
}

function Content198() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #084C2E
        </p>
      </div>
    </div>
  );
}

function Swatch194() {
  return (
    <div className="absolute bg-[#052e1c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.85
      </p>
    </div>
  );
}

function Content199() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #052E1C
        </p>
      </div>
    </div>
  );
}

function Swatches16() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch183 />
        <Content188 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch184 />
        <Content189 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch185 />
        <Content190 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch186 />
        <Content191 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch187 />
        <Content192 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch188 />
        <Content193 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch189 />
        <Content194 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch190 />
        <Content195 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch191 />
        <Content196 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch192 />
        <Content197 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch193 />
        <Content198 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch194 />
        <Content199 />
      </div>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge18 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default success color.
        </p>
      </div>
      <Swatches16 />
    </div>
  );
}

function TextAndBadge19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Teal</p>
    </div>
  );
}

function Swatch195() {
  return (
    <div className="absolute bg-[#f6fefc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 5.43
      </p>
    </div>
  );
}

function Content200() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F6FEFC
        </p>
      </div>
    </div>
  );
}

function Swatch196() {
  return (
    <div className="absolute bg-[#f0fdf9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.33
      </p>
    </div>
  );
}

function Content201() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F0FDF9
        </p>
      </div>
    </div>
  );
}

function Swatch197() {
  return (
    <div className="absolute bg-[#ccfbef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.93
      </p>
    </div>
  );
}

function Content202() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CCFBEF
        </p>
      </div>
    </div>
  );
}

function Swatch198() {
  return (
    <div className="absolute bg-[#99f6e0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.40
      </p>
    </div>
  );
}

function Content203() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #99F6E0
        </p>
      </div>
    </div>
  );
}

function Swatch199() {
  return (
    <div className="absolute bg-[#5fe9d0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#107569] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.72
      </p>
    </div>
  );
}

function Content204() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #5FE9D0
        </p>
      </div>
    </div>
  );
}

function Swatch200() {
  return (
    <div className="absolute bg-[#2ed3b7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.88
      </p>
    </div>
  );
}

function Content205() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2ED3B7
        </p>
      </div>
    </div>
  );
}

function Swatch201() {
  return (
    <div className="absolute bg-[#15b79e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.53
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content206() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #15B79E
        </p>
      </div>
    </div>
  );
}

function Swatch202() {
  return (
    <div className="absolute bg-[#0e9384] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.80
      </p>
    </div>
  );
}

function Content207() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0E9384
        </p>
      </div>
    </div>
  );
}

function Swatch203() {
  return (
    <div className="absolute bg-[#107569] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.56
      </p>
    </div>
  );
}

function Content208() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #107569
        </p>
      </div>
    </div>
  );
}

function Swatch204() {
  return (
    <div className="absolute bg-[#125d56] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.70
      </p>
    </div>
  );
}

function Content209() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #125D56
        </p>
      </div>
    </div>
  );
}

function Swatch205() {
  return (
    <div className="absolute bg-[#134e48] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.49
      </p>
    </div>
  );
}

function Content210() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #134E48
        </p>
      </div>
    </div>
  );
}

function Swatch206() {
  return (
    <div className="absolute bg-[#0a2926] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.46
      </p>
    </div>
  );
}

function Content211() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0A2926
        </p>
      </div>
    </div>
  );
}

function Swatches17() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch195 />
        <Content200 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch196 />
        <Content201 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch197 />
        <Content202 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch198 />
        <Content203 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch199 />
        <Content204 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch200 />
        <Content205 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch201 />
        <Content206 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch202 />
        <Content207 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch203 />
        <Content208 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch204 />
        <Content209 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch205 />
        <Content210 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch206 />
        <Content211 />
      </div>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge19 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default success color.
        </p>
      </div>
      <Swatches17 />
    </div>
  );
}

function TextAndBadge20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Cyan</p>
    </div>
  );
}

function Swatch207() {
  return (
    <div className="absolute bg-[#f5feff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#0e7090] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.48
      </p>
    </div>
  );
}

function Content212() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5FEFF
        </p>
      </div>
    </div>
  );
}

function Swatch208() {
  return (
    <div className="absolute bg-[#ecfdff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#0e7090] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.36
      </p>
    </div>
  );
}

function Content213() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ECFDFF
        </p>
      </div>
    </div>
  );
}

function Swatch209() {
  return (
    <div className="absolute bg-[#cff9fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#0e7090] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.98
      </p>
    </div>
  );
}

function Content214() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CFF9FE
        </p>
      </div>
    </div>
  );
}

function Swatch210() {
  return (
    <div className="absolute bg-[#a5f0fc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#0e7090] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.40
      </p>
    </div>
  );
}

function Content215() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A5F0FC
        </p>
      </div>
    </div>
  );
}

function Swatch211() {
  return (
    <div className="absolute bg-[#67e3f9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#0e7090] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.72
      </p>
    </div>
  );
}

function Content216() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #67E3F9
        </p>
      </div>
    </div>
  );
}

function Swatch212() {
  return (
    <div className="absolute bg-[#2ce] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.91
      </p>
    </div>
  );
}

function Content217() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #22CCEE
        </p>
      </div>
    </div>
  );
}

function Swatch213() {
  return (
    <div className="absolute bg-[#06aed4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.62
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content218() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #06AED4
        </p>
      </div>
    </div>
  );
}

function Swatch214() {
  return (
    <div className="absolute bg-[#088ab2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.97
      </p>
    </div>
  );
}

function Content219() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #088AB2
        </p>
      </div>
    </div>
  );
}

function Swatch215() {
  return (
    <div className="absolute bg-[#0e7090] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.61
      </p>
    </div>
  );
}

function Content220() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0E7090
        </p>
      </div>
    </div>
  );
}

function Swatch216() {
  return (
    <div className="absolute bg-[#155b75] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.53
      </p>
    </div>
  );
}

function Content221() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #155B75
        </p>
      </div>
    </div>
  );
}

function Swatch217() {
  return (
    <div className="absolute bg-[#164c63] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.34
      </p>
    </div>
  );
}

function Content222() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #164C63
        </p>
      </div>
    </div>
  );
}

function Swatch218() {
  return (
    <div className="absolute bg-[#0d2d3a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.44
      </p>
    </div>
  );
}

function Content223() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0D2D3A
        </p>
      </div>
    </div>
  );
}

function Swatches18() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch207 />
        <Content212 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch208 />
        <Content213 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch209 />
        <Content214 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch210 />
        <Content215 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch211 />
        <Content216 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch212 />
        <Content217 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch213 />
        <Content218 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch214 />
        <Content219 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch215 />
        <Content220 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch216 />
        <Content221 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch217 />
        <Content222 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch218 />
        <Content223 />
      </div>
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge20 />
      </div>
      <Swatches18 />
    </div>
  );
}

function TextAndBadge21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Blue light</p>
    </div>
  );
}

function Swatch219() {
  return (
    <div className="absolute bg-[#f5fbff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#026aa2] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.61
      </p>
    </div>
  );
}

function Content224() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5FBFF
        </p>
      </div>
    </div>
  );
}

function Swatch220() {
  return (
    <div className="absolute bg-[#f0f9ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#026aa2] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.49
      </p>
    </div>
  );
}

function Content225() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F0F9FF
        </p>
      </div>
    </div>
  );
}

function Swatch221() {
  return (
    <div className="absolute bg-[#e0f2fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#026aa2] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.10
      </p>
    </div>
  );
}

function Content226() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E0F2FE
        </p>
      </div>
    </div>
  );
}

function Swatch222() {
  return (
    <div className="absolute bg-[#b9e6fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#026aa2] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.40
      </p>
    </div>
  );
}

function Content227() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B9E6FE
        </p>
      </div>
    </div>
  );
}

function Swatch223() {
  return (
    <div className="absolute bg-[#7cd4fd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#026aa2] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.53
      </p>
    </div>
  );
}

function Content228() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7CD4FD
        </p>
      </div>
    </div>
  );
}

function Swatch224() {
  return (
    <div className="absolute bg-[#36bffa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.10
      </p>
    </div>
  );
}

function Content229() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #36BFFA
        </p>
      </div>
    </div>
  );
}

function Swatch225() {
  return (
    <div className="absolute bg-[#0ba5ec] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.76
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content230() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0BA5EC
        </p>
      </div>
    </div>
  );
}

function Swatch226() {
  return (
    <div className="absolute bg-[#0086c9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.99
      </p>
    </div>
  );
}

function Content231() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0086C9
        </p>
      </div>
    </div>
  );
}

function Swatch227() {
  return (
    <div className="absolute bg-[#026aa2] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.85
      </p>
    </div>
  );
}

function Content232() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #026AA2
        </p>
      </div>
    </div>
  );
}

function Swatch228() {
  return (
    <div className="absolute bg-[#065986] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.55
      </p>
    </div>
  );
}

function Content233() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #065986
        </p>
      </div>
    </div>
  );
}

function Swatch229() {
  return (
    <div className="absolute bg-[#0b4a6f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.44
      </p>
    </div>
  );
}

function Content234() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0B4A6F
        </p>
      </div>
    </div>
  );
}

function Swatch230() {
  return (
    <div className="absolute bg-[#062c41] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.53
      </p>
    </div>
  );
}

function Content235() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #062C41
        </p>
      </div>
    </div>
  );
}

function Swatches19() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch219 />
        <Content224 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch220 />
        <Content225 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch221 />
        <Content226 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch222 />
        <Content227 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch223 />
        <Content228 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch224 />
        <Content229 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch225 />
        <Content230 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch226 />
        <Content231 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch227 />
        <Content232 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch228 />
        <Content233 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch229 />
        <Content234 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch230 />
        <Content235 />
      </div>
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge21 />
      </div>
      <Swatches19 />
    </div>
  );
}

function TextAndBadge22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Blue</p>
    </div>
  );
}

function Swatch231() {
  return (
    <div className="absolute bg-[#f5faff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#175cd3] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.70
      </p>
    </div>
  );
}

function Content236() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5FAFF
        </p>
      </div>
    </div>
  );
}

function Swatch232() {
  return (
    <div className="absolute bg-[#eff8ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#175cd3] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.57
      </p>
    </div>
  );
}

function Content237() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EFF8FF
        </p>
      </div>
    </div>
  );
}

function Swatch233() {
  return (
    <div className="absolute bg-[#d1e9ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#175cd3] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.79
      </p>
    </div>
  );
}

function Content238() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D1E9FF
        </p>
      </div>
    </div>
  );
}

function Swatch234() {
  return (
    <div className="absolute bg-[#b2ddff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#175cd3] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.18
      </p>
    </div>
  );
}

function Content239() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B2DDFF
        </p>
      </div>
    </div>
  );
}

function Swatch235() {
  return (
    <div className="absolute bg-[#84caff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#175cd3] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.38
      </p>
    </div>
  );
}

function Content240() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #84CAFF
        </p>
      </div>
    </div>
  );
}

function Swatch236() {
  return (
    <div className="absolute bg-[#53b1fd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.31
      </p>
    </div>
  );
}

function Content241() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #53B1FD
        </p>
      </div>
    </div>
  );
}

function Swatch237() {
  return (
    <div className="absolute bg-[#2e90fa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.23
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content242() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2E90FA
        </p>
      </div>
    </div>
  );
}

function Swatch238() {
  return (
    <div className="absolute bg-[#1570ef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.56
      </p>
    </div>
  );
}

function Content243() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1570EF
        </p>
      </div>
    </div>
  );
}

function Swatch239() {
  return (
    <div className="absolute bg-[#175cd3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.98
      </p>
    </div>
  );
}

function Content244() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #175CD3
        </p>
      </div>
    </div>
  );
}

function Swatch240() {
  return (
    <div className="absolute bg-[#1849a9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.18
      </p>
    </div>
  );
}

function Content245() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1849A9
        </p>
      </div>
    </div>
  );
}

function Swatch241() {
  return (
    <div className="absolute bg-[#194185] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.83
      </p>
    </div>
  );
}

function Content246() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #194185
        </p>
      </div>
    </div>
  );
}

function Swatch242() {
  return (
    <div className="absolute bg-[#102a56] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.11
      </p>
    </div>
  );
}

function Content247() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #102A56
        </p>
      </div>
    </div>
  );
}

function Swatches20() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch231 />
        <Content236 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch232 />
        <Content237 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch233 />
        <Content238 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch234 />
        <Content239 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch235 />
        <Content240 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch236 />
        <Content241 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch237 />
        <Content242 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch238 />
        <Content243 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch239 />
        <Content244 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch240 />
        <Content245 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch241 />
        <Content246 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch242 />
        <Content247 />
      </div>
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge22 />
      </div>
      <Swatches20 />
    </div>
  );
}

function TextAndBadge23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Blue dark</p>
    </div>
  );
}

function Swatch243() {
  return (
    <div className="absolute bg-[#f5f8ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#004eeb] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.00
      </p>
    </div>
  );
}

function Content248() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F8FF
        </p>
      </div>
    </div>
  );
}

function Swatch244() {
  return (
    <div className="absolute bg-[#eff4ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#004eeb] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.79
      </p>
    </div>
  );
}

function Content249() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EFF4FF
        </p>
      </div>
    </div>
  );
}

function Swatch245() {
  return (
    <div className="absolute bg-[#d1e0ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#004eeb] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.80
      </p>
    </div>
  );
}

function Content250() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D1E0FF
        </p>
      </div>
    </div>
  );
}

function Swatch246() {
  return (
    <div className="absolute bg-[#b2ccff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#004eeb] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.94
      </p>
    </div>
  );
}

function Content251() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B2CCFF
        </p>
      </div>
    </div>
  );
}

function Swatch247() {
  return (
    <div className="absolute bg-[#84adff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#004eeb] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.85
      </p>
    </div>
  );
}

function Content252() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #84ADFF
        </p>
      </div>
    </div>
  );
}

function Swatch248() {
  return (
    <div className="absolute bg-[#528bff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.23
      </p>
    </div>
  );
}

function Content253() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #528BFF
        </p>
      </div>
    </div>
  );
}

function Swatch249() {
  return (
    <div className="absolute bg-[#2970ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.32
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content254() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2970FF
        </p>
      </div>
    </div>
  );
}

function Swatch250() {
  return (
    <div className="absolute bg-[#155eef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.41
      </p>
    </div>
  );
}

function Content255() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #155EEF
        </p>
      </div>
    </div>
  );
}

function Swatch251() {
  return (
    <div className="absolute bg-[#004eeb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.38
      </p>
    </div>
  );
}

function Content256() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #004EEB
        </p>
      </div>
    </div>
  );
}

function Swatch252() {
  return (
    <div className="absolute bg-[#0040c1] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.38
      </p>
    </div>
  );
}

function Content257() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #0040C1
        </p>
      </div>
    </div>
  );
}

function Swatch253() {
  return (
    <div className="absolute bg-[#00359e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.48
      </p>
    </div>
  );
}

function Content258() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #00359E
        </p>
      </div>
    </div>
  );
}

function Swatch254() {
  return (
    <div className="absolute bg-[#026] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.78
      </p>
    </div>
  );
}

function Content259() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #002266
        </p>
      </div>
    </div>
  );
}

function Swatches21() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch243 />
        <Content248 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch244 />
        <Content249 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch245 />
        <Content250 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch246 />
        <Content251 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch247 />
        <Content252 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch248 />
        <Content253 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch249 />
        <Content254 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch250 />
        <Content255 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch251 />
        <Content256 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch252 />
        <Content257 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch253 />
        <Content258 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch254 />
        <Content259 />
      </div>
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge23 />
      </div>
      <Swatches21 />
    </div>
  );
}

function TextAndBadge24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Indigo</p>
    </div>
  );
}

function Swatch255() {
  return (
    <div className="absolute bg-[#f5f8ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3538cd] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.60
      </p>
    </div>
  );
}

function Content260() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F8FF
        </p>
      </div>
    </div>
  );
}

function Swatch256() {
  return (
    <div className="absolute bg-[#eef4ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3538cd] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.31
      </p>
    </div>
  );
}

function Content261() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EEF4FF
        </p>
      </div>
    </div>
  );
}

function Swatch257() {
  return (
    <div className="absolute bg-[#e0eaff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3538cd] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.68
      </p>
    </div>
  );
}

function Content262() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E0EAFF
        </p>
      </div>
    </div>
  );
}

function Swatch258() {
  return (
    <div className="absolute bg-[#c7d7fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3538cd] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.61
      </p>
    </div>
  );
}

function Content263() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #C7D7FE
        </p>
      </div>
    </div>
  );
}

function Swatch259() {
  return (
    <div className="absolute bg-[#a4bcfd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#3538cd] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.30
      </p>
    </div>
  );
}

function Content264() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A4BCFD
        </p>
      </div>
    </div>
  );
}

function Swatch260() {
  return (
    <div className="absolute bg-[#8098f9] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.70
      </p>
    </div>
  );
}

function Content265() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #8098F9
        </p>
      </div>
    </div>
  );
}

function Swatch261() {
  return (
    <div className="absolute bg-[#6172f3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.03
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content266() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #6172F3
        </p>
      </div>
    </div>
  );
}

function Swatch262() {
  return (
    <div className="absolute bg-[#444ce7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.11
      </p>
    </div>
  );
}

function Content267() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #444CE7
        </p>
      </div>
    </div>
  );
}

function Swatch263() {
  return (
    <div className="absolute bg-[#3538cd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.08
      </p>
    </div>
  );
}

function Content268() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3538CD
        </p>
      </div>
    </div>
  );
}

function Swatch264() {
  return (
    <div className="absolute bg-[#2d31a6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.99
      </p>
    </div>
  );
}

function Content269() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2D31A6
        </p>
      </div>
    </div>
  );
}

function Swatch265() {
  return (
    <div className="absolute bg-[#2d3282] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.11
      </p>
    </div>
  );
}

function Content270() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2D3282
        </p>
      </div>
    </div>
  );
}

function Swatch266() {
  return (
    <div className="absolute bg-[#1f235b] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.48
      </p>
    </div>
  );
}

function Content271() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #1F235B
        </p>
      </div>
    </div>
  );
}

function Swatches22() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch255 />
        <Content260 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch256 />
        <Content261 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch257 />
        <Content262 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch258 />
        <Content263 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch259 />
        <Content264 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch260 />
        <Content265 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch261 />
        <Content266 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch262 />
        <Content267 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch263 />
        <Content268 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch264 />
        <Content269 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch265 />
        <Content270 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch266 />
        <Content271 />
      </div>
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge24 />
      </div>
      <Swatches22 />
    </div>
  );
}

function TextAndBadge25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Violet</p>
    </div>
  );
}

function Swatch267() {
  return (
    <div className="absolute bg-[#fbfaff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#6927da] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 6.96
      </p>
    </div>
  );
}

function Content272() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FBFAFF
        </p>
      </div>
    </div>
  );
}

function Swatch268() {
  return (
    <div className="absolute bg-[#f5f3ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#6927da] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.59
      </p>
    </div>
  );
}

function Content273() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F5F3FF
        </p>
      </div>
    </div>
  );
}

function Swatch269() {
  return (
    <div className="absolute bg-[#ece9fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#6927da] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.08
      </p>
    </div>
  );
}

function Content274() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #ECE9FE
        </p>
      </div>
    </div>
  );
}

function Swatch270() {
  return (
    <div className="absolute bg-[#ddd6fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#6927da] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.20
      </p>
    </div>
  );
}

function Content275() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #DDD6FE
        </p>
      </div>
    </div>
  );
}

function Swatch271() {
  return (
    <div className="absolute bg-[#c3b5fd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#6927da] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.90
      </p>
    </div>
  );
}

function Content276() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #C3B5FD
        </p>
      </div>
    </div>
  );
}

function Swatch272() {
  return (
    <div className="absolute bg-[#a48afb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.76
      </p>
    </div>
  );
}

function Content277() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A48AFB
        </p>
      </div>
    </div>
  );
}

function Swatch273() {
  return (
    <div className="absolute bg-[#875bf7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.31
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content278() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #875BF7
        </p>
      </div>
    </div>
  );
}

function Swatch274() {
  return (
    <div className="absolute bg-[#7839ee] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.80
      </p>
    </div>
  );
}

function Content279() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7839EE
        </p>
      </div>
    </div>
  );
}

function Swatch275() {
  return (
    <div className="absolute bg-[#6927da] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.23
      </p>
    </div>
  );
}

function Content280() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #6927DA
        </p>
      </div>
    </div>
  );
}

function Swatch276() {
  return (
    <div className="absolute bg-[#5720b7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.14
      </p>
    </div>
  );
}

function Content281() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #5720B7
        </p>
      </div>
    </div>
  );
}

function Swatch277() {
  return (
    <div className="absolute bg-[#491c96] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.11
      </p>
    </div>
  );
}

function Content282() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #491C96
        </p>
      </div>
    </div>
  );
}

function Swatch278() {
  return (
    <div className="absolute bg-[#2e125e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.39
      </p>
    </div>
  );
}

function Content283() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #2E125E
        </p>
      </div>
    </div>
  );
}

function Swatches23() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch267 />
        <Content272 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch268 />
        <Content273 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch269 />
        <Content274 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch270 />
        <Content275 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch271 />
        <Content276 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch272 />
        <Content277 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch273 />
        <Content278 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch274 />
        <Content279 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch275 />
        <Content280 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch276 />
        <Content281 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch277 />
        <Content282 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch278 />
        <Content283 />
      </div>
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge25 />
      </div>
      <Swatches23 />
    </div>
  );
}

function TextAndBadge26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Purple</p>
    </div>
  );
}

function Swatch279() {
  return (
    <div className="absolute bg-[#fafaff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#5925dc] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.41
      </p>
    </div>
  );
}

function Content284() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAFAFF
        </p>
      </div>
    </div>
  );
}

function Swatch280() {
  return (
    <div className="absolute bg-[#f4f3ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#5925dc] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.01
      </p>
    </div>
  );
}

function Content285() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F4F3FF
        </p>
      </div>
    </div>
  );
}

function Swatch281() {
  return (
    <div className="absolute bg-[#ebe9fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#5925dc] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.47
      </p>
    </div>
  );
}

function Content286() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EBE9FE
        </p>
      </div>
    </div>
  );
}

function Swatch282() {
  return (
    <div className="absolute bg-[#d9d6fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#5925dc] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.50
      </p>
    </div>
  );
}

function Content287() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D9D6FE
        </p>
      </div>
    </div>
  );
}

function Swatch283() {
  return (
    <div className="absolute bg-[#bdb4fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#5925dc] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.08
      </p>
    </div>
  );
}

function Content288() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #BDB4FE
        </p>
      </div>
    </div>
  );
}

function Swatch284() {
  return (
    <div className="absolute bg-[#9b8afb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.82
      </p>
    </div>
  );
}

function Content289() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #9B8AFB
        </p>
      </div>
    </div>
  );
}

function Swatch285() {
  return (
    <div className="absolute bg-[#7a5af8] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.52
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content290() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #7A5AF8
        </p>
      </div>
    </div>
  );
}

function Swatch286() {
  return (
    <div className="absolute bg-[#6938ef] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.15
      </p>
    </div>
  );
}

function Content291() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #6938EF
        </p>
      </div>
    </div>
  );
}

function Swatch287() {
  return (
    <div className="absolute bg-[#5925dc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.71
      </p>
    </div>
  );
}

function Content292() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #5925DC
        </p>
      </div>
    </div>
  );
}

function Swatch288() {
  return (
    <div className="absolute bg-[#4a1fb8] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.63
      </p>
    </div>
  );
}

function Content293() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4A1FB8
        </p>
      </div>
    </div>
  );
}

function Swatch289() {
  return (
    <div className="absolute bg-[#3e1c96] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 11.59
      </p>
    </div>
  );
}

function Content294() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #3E1C96
        </p>
      </div>
    </div>
  );
}

function Swatch290() {
  return (
    <div className="absolute bg-[#27115f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 15.76
      </p>
    </div>
  );
}

function Content295() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #27115F
        </p>
      </div>
    </div>
  );
}

function Swatches24() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch279 />
        <Content284 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch280 />
        <Content285 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch281 />
        <Content286 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch282 />
        <Content287 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch283 />
        <Content288 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch284 />
        <Content289 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch285 />
        <Content290 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch286 />
        <Content291 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch287 />
        <Content292 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch288 />
        <Content293 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch289 />
        <Content294 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch290 />
        <Content295 />
      </div>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge26 />
      </div>
      <Swatches24 />
    </div>
  );
}

function TextAndBadge27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Fuchsia</p>
    </div>
  );
}

function Swatch291() {
  return (
    <div className="absolute bg-[#fefaff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#9f1ab1] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.24
      </p>
    </div>
  );
}

function Content296() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEFAFF
        </p>
      </div>
    </div>
  );
}

function Swatch292() {
  return (
    <div className="absolute bg-[#fdf4ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#9f1ab1] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.00
      </p>
    </div>
  );
}

function Content297() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDF4FF
        </p>
      </div>
    </div>
  );
}

function Swatch293() {
  return (
    <div className="absolute bg-[#fbe8ff] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#9f1ab1] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.55
      </p>
    </div>
  );
}

function Content298() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FBE8FF
        </p>
      </div>
    </div>
  );
}

function Swatch294() {
  return (
    <div className="absolute bg-[#f6d0fe] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#9f1ab1] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.71
      </p>
    </div>
  );
}

function Content299() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F6D0FE
        </p>
      </div>
    </div>
  );
}

function Swatch295() {
  return (
    <div className="absolute bg-[#eeaafd] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#9f1ab1] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.62
      </p>
    </div>
  );
}

function Content300() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EEAAFD
        </p>
      </div>
    </div>
  );
}

function Swatch296() {
  return (
    <div className="absolute bg-[#e478fa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.51
      </p>
    </div>
  );
}

function Content301() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E478FA
        </p>
      </div>
    </div>
  );
}

function Swatch297() {
  return (
    <div className="absolute bg-[#d444f1] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.56
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content302() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #D444F1
        </p>
      </div>
    </div>
  );
}

function Swatch298() {
  return (
    <div className="absolute bg-[#ba24d5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.88
      </p>
    </div>
  );
}

function Content303() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #BA24D5
        </p>
      </div>
    </div>
  );
}

function Swatch299() {
  return (
    <div className="absolute bg-[#9f1ab1] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.44
      </p>
    </div>
  );
}

function Content304() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #9F1AB1
        </p>
      </div>
    </div>
  );
}

function Swatch300() {
  return (
    <div className="absolute bg-[#821890] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.45
      </p>
    </div>
  );
}

function Content305() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #821890
        </p>
      </div>
    </div>
  );
}

function Swatch301() {
  return (
    <div className="absolute bg-[#6f1877] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.13
      </p>
    </div>
  );
}

function Content306() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #6F1877
        </p>
      </div>
    </div>
  );
}

function Swatch302() {
  return (
    <div className="absolute bg-[#47104c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.51
      </p>
    </div>
  );
}

function Content307() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #47104C
        </p>
      </div>
    </div>
  );
}

function Swatches25() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch291 />
        <Content296 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch292 />
        <Content297 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch293 />
        <Content298 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch294 />
        <Content299 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch295 />
        <Content300 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch296 />
        <Content301 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch297 />
        <Content302 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch298 />
        <Content303 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch299 />
        <Content304 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch300 />
        <Content305 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch301 />
        <Content306 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch302 />
        <Content307 />
      </div>
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge27 />
      </div>
      <Swatches25 />
    </div>
  );
}

function TextAndBadge28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Pink</p>
    </div>
  );
}

function Swatch303() {
  return (
    <div className="absolute bg-[#fef6fb] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c11574] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.45
      </p>
    </div>
  );
}

function Content308() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEF6FB
        </p>
      </div>
    </div>
  );
}

function Swatch304() {
  return (
    <div className="absolute bg-[#fdf2fa] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c11574] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.30
      </p>
    </div>
  );
}

function Content309() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDF2FA
        </p>
      </div>
    </div>
  );
}

function Swatch305() {
  return (
    <div className="absolute bg-[#fce7f6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c11574] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.93
      </p>
    </div>
  );
}

function Content310() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCE7F6
        </p>
      </div>
    </div>
  );
}

function Swatch306() {
  return (
    <div className="absolute bg-[#fcceee] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c11574] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.19
      </p>
    </div>
  );
}

function Content311() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FCCEEE
        </p>
      </div>
    </div>
  );
}

function Swatch307() {
  return (
    <div className="absolute bg-[#faa7e0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c11574] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.21
      </p>
    </div>
  );
}

function Content312() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAA7E0
        </p>
      </div>
    </div>
  );
}

function Swatch308() {
  return (
    <div className="absolute bg-[#f670c7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.60
      </p>
    </div>
  );
}

function Content313() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F670C7
        </p>
      </div>
    </div>
  );
}

function Swatch309() {
  return (
    <div className="absolute bg-[#ee46bc] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.36
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content314() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EE46BC
        </p>
      </div>
    </div>
  );
}

function Swatch310() {
  return (
    <div className="absolute bg-[#dd2590] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.42
      </p>
    </div>
  );
}

function Content315() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #DD2590
        </p>
      </div>
    </div>
  );
}

function Swatch311() {
  return (
    <div className="absolute bg-[#c11574] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.78
      </p>
    </div>
  );
}

function Content316() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #C11574
        </p>
      </div>
    </div>
  );
}

function Swatch312() {
  return (
    <div className="absolute bg-[#9e165f] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.68
      </p>
    </div>
  );
}

function Content317() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #9E165F
        </p>
      </div>
    </div>
  );
}

function Swatch313() {
  return (
    <div className="absolute bg-[#851651] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.41
      </p>
    </div>
  );
}

function Content318() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #851651
        </p>
      </div>
    </div>
  );
}

function Swatch314() {
  return (
    <div className="absolute bg-[#4e0d30] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.74
      </p>
    </div>
  );
}

function Content319() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #4E0D30
        </p>
      </div>
    </div>
  );
}

function Swatches26() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch303 />
        <Content308 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch304 />
        <Content309 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch305 />
        <Content310 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch306 />
        <Content311 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch307 />
        <Content312 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch308 />
        <Content313 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch309 />
        <Content314 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch310 />
        <Content315 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch311 />
        <Content316 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch312 />
        <Content317 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch313 />
        <Content318 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch314 />
        <Content319 />
      </div>
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge28 />
      </div>
      <Swatches26 />
    </div>
  );
}

function TextAndBadge29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Rosé</p>
    </div>
  );
}

function Swatch315() {
  return (
    <div className="absolute bg-[#fff5f6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c01048] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.76
      </p>
    </div>
  );
}

function Content320() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFF5F6
        </p>
      </div>
    </div>
  );
}

function Swatch316() {
  return (
    <div className="absolute bg-[#fff1f3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c01048] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.61
      </p>
    </div>
  );
}

function Content321() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFF1F3
        </p>
      </div>
    </div>
  );
}

function Swatch317() {
  return (
    <div className="absolute bg-[#ffe4e8] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c01048] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.13
      </p>
    </div>
  );
}

function Content322() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFE4E8
        </p>
      </div>
    </div>
  );
}

function Swatch318() {
  return (
    <div className="absolute bg-[#fecdd6] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c01048] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.37
      </p>
    </div>
  );
}

function Content323() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FECDD6
        </p>
      </div>
    </div>
  );
}

function Swatch319() {
  return (
    <div className="absolute bg-[#fea3b4] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#c01048] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.25
      </p>
    </div>
  );
}

function Content324() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEA3B4
        </p>
      </div>
    </div>
  );
}

function Swatch320() {
  return (
    <div className="absolute bg-[#fd6f8e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.67
      </p>
    </div>
  );
}

function Content325() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FD6F8E
        </p>
      </div>
    </div>
  );
}

function Swatch321() {
  return (
    <div className="absolute bg-[#f63d68] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.62
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content326() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F63D68
        </p>
      </div>
    </div>
  );
}

function Swatch322() {
  return (
    <div className="absolute bg-[#e31b54] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.61
      </p>
    </div>
  );
}

function Content327() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E31B54
        </p>
      </div>
    </div>
  );
}

function Swatch323() {
  return (
    <div className="absolute bg-[#c01048] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.16
      </p>
    </div>
  );
}

function Content328() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #C01048
        </p>
      </div>
    </div>
  );
}

function Swatch324() {
  return (
    <div className="absolute bg-[#a11043] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.86
      </p>
    </div>
  );
}

function Content329() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A11043
        </p>
      </div>
    </div>
  );
}

function Swatch325() {
  return (
    <div className="absolute bg-[#89123e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.46
      </p>
    </div>
  );
}

function Content330() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #89123E
        </p>
      </div>
    </div>
  );
}

function Swatch326() {
  return (
    <div className="absolute bg-[#510b24] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 14.75
      </p>
    </div>
  );
}

function Content331() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #510B24
        </p>
      </div>
    </div>
  );
}

function Swatches27() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch315 />
        <Content320 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch316 />
        <Content321 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch317 />
        <Content322 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch318 />
        <Content323 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch319 />
        <Content324 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch320 />
        <Content325 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch321 />
        <Content326 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch322 />
        <Content327 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch323 />
        <Content328 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch324 />
        <Content329 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch325 />
        <Content330 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch326 />
        <Content331 />
      </div>
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge29 />
      </div>
      <Swatches27 />
    </div>
  );
}

function TextAndBadge30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Orange dark</p>
    </div>
  );
}

function Swatch327() {
  return (
    <div className="absolute bg-[#fff9f5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#bc1b06] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.10
      </p>
    </div>
  );
}

function Content332() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFF9F5
        </p>
      </div>
    </div>
  );
}

function Swatch328() {
  return (
    <div className="absolute bg-[#fff4ed] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#bc1b06] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.88
      </p>
    </div>
  );
}

function Content333() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFF4ED
        </p>
      </div>
    </div>
  );
}

function Swatch329() {
  return (
    <div className="absolute bg-[#ffe6d5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#bc1b06] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.31
      </p>
    </div>
  );
}

function Content334() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFE6D5
        </p>
      </div>
    </div>
  );
}

function Swatch330() {
  return (
    <div className="absolute bg-[#ffd6ae] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#bc1b06] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.69
      </p>
    </div>
  );
}

function Content335() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FFD6AE
        </p>
      </div>
    </div>
  );
}

function Swatch331() {
  return (
    <div className="absolute bg-[#ff9c66] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#bc1b06] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.09
      </p>
    </div>
  );
}

function Content336() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FF9C66
        </p>
      </div>
    </div>
  );
}

function Swatch332() {
  return (
    <div className="absolute bg-[#ff692e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.87
      </p>
    </div>
  );
}

function Content337() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FF692E
        </p>
      </div>
    </div>
  );
}

function Swatch333() {
  return (
    <div className="absolute bg-[#ff4405] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.45
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content338() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FF4405
        </p>
      </div>
    </div>
  );
}

function Swatch334() {
  return (
    <div className="absolute bg-[#e62e05] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.41
      </p>
    </div>
  );
}

function Content339() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E62E05
        </p>
      </div>
    </div>
  );
}

function Swatch335() {
  return (
    <div className="absolute bg-[#bc1b06] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 6.36
      </p>
    </div>
  );
}

function Content340() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #BC1B06
        </p>
      </div>
    </div>
  );
}

function Swatch336() {
  return (
    <div className="absolute bg-[#97180c] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.56
      </p>
    </div>
  );
}

function Content341() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #97180C
        </p>
      </div>
    </div>
  );
}

function Swatch337() {
  return (
    <div className="absolute bg-[#771a0d] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 10.83
      </p>
    </div>
  );
}

function Content342() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #771A0D
        </p>
      </div>
    </div>
  );
}

function Swatch338() {
  return (
    <div className="absolute bg-[#57130a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 13.97
      </p>
    </div>
  );
}

function Content343() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #57130A
        </p>
      </div>
    </div>
  );
}

function Swatches28() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch327 />
        <Content332 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch328 />
        <Content333 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch329 />
        <Content334 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch330 />
        <Content335 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch331 />
        <Content336 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch332 />
        <Content337 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch333 />
        <Content338 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch334 />
        <Content339 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch335 />
        <Content340 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch336 />
        <Content341 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch337 />
        <Content342 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch338 />
        <Content343 />
      </div>
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge30 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default warning color.
        </p>
      </div>
      <Swatches28 />
    </div>
  );
}

function TextAndBadge31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Orange</p>
    </div>
  );
}

function Swatch339() {
  return (
    <div className="absolute bg-[#fefaf5] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b93815] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.55
      </p>
    </div>
  );
}

function Content344() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEFAF5
        </p>
      </div>
    </div>
  );
}

function Swatch340() {
  return (
    <div className="absolute bg-[#fef6ee] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b93815] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.39
      </p>
    </div>
  );
}

function Content345() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEF6EE
        </p>
      </div>
    </div>
  );
}

function Swatch341() {
  return (
    <div className="absolute bg-[#fdead7] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b93815] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.92
      </p>
    </div>
  );
}

function Content346() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDEAD7
        </p>
      </div>
    </div>
  );
}

function Swatch342() {
  return (
    <div className="absolute bg-[#f9dbaf] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b93815] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.33
      </p>
    </div>
  );
}

function Content347() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F9DBAF
        </p>
      </div>
    </div>
  );
}

function Swatch343() {
  return (
    <div className="absolute bg-[#f7b27a] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#b93815] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.18
      </p>
    </div>
  );
}

function Content348() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F7B27A
        </p>
      </div>
    </div>
  );
}

function Swatch344() {
  return (
    <div className="absolute bg-[#f38744] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.51
      </p>
    </div>
  );
}

function Content349() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #F38744
        </p>
      </div>
    </div>
  );
}

function Swatch345() {
  return (
    <div className="absolute bg-[#ef6820] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.14
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content350() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EF6820
        </p>
      </div>
    </div>
  );
}

function Swatch346() {
  return (
    <div className="absolute bg-[#e04f16] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.96
      </p>
    </div>
  );
}

function Content351() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #E04F16
        </p>
      </div>
    </div>
  );
}

function Swatch347() {
  return (
    <div className="absolute bg-[#b93815] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.77
      </p>
    </div>
  );
}

function Content352() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #B93815
        </p>
      </div>
    </div>
  );
}

function Swatch348() {
  return (
    <div className="absolute bg-[#932f19] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.89
      </p>
    </div>
  );
}

function Content353() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #932F19
        </p>
      </div>
    </div>
  );
}

function Swatch349() {
  return (
    <div className="absolute bg-[#772917] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 9.93
      </p>
    </div>
  );
}

function Content354() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #772917
        </p>
      </div>
    </div>
  );
}

function Swatch350() {
  return (
    <div className="absolute bg-[#511c10] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 13.78
      </p>
    </div>
  );
}

function Content355() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #511C10
        </p>
      </div>
    </div>
  );
}

function Swatches29() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch339 />
        <Content344 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch340 />
        <Content345 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch341 />
        <Content346 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch342 />
        <Content347 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch343 />
        <Content348 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch344 />
        <Content349 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch345 />
        <Content350 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch346 />
        <Content351 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch347 />
        <Content352 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch348 />
        <Content353 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch349 />
        <Content354 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch350 />
        <Content355 />
      </div>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge31 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default warning color.
        </p>
      </div>
      <Swatches29 />
    </div>
  );
}

function TextAndBadge32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Yellow</p>
    </div>
  );
}

function Swatch351() {
  return (
    <div className="absolute bg-[#fefdf0] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#a15c07] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.06
      </p>
    </div>
  );
}

function Content356() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          25
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEFDF0
        </p>
      </div>
    </div>
  );
}

function Swatch352() {
  return (
    <div className="absolute bg-[#fefbe8] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#a15c07] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.98
      </p>
    </div>
  );
}

function Content357() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          50
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEFBE8
        </p>
      </div>
    </div>
  );
}

function Swatch353() {
  return (
    <div className="absolute bg-[#fef7c3] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#a15c07] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 4.76
      </p>
    </div>
  );
}

function Content358() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          100
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEF7C3
        </p>
      </div>
    </div>
  );
}

function Swatch354() {
  return (
    <div className="absolute bg-[#feee95] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#a15c07] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.41
      </p>
    </div>
  );
}

function Content359() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          200
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FEEE95
        </p>
      </div>
    </div>
  );
}

function Swatch355() {
  return (
    <div className="absolute bg-[#fde272] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[#a15c07] text-[18px] text-center top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        4.02
      </p>
    </div>
  );
}

function Content360() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          300
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FDE272
        </p>
      </div>
    </div>
  );
}

function Swatch356() {
  return (
    <div className="absolute bg-[#fac515] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.60
      </p>
    </div>
  );
}

function Content361() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          400
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #FAC515
        </p>
      </div>
    </div>
  );
}

function Swatch357() {
  return (
    <div className="absolute bg-[#eaaa08] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2.04
      </p>
      <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Dot">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Dot">
              <circle cx="7" cy="7" fill="var(--fill-0, white)" r="5" />
              <circle cx="7" cy="7" r="6" stroke="var(--stroke-0, white)" strokeOpacity="0.3" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content362() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          500
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #EAAA08
        </p>
      </div>
    </div>
  );
}

function Swatch358() {
  return (
    <div className="absolute bg-[#ca8504] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.05
      </p>
    </div>
  );
}

function Content363() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          600
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #CA8504
        </p>
      </div>
    </div>
  );
}

function Swatch359() {
  return (
    <div className="absolute bg-[#a15c07] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AA 5.18
      </p>
    </div>
  );
}

function Content364() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          700
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #A15C07
        </p>
      </div>
    </div>
  );
}

function Swatch360() {
  return (
    <div className="absolute bg-[#854a0e] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 7.03
      </p>
    </div>
  );
}

function Content365() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          800
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #854A0E
        </p>
      </div>
    </div>
  );
}

function Swatch361() {
  return (
    <div className="absolute bg-[#713b12] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 8.98
      </p>
    </div>
  );
}

function Content366() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          900
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #713B12
        </p>
      </div>
    </div>
  );
}

function Swatch362() {
  return (
    <div className="absolute bg-[#542c0d] h-[80px] left-0 right-0 rounded-[12px] top-0 z-[2]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[28px] left-[8px] right-[8px] text-[18px] text-center text-white top-[calc(50%-14px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        AAA 12.04
      </p>
    </div>
  );
}

function Content367() {
  return (
    <div className="bg-white mb-[-12px] relative rounded-[12px] shrink-0 w-full z-[1]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[92px] px-[12px] relative w-full">
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          950
        </p>
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          #542C0D
        </p>
      </div>
    </div>
  );
}

function Swatches30() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[32px] items-start min-h-px min-w-px relative" data-name="Swatches">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch351 />
        <Content356 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch352 />
        <Content357 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch353 />
        <Content358 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch354 />
        <Content359 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch355 />
        <Content360 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch356 />
        <Content361 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[224px]" data-name="_Swatch base">
        <Swatch357 />
        <Content362 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch358 />
        <Content363 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch359 />
        <Content364 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch360 />
        <Content365 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch361 />
        <Content366 />
      </div>
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[12px] relative rounded-[12px] shrink-0 w-[160px]" data-name="_Swatch base">
        <Swatch362 />
        <Content367 />
      </div>
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1024px] relative shrink-0 w-[480px]" data-name="Design note">
        <TextAndBadge32 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Can be swapped with the default warning color.
        </p>
      </div>
      <Swatches30 />
    </div>
  );
}

function Content79() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
      <Row14 />
      <Row15 />
      <Row16 />
      <Row17 />
      <Row18 />
      <Row19 />
      <Row20 />
      <Row21 />
      <Row22 />
      <Row23 />
      <Row24 />
      <Row25 />
      <Row26 />
      <Row27 />
      <Row28 />
      <Row29 />
      <Row30 />
    </div>
  );
}

function Content78() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge8 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#535862] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Along with primary colors, it's helpful to have a selection of secondary colors to use in components such as pills, alerts and labels. These secondary colors should be used sparingly or as accents, while the primary color(s) should take precedence.`}</p>
      </div>
      <Content79 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative w-full">
        <Content1 />
        <Content78 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Text">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px]">The ultimate Figma UI kit and design system</p>
      <a className="block font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px]" href="https://www.untitledui.com" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[30px] text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          www.untitledui.com
        </p>
      </a>
    </div>
  );
}

function GreatGrants() {
  return (
    <div className="absolute inset-[18.75%_0.2%_17.55%_19.73%]" data-name="Great Grants">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.093 15.288">
        <g id="Great Grants">
          <path d={svgPaths.p3bf4b870} fill="var(--fill-0, #181D27)" id="Vector" />
          <path d={svgPaths.p3912bf00} fill="var(--fill-0, #181D27)" id="Vector_2" />
          <path d={svgPaths.pc4bc070} fill="var(--fill-0, #181D27)" id="Vector_3" />
          <path d={svgPaths.pc409780} fill="var(--fill-0, #181D27)" id="Vector_4" />
          <path d={svgPaths.pd103700} fill="var(--fill-0, #181D27)" id="Vector_5" />
          <path d={svgPaths.p2a940f70} fill="var(--fill-0, #181D27)" id="Vector_6" />
          <path d={svgPaths.p1df1af80} fill="var(--fill-0, #181D27)" id="Vector_7" />
          <path d={svgPaths.p1e97fe00} fill="var(--fill-0, #181D27)" id="Vector_8" />
          <path d={svgPaths.p12cf6900} fill="var(--fill-0, #181D27)" id="Vector_9" />
          <path d={svgPaths.p27bd9680} fill="var(--fill-0, #181D27)" id="Vector_10" />
          <path d={svgPaths.p102e6e00} fill="var(--fill-0, #181D27)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Footer">
      <Text />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
        <div className="h-[24px] relative shrink-0 w-[135px]" data-name="nogo-dark">
          <div className="-translate-y-1/2 absolute aspect-[347/404] left-0 right-[84.72%] top-1/2" data-name="nib-dark">
            <div className="absolute inset-[0_0.14%_0.01%_0]" data-name="logo mark">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5959 24.0106">
                <g id="logo mark">
                  <path d={svgPaths.p1c2e5800} fill="var(--fill-0, #181D27)" />
                  <path d={svgPaths.p19a2b882} fill="var(--fill-0, #181D27)" />
                </g>
              </svg>
            </div>
          </div>
          <GreatGrants />
        </div>
      </div>
    </div>
  );
}

function Content368() {
  return (
    <div className="bg-[#fafafa] relative rounded-[20px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[128px] items-start p-[48px] relative w-full">
        <Footer />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          © 2025 Untitled UI • qJ72mVpF9KdW
        </p>
      </div>
    </div>
  );
}

export default function Colors() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Colors">
      <div className="bg-white relative shrink-0 w-full" data-name="Design system header">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Content />
        </div>
      </div>
      <Section />
      <div className="bg-white min-w-[1600px] relative shrink-0 w-full" data-name="Design system footer">
        <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[32px] relative w-full">
          <Content368 />
        </div>
      </div>
    </div>
  );
}