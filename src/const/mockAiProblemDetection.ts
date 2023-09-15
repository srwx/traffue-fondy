import { v4 as uuidv4 } from 'uuid'

export enum AI_PROBLEM_DETECTION_TYPE {
  TRAFFIC_JAM = 'trafficJam',
  ROAD_HOLE = 'hole',
  OBSTRUCTION = 'obstruction',
}

export interface AiProblemDetectionProps {
  id: string
  type: AI_PROBLEM_DETECTION_TYPE
  name: string
}

export const mockAiProblemDetectionv1: AiProblemDetectionProps[] = [
  {
    id: uuidv4(),
    type: AI_PROBLEM_DETECTION_TYPE.OBSTRUCTION,
    name: 'ถนนมีสิ่งกีดขวาง',
  },
  {
    id: uuidv4(),
    type: AI_PROBLEM_DETECTION_TYPE.ROAD_HOLE,
    name: 'ถนนเป็นหลุมบ่อ',
  },
]

export const mockAiProblemDetectionv2: AiProblemDetectionProps[] = [
  {
    id: uuidv4(),
    type: AI_PROBLEM_DETECTION_TYPE.TRAFFIC_JAM,
    name: 'รถติด',
  },
  {
    id: uuidv4(),
    type: AI_PROBLEM_DETECTION_TYPE.ROAD_HOLE,
    name: 'ถนนเป็นหลุมบ่อ',
  },
]
