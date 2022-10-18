import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function Root({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300 ')
      }
    >
      {children}
    </div>
  )
}

function Icon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

function Input(props: TextInputInputProps) {
  return (
    <input 
        type='text'  
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        {...props}
      />
  )
}

export const TextInput = {
  Root: Root,
  Input: Input,
  Icon: Icon
}