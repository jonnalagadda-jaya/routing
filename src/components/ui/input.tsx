import React from "react";
import { User, Mail,Image, Phone, IdCardIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconType: string;
  inputType?: string; 
}

const IconInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconType, inputType = "text", ...props }, ref) => {
    function getIcon(iconName: string) {
      switch (iconName) {
        case "id":
          return <IdCardIcon className="h-7 w-7" />;
        case "name":
          return <User className="h-7 w-7" />;
        case "email":
          return <Mail className="h-7 w-7" />;
         case "image":
          return <Image className="h-7 w-7" />;  
        case "mbNo":
          return <Phone className="h-7 w-7" />;
        default:
          return null;
      }
    }

    return (
      <div className="relative flex items-center">
        <span className="absolute left-5 z-[900]">
          {getIcon(iconType)}
        </span>
        <input
          type={inputType} 
          className={cn(
            "flex h-16 w-[80vw] lg:w-[30vw] rounded-md border border-input bg-background px-20 text-2xl file:border-2 file:rounded-md file:mt-3 file:bg-transparent file:text-2xl file:font-medium placeholder: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

IconInput.displayName = "IconInput";

export { IconInput };
