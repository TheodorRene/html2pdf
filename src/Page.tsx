import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      className="
                w-[210mm]
                h-[295mm]
                border-2
                border-black
                bg-white
                shadow-2xl
                ml-2
                mt-2
                px-20
                py-10
                print:px-10
                print:py-5
                print:shadow-none
                print:ml-0
                print:mt-0
                "
    >
      {children}
    </div>
  );
};
export const PageWithoutPadding = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      className="
                w-[210mm]
                h-[297mm]
                border-2
                border-black
                bg-white
                shadow-2xl
                ml-2
                mt-2
                px-20
                py-10
                print:px-0
                print:py-0
                print:shadow-none
                print:ml-0
                print:mt-0
                "
    >
      {children}
    </div>
  );
};

export const BottomlessPage = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      className="
                w-[210mm]
                border-2
                border-black
                bg-white
                shadow-2xl 
                ml-2
                mt-2
                p-20
                print:p-10
                print:border-none
                print:shadow-none
                print:ml-0
                print:mt-0
                "
    >
      {children}
    </div>
  );
};
