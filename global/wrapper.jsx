import { cn } from "@/lib/utils";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-4 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;