/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export function use_is_current_page (url : string) {

    const router = useRouter()
    const result =  router?.asPath?.split("?")[0]?.split("/").slice(0, 3).join("/")  === url
    return result
}