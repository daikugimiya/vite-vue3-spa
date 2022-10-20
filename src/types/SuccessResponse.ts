export default interface SuccessResponse {
    status: 'SUCCESS'
    results: History[]
}


type History ={
    transitAt: string
    maskedPan: string
    abtEventType: string
    terminalAcceptance: string
    cancelable: boolean
    isCanceled: boolean
    isUploaded: boolean
    fareAmount: number
    routeId: string
    tripId: string
    stopId: string
    brandName: string
    countAdult: number
    countAdultDiscount: number
    countChild: number
    countChildDiscount: number
    fareCollection: string
    accountMedia: string
};