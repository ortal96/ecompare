import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


interface IECommerceInfo {
    url: string;
    consumerKey: string;
    consumerSecret: string;
}

interface IProduct {

}

async function getProducts(eCommerceInfo: IECommerceInfo): Promise<IProduct[]> {


    const wooCommerceRestApi = new WooCommerceRestApi(eCommerceInfo);

    const { data }: { data: IProduct[] } = await wooCommerceRestApi.get('products', {
        per_page: 100,
    });

    return data;
}

getProducts({
    url: 'https://woocommerce-1014284-3585180.cloudwaysapps.com',
    consumerKey: 'ck_09699201179fedd308e875274b6797c1899ab386',
    consumerSecret: 'cs_4c6fd4606b20eae8fb508c91c013428da1f61f87'
})


