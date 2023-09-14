import ConstructionMarker from '@/components/markers/ConstructionMarker'
import DelayMarker from '@/components/markers/DelayMarker'
import EventMarker from '@/components/markers/EventMarker'
import RoadAccidentMarker from '@/components/markers/RoadAccidentMarker'
import { MARKER_TYPE } from '@/const/mockMarkers'

export const getMarkerType = (type: MARKER_TYPE) => {
  switch (type) {
    case MARKER_TYPE.ACCIDENT:
      return <RoadAccidentMarker />
    case MARKER_TYPE.CONSTRUCTION:
      return <ConstructionMarker />
    case MARKER_TYPE.DELAYED:
      return <DelayMarker />
    case MARKER_TYPE.EVENT:
      return <EventMarker />
  }
}
