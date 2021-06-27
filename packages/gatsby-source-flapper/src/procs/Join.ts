import { Proc, ProxyAsset } from "../types"


export const Join: Proc = (...types: string[]) => {
    return async (context, type, assets) => {
        for (const type_name of types) {
            for (const asset of context.getAssetType(type_name)) {
                const proxy = ProxyAsset(asset)
                assets.push(proxy)
            }
        }
    }
}