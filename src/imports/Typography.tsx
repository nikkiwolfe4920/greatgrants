import svgPaths from "./svg-ujsc6h2067";

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
        <p className="leading-[30px]">Typography</p>
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
      <p className="font-['Lustria:Semibold',sans-serif] leading-[72px] max-w-[1024px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] w-full">Typography</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[30px] max-w-[1024px] relative shrink-0 text-[#535862] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as accessible as possible for everyone.
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
      <a className="block font-['Cabin:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#414651] text-[0px] whitespace-nowrap" href="https://help.figma.com/hc/en-us/articles/360039957034-Create-and-Apply-Text-Styles" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">{`Create and Apply Text Styles ->`}</p>
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

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Text">
      <p className="leading-[0] relative shrink-0 text-[0px] tracking-[-0.96px]">
        <span className="leading-[60px] text-[48px]">{`Cabin - `}</span>
        <a className="cursor-pointer decoration-solid leading-[60px] text-[48px] underline" href="https://fonts.google.com/specimen/Cabin" target="_blank">
          <span className="decoration-solid underline" href="https://fonts.google.com/specimen/Cabin" target="_blank">
            Google Font Download
          </span>
        </a>
      </p>
      <p className="leading-[normal] relative shrink-0 text-[112px]">Ag</p>
    </div>
  );
}

function Typeface() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Lustria:Regular',sans-serif] gap-[64px] items-start min-h-px min-w-px not-italic relative text-[#181d27]" data-name="Typeface">
      <Text />
      <p className="leading-[60px] relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br aria-hidden="true" />
        abcdefghijklmnopqrstuvwxyz
        <br aria-hidden="true" />
        {`0123456789 !@#$%^&*()`}
      </p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#181d27] text-[20px] w-full">Regular</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font weight: 400
      </p>
    </div>
  );
}

function Weight() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Weight">
      <p className="font-['Lustria:Regular',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] whitespace-nowrap">Aa</p>
      <TextAndSupportingText />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#181d27] text-[20px] w-full">Medium</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font weight: 500
      </p>
    </div>
  );
}

function Weight1() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Weight">
      <p className="font-['Lustria:Medium',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] whitespace-nowrap">Aa</p>
      <TextAndSupportingText1 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#181d27] text-[20px] w-full">Semibold</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font weight: 600
      </p>
    </div>
  );
}

function Weight2() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Weight">
      <p className="font-['Lustria:Semibold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] whitespace-nowrap">Aa</p>
      <TextAndSupportingText2 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#181d27] text-[20px] w-full">Bold</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font weight: 700
      </p>
    </div>
  );
}

function Weight3() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Weight">
      <p className="font-['Lustria:Bold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] whitespace-nowrap">Aa</p>
      <TextAndSupportingText3 />
    </div>
  );
}

function Weights() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[536px]" data-name="Weights">
      <Weight />
      <Weight1 />
      <Weight2 />
      <Weight3 />
    </div>
  );
}

function TypefaceAndWeights() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Typeface and weights">
      <Typeface />
      <Weights />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display 2xl
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 72px / 4.5rem | Line height: 90px / 5.625rem | Letter spacing: -2%
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#181d27] text-[72px] tracking-[-1.44px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Lustria:Regular',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[90px] mb-[72px]">Display 2xl</p>
        <p className="leading-[90px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Medium',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[90px] mb-[72px]">Display 2xl</p>
        <p className="leading-[90px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Semibold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[90px] mb-[72px]">Display 2xl</p>
        <p className="leading-[90px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Bold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[90px] mb-[72px]">Display 2xl</p>
        <p className="leading-[90px]">Bold</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display xl
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 60px / 3.75rem | Line height: 72px / 4.5rem | Letter spacing: -2%
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Lustria:Regular',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[72px] mb-[60px]">Display xl</p>
        <p className="leading-[72px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Medium',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[72px] mb-[60px]">Display xl</p>
        <p className="leading-[72px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Semibold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[72px] mb-[60px]">Display xl</p>
        <p className="leading-[72px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Bold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[72px] mb-[60px]">Display xl</p>
        <p className="leading-[72px]">Bold</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display lg
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 48px / 3rem | Line height: 60px / 3.75rem | Letter spacing: -2%
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Lustria:Regular',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[60px] mb-[48px]">Display lg</p>
        <p className="leading-[60px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Medium',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[60px] mb-[48px]">Display lg</p>
        <p className="leading-[60px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Semibold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[60px] mb-[48px]">Display lg</p>
        <p className="leading-[60px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Bold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[60px] mb-[48px]">Display lg</p>
        <p className="leading-[60px]">Bold</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display md
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 36px / 2.25rem | Line height: 44px / 2.75rem | Letter spacing: -2%
      </p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Lustria:Regular',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[44px] mb-[36px]">Display md</p>
        <p className="leading-[44px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Medium',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[44px] mb-[36px]">Display md</p>
        <p className="leading-[44px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Semibold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[44px] mb-[36px]">Display md</p>
        <p className="leading-[44px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Bold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[44px] mb-[36px]">Display md</p>
        <p className="leading-[44px]">Bold</p>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display sm
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 30px / 1.875rem | Line height: 38px / 2.375rem
      </p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#181d27] text-[30px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Lustria:Regular',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[38px] mb-[30px]">Display sm</p>
        <p className="leading-[38px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Medium',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[38px] mb-[30px]">Display sm</p>
        <p className="leading-[38px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Semibold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[38px] mb-[30px]">Display sm</p>
        <p className="leading-[38px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Lustria:Bold',sans-serif] min-h-px min-w-px relative">
        <p className="leading-[38px] mb-[30px]">Display sm</p>
        <p className="leading-[38px]">Bold</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Display xs
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 24px / 1.5rem | Line height: 32px / 2rem
      </p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[24px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-[24px]">Display xs</p>
        <p className="leading-[32px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-[24px]">Display xs</p>
        <p className="leading-[32px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[32px] mb-[24px]">Display xs</p>
        <p className="leading-[32px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-[24px]">Display xs</p>
        <p className="leading-[32px]">Bold</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text xl
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 20px / 1.25rem | Line height: 30px / 1.875rem
      </p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[20px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] mb-[20px]">Text xl</p>
        <p className="leading-[30px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] mb-[20px]">Text xl</p>
        <p className="leading-[30px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[30px] mb-[20px]">Text xl</p>
        <p className="leading-[30px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] mb-[20px]">Text xl</p>
        <p className="leading-[30px]">Bold</p>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text lg
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 18px / 1.125rem | Line height: 28px / 1.75rem
      </p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[18px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] mb-[18px]">Text lg</p>
        <p className="leading-[28px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] mb-[18px]">Text lg</p>
        <p className="leading-[28px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[28px] mb-[18px]">Text lg</p>
        <p className="leading-[28px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] mb-[18px]">Text lg</p>
        <p className="leading-[28px]">Bold</p>
      </div>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text md
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 16px / 1rem | Line height: 24px / 1.5rem
      </p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[16px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-[16px]">Text md</p>
        <p className="leading-[24px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-[16px]">Text md</p>
        <p className="leading-[24px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[24px] mb-[16px]">Text md</p>
        <p className="leading-[24px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-[16px]">Text md</p>
        <p className="leading-[24px]">Bold</p>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text sm
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 14px / 0.875rem | Line height: 20px / 1.25rem
      </p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[14px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-[14px]">Text sm</p>
        <p className="leading-[20px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-[14px]">Text sm</p>
        <p className="leading-[20px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[20px] mb-[14px]">Text sm</p>
        <p className="leading-[20px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-[14px]">Text sm</p>
        <p className="leading-[20px]">Bold</p>
      </div>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex items-start justify-between pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Text xs
      </p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Font size: 12px / 0.75rem | Line height: 18px / 1.125rem
      </p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[0] relative shrink-0 text-[#181d27] text-[12px] w-full" data-name="Row">
      <div className="flex-[1_0_0] font-['Cabin:Regular',sans-serif] font-normal min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-[12px]">Text xs</p>
        <p className="leading-[18px]">Regular</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Medium',sans-serif] font-medium min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-[12px]">Text xs</p>
        <p className="leading-[18px]">Medium</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Semibold',sans-serif] min-h-px min-w-px not-italic relative">
        <p className="leading-[18px] mb-[12px]">Text xs</p>
        <p className="leading-[18px]">Semibold</p>
      </div>
      <div className="flex-[1_0_0] font-['Cabin:Bold',sans-serif] font-bold min-h-px min-w-px relative" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] mb-[12px]">Text xs</p>
        <p className="leading-[18px]">Bold</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative w-full">
        <TypefaceAndWeights />
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header1 />
          <Row />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header2 />
          <Row1 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header3 />
          <Row2 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header4 />
          <Row3 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header5 />
          <Row4 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header6 />
          <Row5 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header7 />
          <Row6 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header8 />
          <Row7 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header9 />
          <Row8 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header10 />
          <Row9 />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="_Type scale base">
          <Header11 />
          <Row10 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
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
      <Text1 />
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

function Content1() {
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

export default function Typography() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Typography">
      <div className="bg-white relative shrink-0 w-full" data-name="Design system header">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Content />
        </div>
      </div>
      <Section />
      <div className="bg-white min-w-[1600px] relative shrink-0 w-full" data-name="Design system footer">
        <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[32px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}