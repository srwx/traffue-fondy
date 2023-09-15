import { AI_PROBLEM_DETECTION_TYPE } from '@/const/mockAiProblemDetection'
import {
  ObstructionIcon,
  RoadHoleIcon,
  TrafficJamIcon,
} from '@/icons/ai-detection-icon-types'

export const getAiProblemDetectionIcon = (type: AI_PROBLEM_DETECTION_TYPE) => {
  switch (type) {
    case AI_PROBLEM_DETECTION_TYPE.OBSTRUCTION:
      return <ObstructionIcon />
    case AI_PROBLEM_DETECTION_TYPE.ROAD_HOLE:
      return <RoadHoleIcon />
    case AI_PROBLEM_DETECTION_TYPE.TRAFFIC_JAM:
      return <TrafficJamIcon />
  }
}
