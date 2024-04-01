import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  algin?: "start" | "center" | "end";
  sideOffset?: number;
  alginOffset?: number;
}

const Hint = ({
  label,
  children,
  side,
  algin,
  sideOffset,
  alginOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          className='text-white bg-black border-black'
          side={side}
          align={algin}
          sideOffset={sideOffset}
          alignOffset={alginOffset}
        >
          <p className='font-semibold capitalize'>
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;