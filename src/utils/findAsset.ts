import { Asset } from "@/types/contenful.types"


export const findAsset=(id:string, assets:Asset[]) => {
    return assets.find((asset) => asset.sys.id === id)
}