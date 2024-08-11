/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

interface AppFormInterface{
    children: ReactNode;
    error: any;
}
function AppFormInput({children, error}:AppFormInterface) {
  return (
    <div className="h-[10vh]">
        {children}
        <label className='text-destructive text-2xl h-7'>{error}</label>
    </div>
  )
}

export default AppFormInput