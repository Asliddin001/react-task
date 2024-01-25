export const CardSection = ({ title, className, children }) => (
  <div
    className={`${className}  border-[1px] border-white-2 rounded-tl-[3px] rounded-tr-[3px]`}>
    <h2 className="bg-white-1 px-[11px] py-[9px]">{title}</h2>
    <div className="p-[12px] flex flex-col gap-[12px]">{children}</div>
  </div>
);
