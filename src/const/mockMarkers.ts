import { EventCardProps } from '@/components/EventCard'
import { v4 as uuidv4 } from 'uuid'

export enum MARKER_TYPE {
  CONSTRUCTION = 'construction',
  ACCIDENT = 'accident',
  EVENT = 'event',
  DELAYED = 'delayed',
}

export const mockMarkers: Array<EventCardProps & { id: string }> = [
  // <!-- Construction -->
  {
    id: uuidv4(),
    latitude: 13.696611009064362,
    longitude: 100.48323866823925,
    locationName: 'ถนนสมเด็จพระเจ้าตากสิน ซ.สมเด็จพระเจ้าตากสิน 39',
    date: '8 - 30 กันยายน 2566',
    eventName: 'ปิดเบี่ยงจราจร ฝั่งขาเข้า1 ช่องจราจร และฝั่งขาออก2 เลนกลาง',
    time: '22.00 น. - 05.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.70643348964725,
    longitude: 100.48573593940374,
    locationName: 'ถนนสมเด็จพระเจ้าตากสิน ซ.สมเด็จพระเจ้าตากสิน 39',
    date: '8 - 30 กันยายน 2566',
    eventName: 'ปิดเบี่ยงจราจร ฝั่งขาเข้า1 ช่องจราจร และฝั่งขาออก2 เลนกลาง',
    time: '22.00 น. - 05.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.752816689074626,
    longitude: 100.50456017159803,
    locationName:
      'ถนนมหาไชย บริเวณร้านแสงฟ้าแบตเตอรี่ ถึง วัดเทพธิดารามวรวิหาร',
    date: '17 สิงหาคม - 31 มกราคม 2567',
    eventName: 'ปิดเบี่ยงจราจรบนถนนมหาไชย',
    time: '22.00 ตลอด 24 ชั่วโมง',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.753576347236692,
    longitude: 100.50426025289752,
    locationName:
      'ถนนมหาไชย บริเวณร้านแสงฟ้าแบตเตอรี่ ถึง วัดเทพธิดารามวรวิหาร',
    date: '17 สิงหาคม - 31 มกราคม 2567',
    eventName: 'ปิดเบี่ยงจราจรบนถนนมหาไชย',
    time: '22.00 ตลอด 24 ชั่วโมง',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.641039211654594,
    longitude: 100.41200454114157,
    locationName:
      'ถนนกาญจนาภิเษก ช่วง กม.14+700 - กม.14+900 ทั้งด้านขาเข้าด่านเก็บค่าทางด่วนบางขุนเทียน และขาออกมุ่งหน้าบางแค ',
    date: '3 - 6 มิถุนายน 2566',
    eventName: 'ติดตั้งเครนก่อสร้างคานสะพาน ปิดเบี่ยงทางหลวงหมายเลข 9',
    time: '21.00 น. - 05.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.644890705313191,
    longitude: 100.40879955183232,
    locationName:
      'ถนนกาญจนาภิเษก ช่วง กม.14+700 - กม.14+900 ทั้งด้านขาเข้าด่านเก็บค่าทางด่วนบางขุนเทียน และขาออกมุ่งหน้าบางแค ',
    date: '3 - 6 มิถุนายน 2566 ',
    eventName: 'ติดตั้งเครนก่อสร้างคานสะพาน ปิดเบี่ยงทางหลวงหมายเลข 9',
    time: '21.00 น. - 05.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.640996568107482,
    longitude: 100.40990857988182,
    locationName: 'ถนนไปสมุทรสาคร และทางกลับรถไปสมุทรสาคร',
    date: '20 - 21 กันยายน 2566',
    eventName: 'ก่อสร้างคานขวาง ปิดจราจรทางออกด่านบางขุนเทียน 2 (ทางออก 3)',
    time: '22.00 น. - 05.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.653828574824141,
    longitude: 100.42539137614521,
    locationName:
      'ถนนพระราม 2 ระหว่างซอย 60 – 60/1  ฝั่งขาเข้ากรุงเทพฯ ระยะทางยาวประมาณ 200 เมตร',
    date: '7-13 ธ.ค. 2566',
    eventName: 'ทำการยกระดับสายส่งไฟฟ้าแรงสูงให้สูงขึ้น ขวาสุด 1 ช่องทาง',
    time: '09.00 – 18.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.788353438870411,
    longitude: 100.5134573087198,
    locationName: 'ถนนสามเสน บริเวณธนาคารกรุงศรีอยุธยา ถึงแยกศรีย่าน',
    date: '17 กันยายน - 31 ตุลาคม 2566',
    eventName:
      'ก่อสร้างกำแพงสถานี บริเวณสถานีศรีย่าน ปิดเบี่ยงเหลือ 2 ช่องจราจร',
    time: '22.00 ตลอด 24 ชั่วโมง',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.786050062145277,
    longitude: 100.5115962952267,
    locationName: 'ถนนสามเสน บริเวณธนาคารกรุงศรีอยุธยา ถึงแยกศรีย่าน',
    date: '17 กันยายน - 31 ตุลาคม 2566',
    eventName:
      'ก่อสร้างกำแพงสถานี บริเวณสถานีศรีย่าน ปิดเบี่ยงเหลือ 2 ช่องจราจร',
    time: '22.00 ตลอด 24 ชั่วโมง',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.805324803446727,
    longitude: 100.5749519960891,
    locationName:
      'ปิดเบี่ยงจราจรบนสะพานข้ามแยกรัชดา-ลาดพร้าว ฝั่งขาเข้าและฝั่งขาออก โดยให้ใช้ทางราบทดแทน',
    date: '18 พ.ย.-18 ธ.ค.64',
    eventName:
      'ติดตั้ง Temporary Support สำหรับการยกติดตั้งคานทางวิ่งชนิดเหล็กข้ามแยกรัชดา-ลาดพร้าว',
    time: '22.00-04.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.802435973667942,
    longitude: 100.5802945183943,
    locationName:
      'ปิดเบี่ยงช่องจราจร (ชั่วคราว) ทุกช่องทางบนถนนลาดพร้าวฝั่งขาออก และปิดเบี่ยงจราจร 3 ช่องทางซ้าย (ชิดทางเท้า) บนถนนรัชดาภิเษกฝั่งขาเข้า โดยผู้ใช้เส้นทางบนถนนรัชดาภิเษกฝั่งขาเข้าสามารถสัญจรได้ 1 ช่องทาง',
    date: '21 พ.ย.64',
    eventName:
      'ติดตั้ง Temporary Support สำหรับการยกติดตั้งคานทางวิ่งชนิดเหล็กข้ามแยกรัชดา-ลาดพร้าว',
    time: '22.00-04.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.802954314672345,
    longitude: 100.579043614681,
    locationName:
      'ปิดเบี่ยงช่องจราจรทุกช่องทางบนถนนลาดพร้าวฝั่งขาเข้า และปิดเบี่ยงจราจร 3 ช่องทางซ้าย (ชิดทางเท้า) บนถนนรัชดาภิเษกฝั่งขาเข้า โดยผู้ใช้เส้นทางบนถนนรัชดาภิเษกฝั่งขาเข้าสัญจรได้ 1 ช่องทาง',
    date: '24 พ.ย.64',
    eventName:
      'ติดตั้ง Temporary Support สำหรับการยกติดตั้งคานทางวิ่งชนิดเหล็กข้ามแยกรัชดา-ลาดพร้าว',
    time: '22.00-04.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  {
    id: uuidv4(),
    latitude: 13.804874301185912,
    longitude: 100.57504252702516,
    locationName:
      'ปิดเบี่ยงจราจรทุกช่องทาง บนถนนลาดพร้าวฝั่งขาออก บริเวณแยกรัชดา - ลาดพร้าว โดยผู้ใช้เส้นทางบนถนนลาดพร้าวที่ต้องการมุ่งหน้าพระราม 9 ให้ใช้ช่องทางซ้ายสุด เพื่อออกสู่ถนนรัชดาภิเษกฝั่งขาออก ',
    date: '23 พ.ย.64',
    eventName:
      'ติดตั้ง Temporary Support สำหรับการยกติดตั้งคานทางวิ่งชนิดเหล็กข้ามแยกรัชดา-ลาดพร้าว',
    time: '22.00-04.00 น.',
    type: MARKER_TYPE.CONSTRUCTION,
  },
  // <!-- Accident -->
  {
    id: uuidv4(),
    latitude: 13.831129139656175,
    longitude: 100.53704836258754,
    locationName: 'ถนนรัชดาภิเษก ขาออก เชิงทางลงสะพานข้ามแยกประชานุกูล',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถชนกัน',
    time: '17:36',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.761079194527445,
    longitude: 100.6383702933768,
    locationName: 'ซอยรามคำแหง 38 (ซอยกานดา)',
    date: '13 ก.ย. 66',
    eventName: 'เพลิงไหม้กองขยะ',
    time: '17:38',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.773473100383486,
    longitude: 100.64707556876638,
    locationName: 'ถนนนวมินทร์ ขาเข้า',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถจยย. เสียหลักล้ม มีผู้ได้รับบาดเจ็บ 1 ราย',
    time: '17:12',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.787699937912796,
    longitude: 100.44275063330407,
    locationName: 'ถนนราชพฤกษ์ ขาออก ก่อนถึง อุโมงค์นครอินทร์',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถชนกัน',
    time: '17:38',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.749034785441992,
    longitude: 100.59957041972578,
    locationName:
      'ถนนพัฒนาการ ขาเข้า มุ่งหน้าถนนเพชรบุรี ก่อนขึ้นสะพานข้ามแยกคลองตัน',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถชนกัน',
    time: '7:57',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.681626028377336,
    longitude: 100.49145261241728,
    locationName: 'ถนนสุขสวัสดิ์ ขาเข้า หน้าแม็คโคร ฟู้ดเซอร์วิส',
    date: '13 ก.ย. 66',
    eventName:
      'อุบัติเหตุ รถบรรทุก ชนกับ รถนั่งส่วนบุคคลกีดขวางการจราจร เลนขวา',
    time: '15:50',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.953338124106214,
    longitude: 100.62423977225039,
    locationName: 'ถนนลำลูกกา ขาออก',
    date: '13 ก.ย. 66',
    eventName: 'รถเทรลเลอร์ จอดเสีย กีดขวางจราจร',
    time: '15:55',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.718977250664157,
    longitude: 100.55881348173263,
    locationName: 'ถนนพระราม 3 ขาออก',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถชนกัน 3 คัน กีดขวางการจราจร เลนซ้าย',
    time: '16.27',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.811500952345025,
    longitude: 100.53474566639149,
    locationName: 'ถนนแจ้งวัฒนะ ขาเข้า บนสะพานข้ามคลองประปา',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ จยย. ชนกับ รถนั่งส่วนบุคคล กีดขวางการจราจร เลนซ้าย',
    time: '17:33',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.82012430545513,
    longitude: 100.44776096029676,
    locationName: 'ถนนราชพฤกษ์์ ขาออก หน้าโฮมโปร ราชพฤกษ์',
    date: '13 ก.ย. 66',
    eventName: 'อุบัติเหตุ รถปิคอัพชนกับราวกั้นเกาะกลาง กีดขวางช่องทางขวา',
    time: '17:26',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.783982695217654,
    longitude: 100.51679815641562,
    locationName: 'ซอยร่วมจิต2 เขตดุสิต',
    date: '13 ก.ย. 66',
    eventName: 'ไฟฟ้าลัดวงจรที่สายไฟฟ้า',
    time: '16:45',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.726575260270112,
    longitude: 100.59600176890667,
    locationName: 'ซอยปรีดีพนมยงศ์23 ช่วงปากซอย',
    date: '13 ก.ย. 66',
    eventName: 'รถบรรทุกตู้คอนเทนเนอร์ติดสายสื่อสาร',
    time: '16:24',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.827105463070666,
    longitude: 100.56829914604653,
    locationName:
      'ถนนพหลโยธิน ขาเข้า ช่วงกลางอุโมงค์รัชโยธิน มุ่งหน้าห้าแยกลาดพร้าว',
    date: '13 ก.ย. 66',
    eventName: 'ถุงผ้าขนาดใหญ่ตกหล่น กีดขวางทางขวา',
    time: '15:35',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.628532451122435,
    longitude: 100.52672622783706,
    locationName:
      'ทางพิเศษบางพลีสุขสวัสดิ์ จากด่านบางขุนเทียน มุ่งหน้าด่านบางครุ',
    date: '13 ก.ย. 66',
    eventName: 'รถปิคอัพจอดเสีย กีดขวางช่องทางซ้าย',
    time: '15:33',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.692884069210656,
    longitude: 100.50259855474614,
    locationName:
      'ถนนพระราม3 จากถนนตก มุ่งหน้าแยกเจริญราษฎร์ จุดเกิดเหตุถนนพระรามที่ 3 ซอย 7',
    date: '13 ก.ย. 66',
    eventName: 'รถปิคอัพจอดเสีย กีดขวางช่องทางขวา',
    time: '15:12',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.923295581875914,
    longitude: 100.62076477470109,
    locationName:
      'ถนนวิภาวดีรังสิต ขาออก ช่วงแยกฐานทัพอากาศ มุ่งหน้าอนุสรณ์สถาน ก่อนถึงอนุสรณ์สถานเล็กน้อย',
    date: '13 ก.ย. 66',
    eventName: 'ฝาท่อเหล็กเผยอ 3 จุด ในช่องทางกลางของทางหลัก',
    time: '15:06',
    type: MARKER_TYPE.ACCIDENT,
  },
  {
    id: uuidv4(),
    latitude: 13.814334943970938,
    longitude: 100.5148800410129,
    locationName: 'ถนนพระราม 6 ขาเข้า จากวัดสะพานสูง มุ่งหน้าถนนกำแพงเพชร',
    date: '13 ก.ย. 66',
    eventName: 'รถบัสติดอุโมงค์ลอดทางรถไฟ กีดขวาง 1 ช่องทางซ้าย',
    time: '14:50',
    type: MARKER_TYPE.ACCIDENT,
  },
  // <!-- Event -->
  {
    id: uuidv4(),
    latitude: 13.795686608561008,
    longitude: 100.51814031960986,
    locationName: 'อาคารรัฐสภา ไปจนถึงแยกเกียกกาย',
    date: '13 ก.ย. 66',
    eventName: 'แจ้งปิดถนนสามเสน รับมือสถานการณ์ชุมนุม (1)',
    time: 'ตั้งแต่เที่ยงคืนจนเสร็จสิ้นภารกิจ',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.797324297518637,
    longitude: 100.52139891093087,
    locationName: 'อาคารรัฐสภา ไปจนถึงแยกเกียกกาย',
    date: '13 ก.ย. 66',
    eventName: 'แจ้งปิดถนนสามเสน รับมือสถานการณ์ชุมนุม (2)',
    time: 'ตั้งแต่เที่ยงคืนจนเสร็จสิ้นภารกิจ',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.746720189367087,
    longitude: 100.53036976145873,
    locationName:
      'จัดขึ้นที่แยกปทุมวัน (เซ็นทรัลเวิลด์) ถนนพระราม 1 ฝั่งสยามพิวรรธน์ จนถึง บริเวณลานเซ็นทรัลเวิลด์ เฉพาะฝั่งขาออก สิ้นสุดที่แยกราชประสงค์ ถนนพระราม 1',
    date: '15 ก.ย. 66',
    eventName: 'Bangkok Pride 2023 (1)',
    time: 'เริ่มเวลา 14.00 น. เป็นต้นไป',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.746544340845437,
    longitude: 100.53915035392608,
    locationName:
      'จัดขึ้นที่แยกปทุมวัน (เซ็นทรัลเวิลด์) ถนนพระราม 1 ฝั่งสยามพิวรรธน์ จนถึง บริเวณลานเซ็นทรัลเวิลด์ เฉพาะฝั่งขาออก สิ้นสุดที่แยกราชประสงค์ ถนนพระราม 1',
    date: '15 ก.ย. 66',
    eventName: 'Bangkok Pride 2023 (2)',
    time: 'เริ่มเวลา 14.00 น. เป็นต้นไป',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.72059929,
    longitude: 100.5674471,
    locationName: 'Blueprint Livehouse กรุงเทพมหานคร, Thailand',
    date: '15 ก.ย. 66',
    eventName: 'Run For Cover Fest #8 : Bangkok ft EMONIGHT BKK',
    time: '18:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.75879448,
    longitude: 100.50358754,
    locationName: 'DECOMMUNE Bangkok, Thailand',
    date: '13 ก.ย. 66',
    eventName: 'Run For Cover : Taylor Swift Edition Bangkok',
    time: '17:00-23:30 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.91419135,
    longitude: 100.54644906,
    locationName: 'IMPACT Lakeside Muang Thong ThaniNonthaburi, Thailand',
    date: '13-15 ก.ย. 66',
    eventName:
      'Heineken Experience Silver Presents WHAT THE DUCK FAMILY & FRIENDS PARTY',
    time: '11:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.74362196,
    longitude: 100.53483335,
    locationName: 'คณะทันตแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    date: '13-15 ก.ย. 66',
    eventName: 'พิธีซ้อมพระราชทานปริญญาบัตร',
    time: '8:00-16:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.73943242,
    longitude: 100.53387849,
    locationName: 'คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    date: '15-17 ก.ย. 66',
    eventName: 'พิธีซ้อมพระราชทานปริญญาบัตร',
    time: '8:00-16:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.73691032,
    longitude: 100.53344933,
    locationName: 'คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    date: '15-17 ก.ย. 66',
    eventName: 'พิธีซ้อมพระราชทานปริญญาบัตร',
    time: '8:00-16:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.726387853082905,
    longitude: 100.50929865327721,
    locationName: 'ไอคอนสยาม',
    date: '13-17 ก.ย. 66 ',
    eventName: 'Van Gogh Alive Bangkok',
    time: '10:30 - 21:30 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.771357597971358,
    longitude: 100.55560608180424,
    locationName: 'ศาลาว่าการกรุงเทพมหานคร 2 ',
    date: '14 ก.ย. 66 ',
    eventName: 'พิธีบวงสรวงพระอินทร์ทรงช้างเอราวัณ',
    time: '8:00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.745152689146355,
    longitude: 100.54079030684603,
    locationName: 'อาคารเกษรเซ็นเตอร์, เกษรวิลเลจ',
    date: '13 ก.ย. 66 ',
    eventName: 'พิธีบวงสรวงพระแม่ลักษมี',
    time: '11.00-19.00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.778507267731316,
    longitude: 100.57336703899408,
    locationName: 'เทวาลัยพระพิฆเนศ-สี่แยกรัชดา ห้วยขวาง',
    date: '13 ก.ย. 66 ',
    eventName: 'พิธีทำบุญบวงสรวง พุทธาเทวาภิเษก',
    time: '11.00-19.00 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.75070266403267,
    longitude: 100.5319742663905,
    locationName: 'โรงแรม วี กรุงเทพฯ เอ็ม แกลเลอรี่',
    date: '13 ก.ย. 66 ',
    eventName: 'ซ้อมแผนดับเพลิง และซ้อมอพยพหนีไฟ',
    time: '14:30 - 16:30 น.',
    type: MARKER_TYPE.EVENT,
  },
  {
    id: uuidv4(),
    latitude: 13.754068995249503,
    longitude: 100.50182359522623,
    locationName: 'ศาลาว่าการกรุงเทพมหานคร',
    date: '17 ก.ย. 66',
    eventName: 'HACK BKK 2023',
    time: '09:00 - 15:30 น.',
    type: MARKER_TYPE.EVENT,
  },
  // <!-- Delayed -->
  {
    id: uuidv4(),
    latitude: 13.852510664966,
    longitude: 100.55282036666,
    locationName:
      'เขตจตุจักร งามวงศ์วานขาเข้า การไฟฟ้า ชุมชนวันเทวสุนทร วัดเทวสุนทร หมู่บ้านไพฑูรย์',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะล่าช้าเส้นทางที่ 3 ทะเบียน 62-0879 เลขข้าง 2683001 ',
    time: '23:00-7:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.751245496668,
    longitude: 100.52190789259,
    locationName:
      'ทิศเหนือติดคลองแสนแสบ ทิศใต้ติดถนนพระรามที่ 4 ทิศตะวันออกติดถนนบรรทัดทอง ทิศตะวันออกติดถนนพระรามที่ 6',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะเส้นทางเดินรถที่ 2 ทะเบียน 62-0916 เลขข้าง 0583037',
    time: '23:00-7:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.731104806377,
    longitude: 100.65202914854,
    locationName:
      'บริเวณถนนพัฒนาการ (ฝั่งซ้าย) ตั้งแต่คลองบึง ถึงซอยพัฒนาการ 63 หมู่บ้านเมืองทอง 2/2',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะเส้นทางที่ 1 ทะเบียน 60-9456 เลขข้าง 3471149',
    time: '02:00-10:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.797491741539,
    longitude: 100.53731892898,
    locationName:
      'ซอยพระรามหก (43) , ซอยพระรามหก (45) , ถนนกำแพงเพชร 5 (เลียบทางรถไฟ) , ซอยประดิพัทธ์ 1 , 3 , 7 , 9 , 11 , 13 , 15',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะเส้นทางที่ 1 ทะเบียน 61-8882 เลขข้าง 0879141',
    time: '04:00-12:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.753555670505,
    longitude: 100.51440717326,
    locationName:
      '๑. ถนนจักรพรรดิพงษ์ ตั้งแต่ถนนบำรุงเมืองถึงถนนดำรงรักษ์ ๒. ถนนบำรุงเมือง ตั้งแต่ถนนจักรพรรดิพงษ์ถึงซอยนาคบำรุง ๓. ซอยนาคบำรุง ตั้งแต่ถนนจักรพรรดิพงษ์ถึงถนนบำรุงเมือง ๔. ถนนซอยแยกต่าง ๆ',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะเส้นทางที่ 1  ทะเบียน 60-8561 เลขข้าง 0266051',
    time: '16:00-22:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.770265953634,
    longitude: 100.52641967243,
    locationName:
      'ถนนราชวิถีฝั่งเหนือ จากทางรถไฟสายเหนือถึงอนุสาวรีย์ชัยสมรภูมิ/ถนนพระราม 6 ทั้งสองฝั่งจากแยกตึกชัยถึงคลองสามเสน/ซอยสวนเงิน/วัดมะกอก',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะเส้นทางที่ 1  ทะเบียน 62-2618 เลขข้าง 3283131',
    time: '02:00-10:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.72094255608,
    longitude: 100.49313143266,
    locationName: 'เขตคลองสาน ซอยกรุงธนบุรี 2, 4, ชุมชนตอกขี้เถ้า',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะล่าช้าเส้นทางที่ 1 ทะเบียน 62-3138 เลขข้าง 1783176 ',
    time: '23:00-7:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.655873171177,
    longitude: 100.47259450523,
    locationName:
      'เขตทุ่งครุ  ริมถนนพุทธบูชา (ฝั่งเลขคี่) ตั้งแต่ซอยพุทธบูชา 31-39 ( ในซอย 31,31/1,33,33/1,33/2,35,35/1,37 และ 39) ม.วัชระธานี /วัดหลวงพ่อโอภาสี /ม.ทัศนีย์',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะล่าช้าเส้นทางที่ 4 ทะเบียน 62-1538 เลขข้าง 4980358',
    time: '04:00-13:00',
    type: MARKER_TYPE.DELAYED,
  },
  {
    id: uuidv4(),
    latitude: 13.725240859072,
    longitude: 100.61157430824,
    locationName:
      'ซอยอ่อนนุช 17 ตั้งแต่คลองโอ่งอ่าง ถึงสะพานราชสมบัติทั้งสองฝั่ง หมู่บ้านมานเพลส ซอยอ่อนนุช 17 แยก 1,3,5,7,9,11,12,12,15,16',
    date: '17 ก.ย. 66 ',
    eventName: 'รถเก็บขยะล่าช้าเส้นทางที่ 1 ทะเบียน 60-6514 เลขข้าง 3871069',
    time: '00:00-10:00',
    type: MARKER_TYPE.DELAYED,
  },
]
