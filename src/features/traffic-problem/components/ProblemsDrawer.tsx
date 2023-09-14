import { EventCardProps } from '@/components/EventCard'
import clsx from 'clsx'
import React from 'react'
import { Drawer } from 'vaul'
import ProblemCard from './ProblemCard'

interface ProblemsDrawerProps {
  problemList: Array<EventCardProps & { id: string }>
}

const ProblemsDrawer = ({ problemList }: ProblemsDrawerProps) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF7F2] text-secondary font-medium rounded-[36px] py-1 px-4 whitespace-nowrap">
          ดูปัญหาที่พบในเส้นทาง
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-10" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-20 h-[45vh]">
          <div className="pt-4 bg-[#F6F6F6] rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
          </div>
          <div
            className={clsx(
              'relative',
              'w-full h-full bg-[#F6F6F6] z-10',
              'flex flex-col gap-y-[10px] py-3 px-4'
            )}
          >
            <span className="text-primary text-sm font-medium">
              ปัญหาที่พบในเส้นทาง
            </span>
            {problemList.length > 0 ? (
              <div
                className={clsx(
                  '[&>*:not(:last-child)]:border-b-[1px] border-[#E9E9E9] h-full max-h-[calc(100%-30px)] overflow-y-auto',
                  'bg-white px-4 rounded-lg'
                )}
              >
                {problemList.map((problem) => (
                  <ProblemCard key={problem.id} {...problem} />
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex justify-center items-center text-[#7A7A7A] pt-10">
                ไม่พบปัญหาในเส้นทาง
              </div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default ProblemsDrawer
