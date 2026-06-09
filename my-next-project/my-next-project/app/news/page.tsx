import { getNewsList} from "@/app/_Libs/microcms";
import Newslist from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "../_components/Pagination";
import SearchField from "@/app/_components/SearchField";



export default async function Page() {
    const { contents: news , totalCount} = await getNewsList({
        limit: NEWS_LIST_LIMIT
    });
    return (
        <>
        <SearchField />
        <Newslist news={news} />
        <Pagination  totalCount={totalCount} />
        </>
    );
}
