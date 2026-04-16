import svgPaths from "./svg-wcim5ptszv";

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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start max-w-[1024px] min-h-px min-w-px relative" data-name="Heading and supporting text">
      <p className="font-['Lustria:Semibold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] w-full">Color variables</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Color variables (Figma’s version of design tokens) store reusable values that can be applied to all kinds of design properties including fill and stroke colors. They help save time and effort when managing design systems by acting as a “single source of truth” while allowing designers to create multiple color modes.
      </p>
    </div>
  );
}

function HeadingAndResources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Heading and resources">
      <HeadingAndSupportingText />
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
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Text color</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-primary</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-primary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_on-brand</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-secondary</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_on-brand</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-tertiary</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-tertiary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-tertiary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_on-brand</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-quaternary</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-quaternary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_on-brand</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-white</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-disabled</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-placeholder</p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-placeholder</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-brand-primary</p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-brand-secondary</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-brand-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-brand-tertiary</p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-brand-tertiary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-error-primary</p>
    </div>
  );
}

function Badge20() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-warning-primary</p>
    </div>
  );
}

function Badge21() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-success-primary</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge1 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge2 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge3 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge4 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[144px] left-[32px] top-[-104px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.35%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 144.5">
                  <path d={svgPaths.p646f280} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge5 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge6 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge7 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[144px] left-[32px] top-[-104px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.35%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 144.5">
                  <path d={svgPaths.p646f280} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge8 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge9 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge10 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge11 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge12 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge13 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge14 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge15 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge16 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge17 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge18 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge19 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge20 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color() {
  return <div className="bg-[#181d27] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color />
    </div>
  );
}

function Badge22() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color1() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color1 />
    </div>
  );
}

function Badge23() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch1 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color2() {
  return <div className="bg-[#414651] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color2 />
    </div>
  );
}

function Badge24() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch2 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color3() {
  return (
    <div className="bg-[#252b37] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color3 />
    </div>
  );
}

function Badge25() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch3 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color4() {
  return <div className="bg-[#99f6e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color4 />
    </div>
  );
}

function Badge26() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch4 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-200</p>
    </div>
  );
}

function Color5() {
  return <div className="bg-[#535862] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color5 />
    </div>
  );
}

function Badge27() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch5 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color6() {
  return (
    <div className="bg-[#414651] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color6 />
    </div>
  );
}

function Badge28() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch6 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color7() {
  return <div className="bg-[#99f6e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color7 />
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch7 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-200</p>
    </div>
  );
}

function Color8() {
  return <div className="bg-[#717680] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color8 />
    </div>
  );
}

function Badge30() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch8 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color9() {
  return <div className="bg-[#5fe9d0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color9 />
    </div>
  );
}

function Badge31() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch9 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-300</p>
    </div>
  );
}

function Color10() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color10 />
    </div>
  );
}

function Badge32() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch10 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">text-white</p>
    </div>
  );
}

function Color11() {
  return <div className="bg-[#717680] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color11 />
    </div>
  );
}

function Badge33() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch11 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color12() {
  return <div className="bg-[#717680] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color12 />
    </div>
  );
}

function Badge34() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch12 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color13() {
  return <div className="bg-[#d5d7da] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch13() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color13 />
    </div>
  );
}

function Badge35() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch13 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color14() {
  return <div className="bg-[#134e48] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color14 />
    </div>
  );
}

function Badge36() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch14 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-900</p>
    </div>
  );
}

function Color15() {
  return (
    <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch15() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color15 />
    </div>
  );
}

function Badge37() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch15 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color16() {
  return <div className="bg-[#125d56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch16() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color16 />
    </div>
  );
}

function Badge38() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch16 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-800</p>
    </div>
  );
}

function Color17() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch17() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color17 />
    </div>
  );
}

function Badge39() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch17 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color18() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch18() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color18 />
    </div>
  );
}

function Badge40() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch18 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color19() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch19() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color19 />
    </div>
  );
}

function Badge41() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch19 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color20() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch20() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color20 />
    </div>
  );
}

function Badge42() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch20 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color21() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch21() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color21 />
    </div>
  );
}

function Badge43() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch21 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge22 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge23 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge24 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge25 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge26 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge27 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge28 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge29 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge30 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge31 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge32 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge33 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge34 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge35 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge36 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge37 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge38 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge39 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge40 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge41 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge42 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge43 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color22() {
  return <div className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch22() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color22 />
    </div>
  );
}

function Badge44() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch22 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color23() {
  return <div className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch23() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color23 />
    </div>
  );
}

function Badge45() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch23 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color24() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch24() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color24 />
    </div>
  );
}

function Badge46() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch24 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color25() {
  return (
    <div className="bg-[#ececed] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch25() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color25 />
    </div>
  );
}

function Badge47() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch25 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color26() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch26() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color26 />
    </div>
  );
}

function Badge48() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch26 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color27() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch27() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color27 />
    </div>
  );
}

function Badge49() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch27 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color28() {
  return (
    <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch28() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color28 />
    </div>
  );
}

function Badge50() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch28 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color29() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch29() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color29 />
    </div>
  );
}

function Badge51() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch29 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color30() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch30() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color30 />
    </div>
  );
}

function Badge52() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch30 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color31() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch31() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color31 />
    </div>
  );
}

function Badge53() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch31 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color32() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch32() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color32 />
    </div>
  );
}

function Badge54() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch32 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">text-white</p>
    </div>
  );
}

function Color33() {
  return <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch33() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color33 />
    </div>
  );
}

function Badge55() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch33 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color34() {
  return <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch34() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color34 />
    </div>
  );
}

function Badge56() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch34 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color35() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch35() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color35 />
    </div>
  );
}

function Badge57() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch35 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color36() {
  return <div className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch36() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color36 />
    </div>
  );
}

function Badge58() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch36 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color37() {
  return (
    <div className="bg-[#ececed] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch37() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color37 />
    </div>
  );
}

function Badge59() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch37 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color38() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch38() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color38 />
    </div>
  );
}

function Badge60() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch38 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color39() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch39() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color39 />
    </div>
  );
}

function Badge61() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch39 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color40() {
  return <div className="bg-[#f7f7f7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch40() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color40 />
    </div>
  );
}

function Badge62() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch40 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color41() {
  return <div className="bg-[#f97066] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch41() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color41 />
    </div>
  );
}

function Badge63() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch41 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-400</p>
    </div>
  );
}

function Color42() {
  return <div className="bg-[#fdb022] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch42() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color42 />
    </div>
  );
}

function Badge64() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch42 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-400</p>
    </div>
  );
}

function Color43() {
  return <div className="bg-[#47cd89] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch43() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color43 />
    </div>
  );
}

function Badge65() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch43 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-400</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge44 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge45 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge46 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge47 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge48 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge49 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge50 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge51 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge52 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge53 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge54 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge55 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge56 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge57 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge58 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge59 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge60 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge61 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge62 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge63 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge64 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge65 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Usage
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Primary text such as page headings.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  CTA sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Secondary text such as labels and section headings.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Secondary text when in hover state.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  CTA sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tertiary text such as supporting text and paragraph text.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tertiary text when in hover state.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Tertiary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  CTA sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Quaternary text for more subtle and lower-contrast text, such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  footer
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` column headings.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Quaternary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  footers
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Text that is always white, regardless of the mode.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default color for disabled text such as disabled `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` or `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">. This can be changed to gray-400, but gray-500 is higher contrast and more accessible.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default color for placeholder text such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input field
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` placeholders. This can be changed to gray-400, but gray-500 is more accessible because it is higher contrast.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`A more subtle (lower contrast) alternative placeholder text. Useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1106-66757" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1106-66757" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  verification code input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary brand text useful for headings (e.g. cards in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1393-7528" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1393-7528" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  pricing page headers
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary brand text for brand `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, as well as accented text, highlights, and subheadings (e.g. subheadings in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1390-58" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1390-58" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  blog post cards
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary brand text when in hover state (e.g. brand `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Tertiary brand text for lighter accented text and highlights (e.g. numbers in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1369-659" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1369-659" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metric cards
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative to tertiary brand text that is lighter in dark mode (e.g. numbers in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1369-659" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1369-659" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metric cards
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default error state semantic text color (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input field
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` error states.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Default warning state semantic text color.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Default success state semantic text color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Use text color variables to manage all text fill colors in your designs across light and dark modes. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content2 />
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Border color</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge66() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-primary</p>
    </div>
  );
}

function Badge67() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-secondary</p>
    </div>
  );
}

function Badge68() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge69() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-tertiary</p>
    </div>
  );
}

function Badge70() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-disabled</p>
    </div>
  );
}

function Badge71() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-disabled</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge72() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-brand</p>
    </div>
  );
}

function Badge73() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-brand</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge74() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-error</p>
    </div>
  );
}

function Badge75() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">border-error</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge66 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge67 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge68 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge69 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge70 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge71 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge72 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge73 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge74 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge75 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Color44() {
  return <div className="bg-[#d5d7da] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch44() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color44 />
    </div>
  );
}

function Badge76() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch44 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color45() {
  return <div className="bg-[#e9eaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch45() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color45 />
    </div>
  );
}

function Badge77() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch45 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color46() {
  return <div className="bg-[rgba(0,0,0,0.08)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch46() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color46 />
    </div>
  );
}

function Badge78() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch46 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">#000000 8%</p>
    </div>
  );
}

function Color47() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch47() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color47 />
    </div>
  );
}

function Badge79() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch47 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color48() {
  return <div className="bg-[#d5d7da] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch48() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color48 />
    </div>
  );
}

function Badge80() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch48 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color49() {
  return <div className="bg-[#e9eaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch49() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color49 />
    </div>
  );
}

function Badge81() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch49 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color50() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color50 />
    </div>
  );
}

function Badge82() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch50 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color51() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch51() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color51 />
    </div>
  );
}

function Badge83() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch51 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color52() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch52() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color52 />
    </div>
  );
}

function Badge84() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch52 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color53() {
  return <div className="bg-[#fda29b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch53() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color53 />
    </div>
  );
}

function Badge85() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch53 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-300</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge76 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge77 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge78 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge79 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge80 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge81 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge82 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge83 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge84 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge85 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color54() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch54() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color54 />
    </div>
  );
}

function Badge86() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch54 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color55() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch55() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color55 />
    </div>
  );
}

function Badge87() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch55 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color56() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch56() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color56 />
    </div>
  );
}

function Badge88() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch56 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color57() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch57() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color57 />
    </div>
  );
}

function Badge89() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch57 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color58() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch58() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color58 />
    </div>
  );
}

function Badge90() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch58 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color59() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch59() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color59 />
    </div>
  );
}

function Badge91() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch59 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color60() {
  return <div className="bg-[#2ed3b7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch60() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color60 />
    </div>
  );
}

function Badge92() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch60 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-400</p>
    </div>
  );
}

function Color61() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch61() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color61 />
    </div>
  );
}

function Badge93() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch61 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color62() {
  return <div className="bg-[#f97066] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch62() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color62 />
    </div>
  );
}

function Badge94() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch62 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-400</p>
    </div>
  );
}

function Color63() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch63() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color63 />
    </div>
  );
}

function Badge95() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch63 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge86 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge87 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge88 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge89 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge90 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge91 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge92 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge93 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge94 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge95 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Usage
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`High contrast borders. These are used for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-10171" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-10171" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  button groups
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63652" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63652" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  checkboxes
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Medium contrast borders. This is the most commonly used border color and is the default for most components (such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1175-101149" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1175-101149" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  file uploaders
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`), cards (such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1227-110587" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1227-110587" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  tables
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`), and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1252-126874" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1252-126874" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  content dividers
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative to secondary border that uses alpha transparency. This is used exclusively for floating menus such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1538-271137" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1538-271137" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input dropdowns
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1547-265723" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1547-265723" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  notifications
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` to create`}</span>
              <span className="font-['Inter:Regular',sans-serif] leading-[24px] not-italic text-[16px]">{` `}</span>
              <span className="leading-[24px] text-[16px]">sharper</span>
              <span className="font-['Inter:Regular',sans-serif] leading-[24px] not-italic text-[16px]">{` bottom border`}</span>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Low contrast borders useful for very subtle dividers and borders such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1062-46989" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1062-46989" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  line and bar chart
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` axis dividers.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default disabled border color for disabled states in components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  checkboxes
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`A more subtle (lower contrast) alternative for disabled borders such as disabled `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default brand border color. Useful for active states in components such as such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An brand border color that switches to gray when in dark mode. Useful for components such as brand-style variants of `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1130-89371" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1130-89371" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  banners
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1517-334473" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  footers
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default error state semantic border color. Useful for error states in components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1175-100366" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1175-100366" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  file uploaders
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`A more subtle (lower contrast) alternative for error state semantic borders such as error state `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge1 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Use border color variables to manage all stroke colors in your designs across light and dark modes. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content4 />
    </div>
  );
}

function TextAndBadge2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Foreground color</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge96() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-primary</p>
    </div>
  );
}

function Badge97() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-secondary</p>
    </div>
  );
}

function Badge98() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge99() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-tertiary</p>
    </div>
  );
}

function Badge100() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-tertiary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge101() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-quaternary</p>
    </div>
  );
}

function Badge102() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-quaternary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge103() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-white</p>
    </div>
  );
}

function Badge104() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-disabled</p>
    </div>
  );
}

function Badge105() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-disabled</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge106() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-brand-primary</p>
    </div>
  );
}

function Badge107() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-brand-primary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge108() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-brand-secondary</p>
    </div>
  );
}

function Badge109() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-brand-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge110() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-error-primary</p>
    </div>
  );
}

function Badge111() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-error-secondary</p>
    </div>
  );
}

function Badge112() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-warning-primary</p>
    </div>
  );
}

function Badge113() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-warning-secondary</p>
    </div>
  );
}

function Badge114() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-success-primary</p>
    </div>
  );
}

function Badge115() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fg-success-secondary</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge96 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge97 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge98 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge99 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge100 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge101 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge102 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge103 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge104 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge105 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge106 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge107 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge108 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge109 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge110 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge111 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge112 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge113 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge114 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge115 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color64() {
  return <div className="bg-[#181d27] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch64() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color64 />
    </div>
  );
}

function Badge116() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch64 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color65() {
  return <div className="bg-[#414651] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch65() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color65 />
    </div>
  );
}

function Badge117() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch65 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color66() {
  return (
    <div className="bg-[#252b37] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch66() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color66 />
    </div>
  );
}

function Badge118() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch66 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color67() {
  return <div className="bg-[#535862] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch67() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color67 />
    </div>
  );
}

function Badge119() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch67 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color68() {
  return (
    <div className="bg-[#414651] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch68() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color68 />
    </div>
  );
}

function Badge120() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch68 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color69() {
  return <div className="bg-[#a4a7ae] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch69() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color69 />
    </div>
  );
}

function Badge121() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch69 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color70() {
  return (
    <div className="bg-[#717680] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch70() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color70 />
    </div>
  );
}

function Badge122() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch70 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color71() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch71() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color71 />
    </div>
  );
}

function Badge123() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch71 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color72() {
  return <div className="bg-[#a4a7ae] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch72() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color72 />
    </div>
  );
}

function Badge124() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch72 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color73() {
  return <div className="bg-[#d5d7da] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch73() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color73 />
    </div>
  );
}

function Badge125() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch73 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color74() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch74() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color74 />
    </div>
  );
}

function Badge126() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch74 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color75() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch75() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color75 />
    </div>
  );
}

function Badge127() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch75 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color76() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch76() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color76 />
    </div>
  );
}

function Badge128() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch76 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color77() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch77() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color77 />
    </div>
  );
}

function Badge129() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch77 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color78() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch78() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color78 />
    </div>
  );
}

function Badge130() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch78 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color79() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch79() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color79 />
    </div>
  );
}

function Badge131() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch79 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color80() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch80() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color80 />
    </div>
  );
}

function Badge132() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch80 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color81() {
  return <div className="bg-[#f79009] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch81() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color81 />
    </div>
  );
}

function Badge133() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch81 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-500</p>
    </div>
  );
}

function Color82() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch82() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color82 />
    </div>
  );
}

function Badge134() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch82 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Color83() {
  return <div className="bg-[#17b26a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch83() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color83 />
    </div>
  );
}

function Badge135() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch83 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-500</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge116 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge117 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge118 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge119 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge120 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge121 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge122 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge123 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge124 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge125 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge126 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge127 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge128 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge129 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge130 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge131 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge132 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge133 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge134 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge135 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color84() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch84() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color84 />
    </div>
  );
}

function Badge136() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch84 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color85() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch85() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color85 />
    </div>
  );
}

function Badge137() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch85 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color86() {
  return (
    <div className="bg-[#ececed] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch86() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color86 />
    </div>
  );
}

function Badge138() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch86 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color87() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch87() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color87 />
    </div>
  );
}

function Badge139() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch87 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color88() {
  return (
    <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch88() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color88 />
    </div>
  );
}

function Badge140() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch88 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color89() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch89() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color89 />
    </div>
  );
}

function Badge141() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch89 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color90() {
  return (
    <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch90() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color90 />
    </div>
  );
}

function Badge142() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch90 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color91() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch91() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color91 />
    </div>
  );
}

function Badge143() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch91 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color92() {
  return <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch92() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color92 />
    </div>
  );
}

function Badge144() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch92 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color93() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch93() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color93 />
    </div>
  );
}

function Badge145() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch93 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color94() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch94() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color94 />
    </div>
  );
}

function Badge146() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch94 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color95() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch95() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color95 />
    </div>
  );
}

function Badge147() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch95 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color96() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch96() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color96 />
    </div>
  );
}

function Badge148() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch96 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color97() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch97() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color97 />
    </div>
  );
}

function Badge149() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch97 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color98() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch98() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color98 />
    </div>
  );
}

function Badge150() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch98 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color99() {
  return <div className="bg-[#f97066] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch99() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color99 />
    </div>
  );
}

function Badge151() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch99 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-400</p>
    </div>
  );
}

function Color100() {
  return <div className="bg-[#f79009] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch100() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color100 />
    </div>
  );
}

function Badge152() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch100 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-500</p>
    </div>
  );
}

function Color101() {
  return <div className="bg-[#fdb022] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch101() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color101 />
    </div>
  );
}

function Badge153() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch101 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-400</p>
    </div>
  );
}

function Color102() {
  return <div className="bg-[#17b26a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch102() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color102 />
    </div>
  );
}

function Badge154() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch102 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-500</p>
    </div>
  );
}

function Color103() {
  return <div className="bg-[#47cd89] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch103() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color103 />
    </div>
  );
}

function Badge155() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch103 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-400</p>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge136 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge137 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge138 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge139 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge140 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge141 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge142 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge143 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge144 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge145 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge146 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge147 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge148 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge149 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge150 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge151 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge152 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge153 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge154 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge155 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Usage
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Highest contrast non-text foreground elements such as icons.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              High contrast non-text foreground elements such as icons.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Secondary foreground elements when in hover state.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Medium contrast non-text foreground elements such as icons.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Tertiary foreground elements when in hover state.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Low contrast non-text foreground elements such as icons in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1054-13" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1054-13" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  help icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and icons used in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1538-271180" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1538-271180" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Quaternary foreground elements when in hover state, such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1054-13" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1054-13" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  help icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Foreground elements that are always white, regardless of the mode.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default color for disabled non-text foreground elements such as icons in disabled `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-9312" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-9312" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  button group buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-380429" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-380429" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input dropdown menu items
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`A more subtle (lower contrast) alternative for non-text disabled foreground elements such as disabled active `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  checkboxes
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3308-406033" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3308-406033" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  tag checkboxes
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`. `}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary brand color non-text foreground elements such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1085-57382" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1085-57382" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  progress bars
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative for primary brand color non-text foreground elements that switches to gray when in dark mode such as active `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  horizontal tabs
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary brand color non-text foreground elements such as accents and arrows in marketing site sections (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1316-3622" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1316-3622" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  hero header sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative for secondary brand color non-text foreground elements that switches to gray when in dark mode such as brand `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary error state color for non-text foreground elements such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary error state color for non-text foreground elements such as icons in error state `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and negative `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1560-266217" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1560-266217" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metrics item
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` charts and icons.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary warning state color for non-text foreground elements such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Secondary warning state color for non-text foreground elements.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary success state color for non-text foreground elements such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4843-410985" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary success state color for non-text foreground elements such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  button dots
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=19-1038" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=19-1038" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  avatar online indicator dots
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, and negative `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1560-266217" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1560-266217" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metrics item
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` charts and icons.`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge2 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Use foreground color variables to manage all non-text foreground elements in your designs across light and dark modes. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content6 />
    </div>
  );
}

function TextAndBadge3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Background color</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge156() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-primary</p>
    </div>
  );
}

function Badge157() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-primary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge158() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-primary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge159() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-primary-solid</p>
    </div>
  );
}

function Badge160() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-secondary</p>
    </div>
  );
}

function Badge161() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge162() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge163() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-secondary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge164() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-secondary-solid</p>
    </div>
  );
}

function Badge165() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-tertiary</p>
    </div>
  );
}

function Badge166() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-quaternary</p>
    </div>
  );
}

function Badge167() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-active</p>
    </div>
  );
}

function Badge168() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-disabled</p>
    </div>
  );
}

function Badge169() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-disabled</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge170() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-overlay</p>
    </div>
  );
}

function Badge171() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-primary</p>
    </div>
  );
}

function Badge172() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-primary</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge173() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-secondary</p>
    </div>
  );
}

function Badge174() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-solid</p>
    </div>
  );
}

function Badge175() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-solid</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge176() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-section</p>
    </div>
  );
}

function Badge177() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-brand-section</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_subtle</p>
    </div>
  );
}

function Badge178() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-error-primary</p>
    </div>
  );
}

function Badge179() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-error-secondary</p>
    </div>
  );
}

function Badge180() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-error-solid</p>
    </div>
  );
}

function Badge181() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-error-solid</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_hover</p>
    </div>
  );
}

function Badge182() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-warning-primary</p>
    </div>
  );
}

function Badge183() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-warning-secondary</p>
    </div>
  );
}

function Badge184() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-warning-solid</p>
    </div>
  );
}

function Badge185() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-success-primary</p>
    </div>
  );
}

function Badge186() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-success-secondary</p>
    </div>
  );
}

function Badge187() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">bg-success-solid</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge156 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge157 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge158 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[144px] left-[32px] top-[-104px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.35%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 144.5">
                  <path d={svgPaths.p646f280} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge159 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge160 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge161 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge162 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[144px] left-[32px] top-[-104px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.35%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 144.5">
                  <path d={svgPaths.p646f280} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge163 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[144px] left-[32px] top-[-104px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.35%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 144.5">
                  <path d={svgPaths.p646f280} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge164 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge165 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge166 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge167 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge168 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge169 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge170 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge171 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge172 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge173 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge174 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge175 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge176 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge177 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge178 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge179 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge180 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge181 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge182 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge183 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge184 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge185 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge186 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge187 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color104() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch104() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color104 />
    </div>
  );
}

function Badge188() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch104 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color105() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch105() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color105 />
    </div>
  );
}

function Badge189() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch105 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white</p>
    </div>
  );
}

function Color106() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch106() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color106 />
    </div>
  );
}

function Badge190() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch106 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color107() {
  return <div className="bg-[#0a0d12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch107() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color107 />
    </div>
  );
}

function Badge191() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch107 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-950</p>
    </div>
  );
}

function Color108() {
  return <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch108() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color108 />
    </div>
  );
}

function Badge192() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch108 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color109() {
  return <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch109() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color109 />
    </div>
  );
}

function Badge193() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch109 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color110() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch110() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color110 />
    </div>
  );
}

function Badge194() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch110 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color111() {
  return <div className="bg-[#fdfdfd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch111() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color111 />
    </div>
  );
}

function Badge195() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch111 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-25</p>
    </div>
  );
}

function Color112() {
  return <div className="bg-[#535862] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch112() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color112 />
    </div>
  );
}

function Badge196() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch112 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color113() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch113() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color113 />
    </div>
  );
}

function Badge197() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch113 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color114() {
  return <div className="bg-[#e9eaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch114() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color114 />
    </div>
  );
}

function Badge198() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch114 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color115() {
  return <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch115() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color115 />
    </div>
  );
}

function Badge199() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch115 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color116() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch116() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color116 />
    </div>
  );
}

function Badge200() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch116 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color117() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch117() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color117 />
    </div>
  );
}

function Badge201() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch117 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color118() {
  return <div className="bg-[#0a0d12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch118() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color118 />
    </div>
  );
}

function Badge202() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch118 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-950</p>
    </div>
  );
}

function Color119() {
  return <div className="bg-[#f0fdf9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch119() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color119 />
    </div>
  );
}

function Badge203() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch119 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-50</p>
    </div>
  );
}

function Color120() {
  return <div className="bg-[#f0fdf9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch120() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color120 />
    </div>
  );
}

function Badge204() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch120 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-50</p>
    </div>
  );
}

function Color121() {
  return <div className="bg-[#ccfbef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch121() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color121 />
    </div>
  );
}

function Badge205() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch121 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-100</p>
    </div>
  );
}

function Color122() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch122() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color122 />
    </div>
  );
}

function Badge206() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch122 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color123() {
  return (
    <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch123() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color123 />
    </div>
  );
}

function Badge207() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch123 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color124() {
  return <div className="bg-[#125d56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch124() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color124 />
    </div>
  );
}

function Badge208() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch124 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-800</p>
    </div>
  );
}

function Color125() {
  return <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch125() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color125 />
    </div>
  );
}

function Badge209() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch125 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color126() {
  return <div className="bg-[#fef3f2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch126() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color126 />
    </div>
  );
}

function Badge210() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch126 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-50</p>
    </div>
  );
}

function Color127() {
  return <div className="bg-[#fee4e2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch127() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color127 />
    </div>
  );
}

function Badge211() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch127 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-100</p>
    </div>
  );
}

function Color128() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch128() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color128 />
    </div>
  );
}

function Badge212() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch128 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color129() {
  return <div className="bg-[#b42318] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch129() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color129 />
    </div>
  );
}

function Badge213() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch129 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-700</p>
    </div>
  );
}

function Color130() {
  return <div className="bg-[#fffaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch130() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color130 />
    </div>
  );
}

function Badge214() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch130 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-50</p>
    </div>
  );
}

function Color131() {
  return <div className="bg-[#fef0c7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch131() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color131 />
    </div>
  );
}

function Badge215() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch131 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-100</p>
    </div>
  );
}

function Color132() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch132() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color132 />
    </div>
  );
}

function Badge216() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch132 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color133() {
  return <div className="bg-[#ecfdf3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch133() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color133 />
    </div>
  );
}

function Badge217() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch133 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-50</p>
    </div>
  );
}

function Color134() {
  return <div className="bg-[#dcfae6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch134() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color134 />
    </div>
  );
}

function Badge218() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch134 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-100</p>
    </div>
  );
}

function Color135() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch135() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color135 />
    </div>
  );
}

function Badge219() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch135 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge188 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge189 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge190 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge191 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge192 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge193 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge194 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge195 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge196 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge197 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge198 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge199 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge200 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge201 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge202 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge203 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge204 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge205 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge206 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge207 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge208 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge209 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge210 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge211 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge212 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge213 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge214 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge215 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge216 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge217 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge218 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge219 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color136() {
  return <div className="bg-[#0c0e12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch136() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color136 />
    </div>
  );
}

function Badge220() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch136 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950</p>
    </div>
  );
}

function Color137() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch137() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color137 />
    </div>
  );
}

function Badge221() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch137 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color138() {
  return (
    <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch138() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color138 />
    </div>
  );
}

function Badge222() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch138 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color139() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch139() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color139 />
    </div>
  );
}

function Badge223() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch139 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color140() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch140() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color140 />
    </div>
  );
}

function Badge224() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch140 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color141() {
  return <div className="bg-[#0c0e12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch141() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color141 />
    </div>
  );
}

function Badge225() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch141 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950</p>
    </div>
  );
}

function Color142() {
  return (
    <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch142() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color142 />
    </div>
  );
}

function Badge226() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch142 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color143() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch143() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color143 />
    </div>
  );
}

function Badge227() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch143 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color144() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch144() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color144 />
    </div>
  );
}

function Badge228() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch144 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color145() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch145() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color145 />
    </div>
  );
}

function Badge229() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch145 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color146() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch146() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color146 />
    </div>
  );
}

function Badge230() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch146 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color147() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch147() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color147 />
    </div>
  );
}

function Badge231() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch147 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color148() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch148() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color148 />
    </div>
  );
}

function Badge232() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch148 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color149() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch149() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color149 />
    </div>
  );
}

function Badge233() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch149 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color150() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch150() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color150 />
    </div>
  );
}

function Badge234() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch150 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color151() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch151() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color151 />
    </div>
  );
}

function Badge235() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch151 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color152() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch152() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color152 />
    </div>
  );
}

function Badge236() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch152 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color153() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch153() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color153 />
    </div>
  );
}

function Badge237() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch153 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color154() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch154() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color154 />
    </div>
  );
}

function Badge238() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch154 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color155() {
  return (
    <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Color">
      <div className="absolute left-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] size-[20px] top-[10px]" data-name="Cursor">
        <div className="absolute inset-[10.51%_9.39%_9.4%_15.32%]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0572 16.0185">
            <path clipRule="evenodd" d={svgPaths.pcbe6f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Outline" />
          </svg>
        </div>
        <div className="absolute inset-[14.26%_13.14%_13.1%_19.07%]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5576 14.5277">
            <path clipRule="evenodd" d={svgPaths.p2111b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Swatch155() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color155 />
    </div>
  );
}

function Badge239() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch155 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color156() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch156() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color156 />
    </div>
  );
}

function Badge240() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch156 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color157() {
  return <div className="bg-[#0c0e12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch157() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color157 />
    </div>
  );
}

function Badge241() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch157 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950</p>
    </div>
  );
}

function Color158() {
  return <div className="bg-[#55160c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch158() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color158 />
    </div>
  );
}

function Badge242() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch158 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-950</p>
    </div>
  );
}

function Color159() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch159() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color159 />
    </div>
  );
}

function Badge243() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch159 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color160() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch160() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color160 />
    </div>
  );
}

function Badge244() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch160 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color161() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch161() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color161 />
    </div>
  );
}

function Badge245() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch161 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color162() {
  return <div className="bg-[#4e1d09] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch162() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color162 />
    </div>
  );
}

function Badge246() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch162 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-950</p>
    </div>
  );
}

function Color163() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch163() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color163 />
    </div>
  );
}

function Badge247() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch163 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color164() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch164() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color164 />
    </div>
  );
}

function Badge248() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch164 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color165() {
  return <div className="bg-[#053321] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch165() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color165 />
    </div>
  );
}

function Badge249() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch165 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-950</p>
    </div>
  );
}

function Color166() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch166() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color166 />
    </div>
  );
}

function Badge250() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch166 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Color167() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch167() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color167 />
    </div>
  );
}

function Badge251() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch167 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge220 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge221 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge222 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge223 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge224 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge225 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge226 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge227 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge228 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge229 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge230 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge231 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge232 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge233 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge234 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge235 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge236 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge237 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge238 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge239 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge240 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge241 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge242 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge243 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge244 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge245 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge246 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge247 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge248 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge249 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge250 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge251 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Usage
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              The primary background color (white) used across all layouts and components.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative primary background color (white) that switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-secondary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary background hover color. This acts as the default hover state background color for components with white backgrounds (e.g. `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-380429" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-380429" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input dropdown menu items
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The primary dark background color used across layouts and components. This switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-secondary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode and is useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1052-489" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1052-489" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  tooltips
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1706-438373" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1706-438373" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  Text editor tooltips
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              The secondary background color used to create contrast against white backgrounds, such as website section backgrounds.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative secondary background color that switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-primary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode. Useful for components such as border-style `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  horizontal tabs
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary background hover color. Useful for hover states for components with gray-50 backgrounds such as active states (e.g `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1152-89220" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1152-89220" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  navigation items
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1150-16803" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1150-16803" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  date pickers
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">).</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative secondary background color that is slightly lighter and more subtle in light mode. This is useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1130-89371" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1130-89371" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  banners
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The secondary dark background color used across layouts and components. This is useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The tertiary background color used to create contrast against light backgrounds such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  toggles
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The quaternary background color used to create contrast against light backgrounds, such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1086-534" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1086-534" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  sliders
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1085-57382" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1085-57382" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  progress bars
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default active background color for components such as selected menu items in `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-377673" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3281-377673" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input dropdowns
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default disabled background color for components such as disabled primary `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  toggles
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative disabled background color that is more subtle. This is useful for components such as disabled `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1090-57817" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  input fields
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1097-63886" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  checkboxes
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default background color for `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4896-411056" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4896-411056" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  background overlays
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`. These are useful for overlay components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4057-415205" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=4057-415205" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  modals
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`. `}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The primary brand background color. Useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1254-137887" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1254-137887" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  check icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative primary brand background color that switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-secondary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode. Useful for components such as active `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1118-69893" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  horizontal tabs
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`The secondary brand background color. Useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default solid (dark) brand background color. Useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  toggles
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1242-996" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1242-996" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  messages
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Solid brand background color when in hover state. Useful for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-4208" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  toggles
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`This is the default dark brand color background used for website sections such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1365-198734" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  CTA sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1377-11884" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1377-11884" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  testimonial sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`. Switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-secondary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`An alternative brand section background color to provide contrast for website sections such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1360-3728" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1360-3728" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  FAQ sections
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`. Switches to `}</span>
              <span className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[24px] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                bg-primary
              </span>
              <span className="leading-[24px] text-[16px]">{` when in dark mode.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Primary error state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary error state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default solid (dark) error state background color for components such as `}</span>
              <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" target="_blank">
                <span className="[text-decoration-skip-ink:none] decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{`, `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1561-265493" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1561-265493" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metric items
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default solid (dark) error hover state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=3287-427074" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  buttons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Primary warning state background color for components.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary warning state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default solid (dark) warning state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Primary success state background color for components.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Secondary success state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span className="leading-[24px] text-[16px]">{`Default solid (dark) success state background color for components such as `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1102-5338" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  featured icons
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">{` and `}</span>
              <a className="cursor-pointer decoration-solid leading-[24px] text-[16px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1561-265493" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1561-265493" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
                  metric items
                </span>
              </a>
              <span className="leading-[24px] text-[16px]">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column12 />
      <Column13 />
      <Column14 />
      <Column15 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge3 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Use background color variables to manage all fill colors for elements in your designs across light and dark modes. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content8 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative w-full">
        <Content1 />
        <Content3 />
        <Content5 />
        <Content7 />
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

function Content9() {
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

export default function ColorVariables() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Color variables">
      <div className="bg-white relative shrink-0 w-full" data-name="Design system header">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Content />
        </div>
      </div>
      <Section />
      <div className="bg-white min-w-[1600px] relative shrink-0 w-full" data-name="Design system footer">
        <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[32px] relative w-full">
          <Content9 />
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}