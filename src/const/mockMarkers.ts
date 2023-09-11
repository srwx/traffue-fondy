import { EventCardProps } from '@/components/EventCard'

export const mockMarkers: Array<EventCardProps & { id: number }> = [
  {
    id: 1,
    latitude: 13.757112993789578,
    longitude: 100.50195707266758,
    locationName: 'อนุเสาวรีย์ประชาธิปไตย',
    date: '20 กันยายน 2566, 13.00-16.00',
    eventName: 'วิ่งรอบอนุเสาวรีย์ประชาธิปไตย',
  },
  {
    id: 2,
    latitude: 13.75358676850294,
    longitude: 100.50421733753426,
    locationName: 'วัดเทพธิดาราม',
    date: '25 กันยายน 2566, 08.00-12.00',
    eventName: 'ทำบุญเสริมดวง',
  },
  {
    id: 3,
    latitude: 13.747281945047954,
    longitude: 100.50224307600162,
    locationName: 'MRT สามยอด',
    date: '30 กันยายน 2566, 08.00-12.00',
    eventName: 'พิธีเปิดรถไฟฟ้าสายสีน้ำเงิน สถานีสามยอด',
  },
]
