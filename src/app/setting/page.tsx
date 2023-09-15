'use client'
import GrayButton from '@/components/GrayButton'
import Navbar from '@/components/Navbar'
import SwitchToggleButton from '@/components/SwitchToggleButton'
import { ChevronDownIcon } from '@/icons'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { bangkokDistrict } from '@/const/bangkokDistrict'

enum NOTIFICATION_FREQUENCY {
  ALL = 'ALL',
  ONCE_PER_DAY = 'ONCE_PER_DAY',
  ONCE_PER_WEEK = 'ONCE_PER_WEEK',
}

enum TOPIC_TYPE {
  TRAFFIC = 'รถติดจากงานอีเว้นท์',
  ROAD_CLOSED = 'การปิดถนน / ซ่อมถนนตามช่วงเวลา',
  GARBAGE_TRUCK = 'รถติดจากรถเก็บขยะ / รถฉีดน้า',
  ROAD_ACCIDENT = 'อุบัติเหตุบนถนน',
}

const SettingPage = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false)
  const [notificationFrequency, setNotificationFrequency] =
    useState<NOTIFICATION_FREQUENCY | null>(null)
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = useState<TOPIC_TYPE[]>([])

  useEffect(() => {
    if (isNotificationEnabled && !notificationFrequency) {
      setNotificationFrequency(NOTIFICATION_FREQUENCY.ALL)
    }

    if (!isNotificationEnabled) {
      setNotificationFrequency(null)
    }
  }, [isNotificationEnabled, notificationFrequency])

  return (
    <div className="relative max-h-screen">
      <div className="relative z-10">
        <Navbar />
        <div className="w-full p-4 flex flex-col gap-y-4">
          <Link
            href={'/map2'}
            className="text-[#686868] text-sm flex gap-x-1 items-center"
          >
            <ChevronDownIcon className="rotate-90" stroke="#686868" />
            <span>กลับหน้าหลัก</span>
          </Link>

          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              🔔 ตั้งค่าการแจ้งเตือนปัญหาจราจร
            </span>
            <span className="text-sm text-[#838383]">
              ระบบจะแจ้งเตือนไปยังแชท LINE OA
            </span>
          </div>

          {/* <!-- Notification enable/disable box --> */}
          <div
            className={clsx(
              'border-[1px] border-[#ECECEC] rounded-lg',
              'px-4 py-3 bg-white',
              'flex flex-col gap-y-2',
              'transition-all'
            )}
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-1">
                <span className="text-base text-primary">เปิดการแจ้งเตือน</span>
                <span className="text-[#838383] text-sm">
                  เปิดเพื่อรับแจ้งเตือนปัญหาจราจร
                </span>
              </div>
              <SwitchToggleButton
                toggleState={isNotificationEnabled}
                setToggleState={setIsNotificationEnabled}
              />
            </div>

            {/* <!-- District buttons --> */}
            {isNotificationEnabled && (
              <>
                <hr />
                <div className="flex flex-wrap gap-2">
                  <GrayButton
                    disabled={!isNotificationEnabled}
                    onClick={() => {
                      setSelectedDistricts([])
                    }}
                    active={selectedDistricts.length === 0}
                  >
                    {'ทั้งหมด'}
                  </GrayButton>
                  {bangkokDistrict.map((district) => (
                    <GrayButton
                      key={district}
                      disabled={!isNotificationEnabled}
                      onClick={() => {
                        if (selectedDistricts.includes(district)) {
                          setSelectedDistricts((prev) =>
                            prev.filter((d) => d !== district)
                          )
                          return
                        } else {
                          setSelectedDistricts((prev) => [...prev, district])
                          return
                        }
                      }}
                      active={selectedDistricts.includes(district)}
                    >
                      {district}
                    </GrayButton>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* <!-- Topics setting box --> */}
          {isNotificationEnabled && (
            <div
              className={clsx(
                'border-[1px] border-[#ECECEC] rounded-lg',
                'px-4 py-3 bg-white',
                'flex flex-col gap-y-2',
                'transition-all'
              )}
            >
              <div className="flex flex-col gap-y-1">
                <span className="text-base text-primary">
                  เปิดการแจ้งเตือนรายเรื่อง
                </span>
                <span className="text-[#838383] text-sm">
                  กรุณาเลือกเรื่องที่ต้องการรับแจ้งเตือน
                </span>
              </div>
              <hr />
              <div className="flex flex-wrap gap-2">
                <GrayButton
                  disabled={!isNotificationEnabled}
                  active={selectedTopics.length === 0}
                  onClick={() => setSelectedTopics([])}
                >
                  ทั้งหมด
                </GrayButton>
                {Object.values(TOPIC_TYPE).map((topic) => (
                  <GrayButton
                    key={topic}
                    active={selectedTopics.includes(topic)}
                    onClick={() => {
                      if (selectedTopics.includes(topic)) {
                        setSelectedTopics((prev) =>
                          prev.filter((d) => d !== topic)
                        )
                        return
                      } else {
                        setSelectedTopics((prev) => [...prev, topic])
                        return
                      }
                    }}
                  >
                    {topic}
                  </GrayButton>
                ))}
              </div>
            </div>
          )}

          {/* <!-- Frequency setting box --> */}
          <div
            className={clsx(
              'border-[1px] border-[#ECECEC] rounded-lg',
              'px-4 py-3 bg-white',
              'flex flex-col gap-y-2'
            )}
          >
            <span
              className={clsx('text-base text-primary', {
                'opacity-30': !isNotificationEnabled,
              })}
            >
              ตั้งค่าการความถี่ในการแจ้งเตือน
            </span>
            <div className="space-x-2">
              <GrayButton
                disabled={!isNotificationEnabled}
                active={notificationFrequency === NOTIFICATION_FREQUENCY.ALL}
                onClick={() =>
                  setNotificationFrequency(NOTIFICATION_FREQUENCY.ALL)
                }
              >
                ทั้งหมด
              </GrayButton>
              <GrayButton
                disabled={!isNotificationEnabled}
                active={
                  notificationFrequency === NOTIFICATION_FREQUENCY.ONCE_PER_DAY
                }
                onClick={() =>
                  setNotificationFrequency(NOTIFICATION_FREQUENCY.ONCE_PER_DAY)
                }
              >
                1 ครั้ง / วัน
              </GrayButton>
              <GrayButton
                disabled={!isNotificationEnabled}
                active={
                  notificationFrequency === NOTIFICATION_FREQUENCY.ONCE_PER_WEEK
                }
                onClick={() =>
                  setNotificationFrequency(NOTIFICATION_FREQUENCY.ONCE_PER_WEEK)
                }
              >
                1 ครั้ง / สัปดาห์
              </GrayButton>
            </div>
          </div>
        </div>
      </div>

      <Image
        width={1170}
        height={1497}
        src={'/images/background/city.png'}
        alt="bg"
        className={clsx('absolute left-0 z-0 opacity-10 md:hidden', {
          '-bottom-[calc(100dvh-100%)]': !isNotificationEnabled,
          '-bottom-[calc(100dvh-55%)]': isNotificationEnabled,
        })}
      />
    </div>
  )
}

export default SettingPage
