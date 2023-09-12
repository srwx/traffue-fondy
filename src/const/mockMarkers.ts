import { EventCardProps } from '@/components/EventCard'

export const mockMarkers: Array<EventCardProps & { id: number }> = [
  {
    id: 1,
    latitude: 13.757112993789578,
    longitude: 100.50195707266758,
    locationName: 'อนุเสาวรีย์ประชาธิปไตย',
    date: '20 กันยายน 2566',
    eventName: 'วิ่งรอบอนุเสาวรีย์ประชาธิปไตย',
    time: '06:00 - 08:00',
    type: '/assets/markerIcons/event.svg',
  },
  {
    id: 2,
    latitude: 13.75358676850294,
    longitude: 100.50421733753426,
    locationName: 'วัดเทพธิดาราม',
    date: '25 กันยายน 2566',
    eventName: 'ทำบุญเสริมดวง',
    time: '08.00 เป็นต้นไป',
    type: '/assets/markerIcons/event.svg',
  },
  {
    id: 3,
    latitude: 13.747281945047954,
    longitude: 100.50224307600162,
    locationName: 'MRT สามยอด',
    date: '30 กันยายน 2566',
    eventName: 'พิธีเปิดรถไฟฟ้าสายสีน้ำเงิน สถานีสามยอด',
    time: '10.00 - 12.00',
    type: '/assets/markerIcons/event.svg',
  },
  {
    id: 4,
    latitude: 13.744031932879354,
    longitude: 100.48846545287874,
    locationName: 'วัดอรุณราชวราราม',
    date: '31 ธันวาคม 2566',
    eventName: 'สวดมนต์ข้ามปี',
    time: '23.50 เป็นต้นไป',
    type: '/assets/markerIcons/event.svg',
  },
]
