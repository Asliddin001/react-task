import React from "react";
import more from "/public/mock-imges/icons/more.svg";
import users from "/public/mock-imges/icons/table-users.svg";
import file from "/public/mock-imges/icons/table-file.svg";

export const Card = ({ data }) => {
  return (
    <>
      <div
        key={data.id}
        className="rounded-[4px] p-[12px] bg-[#fff] shadow-md flex gap-[28px]">
        <div>
          <div>
            <h3 className="text-[14px] font-semibold text-black">
              {data.jobTitle}
            </h3>
            <p className="text-[12px] truncate whitespace-nowrap font-roboto font-normal text-grey">
              {data.department}
            </p>
          </div>
          <div className="mt-[8px] mb-[12px]  flex items-center gap-2">
            <span className="py-[5px] px-2 rounded-[4px]  bg-violet-1 text-[11px] font-semibold text-violet">
              {data.priorityStatus}
            </span>
            <span className="flex gap-1 p-1 items-center rounded-[4px] border-[1px] border-white-3 text-[11px] font-medium text-black-1">
              <img src={users} alt="users" className="w-[16px] h-[16px]" />
              {data.userCount}
            </span>
            <span className="flex gap-1 p-1 items-center rounded-[4px] border-[1px] border-white-3 text-[11px] font-medium text-black-1">
              <img src={file} alt="file" />
              {data.fileCount}
            </span>
          </div>
          <div className="">
            <span>
              <img
                src={data.recruiter.profileImage}
                alt="profile"
                className="w-[28px] h-[28px]"
              />
            </span>
            <div>
              <span className="overflow-hidden truncate text-[11px] font-normal text-grey-1">
                {data.recruiter.role}
              </span>
              <p className="overflow-hidden truncate text-[12px] font-mediumx text-black-1">
                {data.recruiter.name}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[20px]">
          <img src={more} alt="more" className="w-full" />
        </div>
      </div>
    </>
  );
};
