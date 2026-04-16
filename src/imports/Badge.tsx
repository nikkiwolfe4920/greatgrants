import svgPaths from "./svg-xuw69sjy2";

export default function Badge() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#717bbc] gap-[4px] items-center pl-[8px] pr-[10px] py-[2px] relative rounded-[9999px] size-full to-[#3e4784]" data-name="Badge">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="alert-triangle">
        <div className="absolute inset-[10.4%_7.24%_14.58%_7.23%]" data-name="Icon">
          <div className="absolute inset-[-8.33%_-7.31%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7634 10.5021">
              <path d={svgPaths.p3bd16180} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3/7 Done
      </p>
    </div>
  );
}