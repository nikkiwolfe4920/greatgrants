import svgPaths from "./svg-gm63a4bvew";
type BreadcrumbButtonBaseProps = {
  className?: string;
  current?: boolean;
  icon?: boolean;
  state?: "Default" | "Hover" | "Focused";
  type?: "Button" | "Text";
};

function BreadcrumbButtonBase({ className, current = false, icon = true, state = "Default", type = "Text" }: BreadcrumbButtonBaseProps) {
  const isNotCurrentAndTextAndIconAndDefault = !current && type === "Text" && icon && state === "Default";
  return (
    <div className={className || `content-stretch flex relative ${!current && type === "Button" && icon && state === "Default" ? "items-start p-[4px] rounded-[6px]" : type === "Button" && icon && (state === "Hover" || (current && state === "Default")) ? "bg-[#fafafa] items-start p-[4px] rounded-[6px]" : type === "Text" && icon && ["Hover", "Default"].includes(state) ? "items-start" : current && type === "Button" && icon && state === "Focused" ? "bg-[#fafafa] items-start overflow-clip p-[4px] rounded-[6px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]" : !current && type === "Button" && icon && state === "Focused" ? "bg-[rgba(255,255,255,0)] items-start overflow-clip p-[4px] rounded-[6px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]" : type === "Text" && icon && state === "Focused" ? "bg-[rgba(255,255,255,0)] items-start overflow-clip rounded-[4px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]" : !current && type === "Button" && !icon && state === "Default" ? "items-center justify-center px-[8px] py-[4px] rounded-[6px]" : type === "Button" && !icon && (state === "Hover" || (current && state === "Default")) ? "bg-[#fafafa] items-center justify-center px-[8px] py-[4px] rounded-[6px]" : type === "Text" && !icon && ["Hover", "Default"].includes(state) ? "items-center justify-center" : current && type === "Button" && !icon && state === "Focused" ? "bg-[#fafafa] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[6px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]" : !current && type === "Button" && !icon && state === "Focused" ? "bg-[rgba(255,255,255,0)] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[6px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]" : "bg-[rgba(255,255,255,0)] items-center justify-center overflow-clip rounded-[4px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#15b79e]"}`}>
      {!icon && (
        <p className={`leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${current && type === "Text" && !icon && state === "Hover" ? 'font-["Cabin:SemiBold",sans-serif] font-semibold text-[#107569]' : !icon && state === "Hover" && ((!current && type === "Text") || type === "Button") ? 'font-["Cabin:SemiBold",sans-serif] font-semibold text-[#414651]' : current && type === "Button" && !icon && ["Focused", "Default"].includes(state) ? 'font-["Cabin:Semibold",sans-serif] text-[#414651]' : current && type === "Text" && !icon && ["Focused", "Default"].includes(state) ? 'font-["Cabin:Semibold",sans-serif] text-[#107569]' : 'font-["Cabin:Semibold",sans-serif] text-[#717680]'}`} style={!icon && state === "Hover" ? { fontVariationSettings: "'wdth' 100" } : undefined}>
          Projects
        </p>
      )}
      {icon && (
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="home-line">
          <div className="absolute inset-[9.45%_12.5%_12.5%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.34%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotCurrentAndTextAndIconAndDefault ? "0 0 16.6669 17.2776" : "0 0 20.0003 20.7331"}>
                <path d={isNotCurrentAndTextAndIconAndDefault ? svgPaths.p355a1380 : svgPaths.p1b0ddd00} id="Icon" stroke={isNotCurrentAndTextAndIconAndDefault ? "var(--stroke-0, #A4A7AE)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isNotCurrentAndTextAndIconAndDefault ? "1.66667" : "2"} />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BreadcrumbsChevronTextDesktop({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center relative"} data-name="Breadcrumbs/Chevron/Text/Desktop">
      <BreadcrumbButtonBase className="content-stretch flex items-start relative shrink-0" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Settings</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">...</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#107569] text-[14px] whitespace-nowrap">Team</p>
      </div>
    </div>
  );
}