import Button from '@/components/Button'
import { AnnoucementIcon, TraffueFondyIcon, UserIcon } from '@/icons'
import clsx from 'clsx'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={clsx('min-h-[100dvh] relative', 'bg-[#F0F0F0]')}>
      <div className="relative w-full flex flex-col gap-y-5 items-center pt-20 z-20">
        <TraffueFondyIcon width={150} height={100} className="mb-8" />
        <Button className="w-full bg-secondary max-w-[276px]">
          <div className="flex items-center gap-x-2">
            <UserIcon />
            <span className="text-white text-base">สำหรับประชาชน</span>
          </div>
        </Button>
        <Button className="w-full bg-primary max-w-[276px]">
          <div className="flex items-center gap-x-2">
            <AnnoucementIcon />
            <span className="text-white text-base">สำหรับเจ้าหน้าที่</span>
          </div>
        </Button>
      </div>

      <Image
        width={1170}
        height={1497}
        src={'/images/background/city.png'}
        alt="bg"
        className="absolute -bottom-[calc(100dvh-90%)] left-0 md:hidden"
      />
    </div>
  )
}
