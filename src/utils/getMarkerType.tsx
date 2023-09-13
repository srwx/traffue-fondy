import { MARKER_TYPE } from '@/const/mockMarkers'

export const getMarkerType = (type: MARKER_TYPE) => {
  switch (type) {
    case MARKER_TYPE.ACCIDENT:
      return '/assets/markerIcons/accident.svg'
    case MARKER_TYPE.CONSTRUCTION:
      return '/assets/markerIcons/construction.svg'
    case MARKER_TYPE.DELAYED:
      return '/assets/markerIcons/delay.svg'
    case MARKER_TYPE.EVENT:
      return '/assets/markerIcons/event.svg'
  }
}
